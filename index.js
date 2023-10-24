function mySettimeout(delay){
    return new Promise(resolve => setTimeout(resolve, delay));
}

function makeToys() {
    return new Promise((resolve,reject) => {
        if(Math.random() > 0.1){
            resolve('Undefected')
        }else {
            reject('Defected')
        }
    })
}

function deliverToys(status) {
    return new Promise((resolve,reject) => {
        if(status === 'Undefected'){
            if(Math.random() > 0.7){
                resolve('Toy has been delivered')
            }else {
                reject('Delivery was unsuccessful')
            }
        }
    })
}

function sellToys(stat) {
    return new Promise((resolve,reject) => {
        if(stat === 'Toy has been delivered'){
            if(Math.random() > 0.7){
                resolve('Toy has been sold')
            }else {
                reject('Toy was unsuccessful')
            }
        }
    })
}

makeToys()
.then((status) => deliverToys(status))
.then((stat) => sellToys(stat))
.then((res) => console.log(res))
.catch(err => console.log(err))

mySettimeout(3000).then((status) => console.log('3 wami damzadebas'))
mySettimeout(2000).then((stat) => console.log('2wami mitanas'))
mySettimeout(1000).then((res) => console.log('1 wami gakidvas'))


// async function makeToys() {
//         if(Math.random() > 0.1){
//             return('Undefected')
//         }else {
//             return('Defected')
//         }
//     }

// async function deliverToys(status) {
//         if(status === 'Undefected'){
//             if(Math.random() > 0.2){
//                 return('Toy has been delivered')
//             }else {
//                 return('Delivery was unsuccessful')
//             }
//         }
//     }

// async function sellToys(stat) {
//         if(stat === 'Toy has been delivered'){
//             if(Math.random() > 0.3){
//                 return('Toy has been sold')
//             }else {
//                 return('Toy was unsuccessful')
//             }
//         }
//     }

// async function promisify(){
//     try {
//         const status = await makeToys()
//         const stat = await deliverToys(status)
//         const result = await sellToys(stat)
       
//         console.log(result)
        
//     } catch (error) {
//         console.log('error')
//     }
// }

// promisify()

// defected variantis ambavi leqciaze ar akhsna da mets ver movidzie bevri vedzebe imitomaa xandaxan undefined, nara then da catch sworad miweria amitom isev eg davtove da is davakomentare