


const covid19ImpactEstimator = (data) => {
    /* const data={
         region: {
         name: "Africa",
         avgAge: 19.7,
         avgDailyIncomeInUSD: 5,
         avgDailyIncomePopulation: 0.71
         },
         periodType: "months",
         timeToElapse: 58,
         reportedCases: 674,
         population: 66622705,
         totalHospitalBeds: 1380614
         }
         
     console.log(data)
 
     console.log('i am so favoured')*/
 
     let output={
         data,
         impact:{
             currentlyInfected:0,
             infectionsByRequestedTime:0,
             severeCasesByRequestedTime:0,
             hospitalBedsByRequestedTime:0,
             casesForICUByRequestedTime:0,
             casesForVentilatorsByRequestedTime:0,
             dollarsInFlight:0
         },
         severeImpact:{
             currentlyInfected:0,
             infectionsByRequestedTime:0,
             severeCasesByRequestedTime:0,
             hospitalBedsByRequestedTime:0,
             casesForICUByRequestedTime:0,
             casesForVentilatorsByRequestedTime:0,
             dollarsInFlight:0
         }
     }
 
     output.impact.currentlyInfected=data.reportedCases*10
     output.severeImpact.currentlyInfected=data.reportedCases*50
 
     if(data.periodType=='days'){
        output.impact.infectionsByRequestedTime=((2**(Math.round(data.timeToElapse/3)))*output.impact.currentlyInfected)
        console.log((2**(Math.round(data.timeToElapse/3)))*output.impact.currentlyInfected)
 output.severeImpact.infectionsByRequestedTime=output.severeImpact.currentlyInfected*(2**Math.round(data.timeToElapse/3)  )
     }else if(data.periodType=='months'){
      output.impact.infectionsByRequestedTime=output.impact.currentlyInfected*(2**Math.round(data.timeToElapse*30/3))
      output.severeImpact.infectionsByRequestedTime=output.severeImpact.currentlyInfected*(2**Math.round(data.timeToElapse*30/3))
     }else if(data.periodType=='weeks'){
         output.impact.infectionsByRequestedTime=output.impact.currentlyInfected*(2**Math.round(data.timeToElapse*30/3))
         output.severeImpact.infectionsByRequestedTime=output.severeImpact.currentlyInfected*(2**Math.round(data.timeToElapse*7/3))
 
     }
 
     //output.impact.infectionsByRequestedTime=output.impact.currentlyInfected
 
     output.impact.severeCasesByRequestedTime=0.15*output.impact.infectionsByRequestedTime
     output.severeImpact.severeCasesByRequestedTime=0.15*output.severeImpact.infectionsByRequestedTime
 
     output.impact.hospitalBedsByRequestedTime=(data.totalHospitalBeds*0.35*0.95)-output.impact.severeCasesByRequestedTime
     output.severeImpact.hospitalBedsByRequestedTime=(data.totalHospitalBeds*0.35*0.95)-output.severeImpact.severeCasesByRequestedTime
 
 
     // -----------------------PART 3----------------------------------------------------------------
       
     output.impact.casesForICUByRequestedTime=output.impact.infectionsByRequestedTime*0.05
     output.severeImpact.casesForICUByRequestedTime=output.severeImpact.infectionsByRequestedTime*0.05
 
     output.impact.casesForVentilatorsByRequestedTime=output.impact.infectionsByRequestedTime*0.02
     output.severeImpact.casesForVentilatorsByRequestedTime=output.severeImpact.infectionsByRequestedTime*0.02
 
     if(data.periodType=='days'){
         console.log('i entered ooo')
         console.log(data.region.avgDailyIncomeInUSD)
         console.log(data.timeToElapse)
         console.log(output.impact.infectionsByRequestedTime)
         output.impact.dollarsInFlight=0.85*data.region.avgDailyIncomeInUSD*data.timeToElapse*output.impact.infectionsByRequestedTime
         output.severeImpact.dollarsInFlight=0.65*output.severeImpact.avgDailyIncomeInUSD*output.severeImpact.timeToElapse*output.severeImpact.infectionsByRequestedTime
     }else if(data.periodType=='weeks'){
         output.impact.dollarsInFlight=0.65*output.impact.avgDailyIncomeInUSD*impact.timeToElapse*7*output.impact.infectionsByRequestedTime
         output.severeImpact.dollarsInFlight=0.65*output.severeImpact.avgDailyIncomeInUSD*output.severeImpact.timeToElapse*7*severeImpact.infectionsByRequestedTime
     }else if(data.periodType=='months'){
         output.impact.dollarsInFlight=0.65*data.region.avgDailyIncomeInUSD*data.timeToElapse*30*output.impact.infectionsByRequestedTime
         output.severeImpact.dollarsInFlight=0.65*data.region.avgDailyIncomeInUSD*data.timeToElapse*30*output.severeImpact.infectionsByRequestedTime
     }
 
 
     return output
 
     
 
 
 
 };
 
 export default covid19ImpactEstimator;
 