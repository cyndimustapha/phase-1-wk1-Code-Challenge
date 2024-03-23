function speedDetector(speed){

    const speedLimit = 70;
    const maxPoints =12;

    if(speed <= speedLimit){

        console.log('Ok');

    }

    else{

        //for every 5km/s over the speed limit, one demerit point is given
        const demeritPoints = ((speed - speedLimit)/ 5);
        
        /**the maximum points before the drivers license is suspended is 12.
         * before the threshold, the function prints the number of points accumulated
         * once the threshold is passed, the driver's license gets suspended.
         */
        if(demeritPoints <= maxPoints){

            console.log('Points: ' + demeritPoints);
                
        }

        else{

            console.log('License suspended')

        }
    }

}


speedDetector(90);