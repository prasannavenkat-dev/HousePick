
// //VALUES OF GYM,MARKET,PARKINNG,TEASHOP,RESTAURANT



export default function calculate(gymValue, teaShopValue, parkingValue, marketValue, restaurantValue, houses) {



    //CALCULATION OF DIFFERENCE
    const res = []
    let houseValue
    for (let i = 0; i < houses.length; i++) {
        let house;
        for (let j = 0; j < 2; j++) {
            if (j === 0) {
                house = houses[i][j]

            }
            if (j === 1) {
                houseValue = houses[i][j]

            }
        }


        let value;
        let count = 0
        //GYM DIFFERENCE
        if (houseValue > gymValue) {
            value = houseValue - gymValue
        }
        else {
            value = gymValue - houseValue
        }

        count += value
        //MARKET DIFFERENCE

        if (houseValue > marketValue) {

            value = houseValue - marketValue

        }
        else {

            value = marketValue - houseValue

        }
        count += value



        //TEASHOP DIFFERENCE

        if (houseValue > teaShopValue) {

            value = houseValue - teaShopValue

        }
        else {

            value = teaShopValue - houseValue

        }
        count += value


        //PARKING DIFFERENCE

        if (houseValue > parkingValue) {

            value = houseValue - parkingValue

        }
        else {

            value = parkingValue - houseValue

        }
        count += value


        //RESTAURANT DIFFERENCE

        if (houseValue > restaurantValue) {

            value = houseValue - restaurantValue

        }
        else {

            value = restaurantValue - houseValue

        }
        count += value

        res.push([house, count, houseValue])
    }

    //CALCULATION OF MINIMUM
    console.log(res)

    let min = res[0][1];
    let minName = res[0][0]
    let block=res[0][2];
    for (let i = 0; i < res.length; i++) {

        if (res[i][1] < min) {
            min = res[i][1]
            minName = res[i][0]
            block = res[i][2]
        }


    }
   

    return [minName, block]


}
