// Function to detect speed and calculate demerit points if speed limit is passed
function speedDetector(speed){
    
    //declaring variables for speed limit and maximum demerit points allowed
    const speedLimit = 70;
    const maxPoints =12;
    
    //checking if speed is within speed limit
    if(speed <= speedLimit){

        console.log('Ok');

    }

    else{

        //for every 5km/s over the speed limit, one demerit point is given
        //calculating demerit points
        const demeritPoints = ((speed - speedLimit)/ 5);
        
        //check if demerit points exceed threshold
        if(demeritPoints <= maxPoints){
            
            //if below threshold, print number of points accumulated
            console.log('Points: ' + demeritPoints);
                
        }

        else{
            
            //if it exceeds threshold, license gets suspended
            console.log('License suspended')

        }
    }

}

//testing function
speedDetector(90);