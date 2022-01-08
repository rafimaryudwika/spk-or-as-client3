import { ref, reactive } from 'vue';

function order() {
    let orderState = reactive({
        direction: 'asc'
    });

    function orderItems(items) {
        items.sort(compareItems);
        changeOrderDirection();
    }

    function changeOrderDirection() {
        if (orderState.direction === 'desc') {
            orderState.direction = 'asc';
        } else if (orderState.direction === 'asc') {
            orderState.direction = 'desc';
        }
    }

    function evaluateAscOrder(itemName, otherItemName) {
        if (itemName < otherItemName)
            return 1;
        if (itemName > otherItemName)
            return -1;
        return 0;
    }

    function evaluateDescOrder(itemName, otherItemName) {
        if (itemName > otherItemName)
            return 1;
        if (itemName < otherItemName)
            return -1;
        return 0;
    }

    function compareItems(item, otherItem) {
        const itemName = item.nama.toUpperCase();
        const otherItemName = otherItem.nama.toUpperCase();

        if (orderState.direction === 'desc') {
            return evaluateDescOrder(itemName, otherItemName);
        } else {
            return evaluateAscOrder(itemName, otherItemName);
        }
    }

    return {
        orderState,
        orderItems
    };
}

export default order;