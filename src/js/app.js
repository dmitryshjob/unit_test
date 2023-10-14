export function status(status) {
    let result = '';

    if (status.health > 50) {
        result = 'healthy';
    }
    if (status.health > 14 && status.health < 51) {
        result = 'wounded';
    }
    if (status.health < 15) {
        result = 'critical';
    }
    return result;
}

function sortPlayer(a, b) {
    let result = 0;
    if (a.health > b.health) {
        result = -1;
    }
    if (a.health < b.health) {
        result = 1;
    }
    return result;
}

export function sortList(list) {
    list.sort(sortPlayer);
    return list;
}