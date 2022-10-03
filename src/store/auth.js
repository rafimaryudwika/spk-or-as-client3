import { defineStore } from 'pinia'
import auth from '../api/auth'
import axios from 'axios'
import { ref } from 'vue'

export const useAuth = defineStore('auth-store', () => {
    const user = ref(null)

    const register = async function (credentials) {
        try {
            await auth.csrf()
            await auth.register(credentials)
            getUser()
        } catch (err) {
            user.value = {}
            console.error('Error loading new arrivals:', err)
            return err
        }
    }

    const login = async function (credentials) {
        try {
            await auth.csrf()
            await auth.login(credentials)
            getUser()
        } catch (err) {
            user.value = null
            console.error('Error loading new arrivals:', err)
            return err
        }
    }

    const logout = async function () {
        try {
            await auth.logout()
            user.value = null
        } catch (err) {
            console.error('Error loading new arrivals:', err)
            return err
        }
    }

    const getUser = async function () {
        try {
            const response = await auth.user()
            user.value = response.data
            return response.data
        } catch (err) {
            console.error('Error loading new arrivals:', err)
            user.value = null
            return err
        }
    }

    return {
        user,
        register,
        login,
        getUser,
        logout,
    }
})
