const jsonString = '[{"inventory_id":9382,"name":"Brown Chair","type":"furniture","tags":["chair","furniture","brown"],"purchased_at":1579190471,"placement":{"room_id":3,"name":"Meeting Room"}},{"inventory_id":9380,"name":"Big Desk","type":"furniture","tags":["desk","furniture","brown"],"purchased_at":1579190642,"placement":{"room_id":3,"name":"Meeting Room"}},{"inventory_id":2932,"name":"LG Monitor 50 inch","type":"electronic","tags":["monitor"],"purchased_at":1579017842,"placement":{"room_id":3,"name":"Lavender"}},{"inventory_id":232,"name":"Sharp Pendingin Ruangan 2PK","type":"electronic","tags":["ac"],"purchased_at":1578931442,"placement":{"room_id":5,"name":"Dhanapala"}},{"inventory_id":9382,"name":"Alat Makan","type":"tableware","tags":["spoon","fork","tableware"],"purchased_at":1578672242,"placement":{"room_id":10,"name":"Rajawali"}}]'

const items = JSON.parse(jsonString)

// find items in the Meeting Room
console.log("== in the Meeting Room")
function getItemsInMeetingRoom() {
    return items.filter(item => item.placement.name === "Meeting Room")
}
console.log(
    getItemsInMeetingRoom()
)
console.log("=====================")

// find all electronic devices
console.log("== electronic devices")
function getElectonicDevices() {
    return items.filter(item => item.type === "electronic")
}
console.log(
    getElectonicDevices()
)
console.log("=====================")

// find all the furniture
console.log("== furnitures")
function getFurnitures() {
    return items.filter(item => item.type === "furniture")
}
console.log(
    getFurnitures()
)
console.log("=====================")

// find all items were purchased on 16 Januari 2020
console.log("== purchased on 16 januari 2020")
function getPurchasedItems16Januari2020() {
    return items.filter(item => {
        const date = new Date(item.purchased_at * 1000)
        return date.getDate() === 16 && date.getMonth() + 1 === 1 && date.getFullYear() === 2020
    })
}
console.log(
    getPurchasedItems16Januari2020()
)
console.log("=====================")


// find all items with brown color
console.log("== brown items")
function getBrownItems() {
    return items.filter(item => item.tags.filter(tag => tag === "brown").length > 0)
}
console.log(
    getBrownItems()
)
console.log("=====================")