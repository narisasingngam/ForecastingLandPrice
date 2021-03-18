export default function landValueRange(landValue){
    if(landValue < 20000){
        return '#FFE5CC'
    }else if(landValue < 40000){
        return '#FFB266'
    }else if(landValue < 60000){
        return '#FF8000'
    }else if(landValue < 80000){
        return '#CC6600'
    }else if(landValue >= 80000){
        return '#994C00'
    }
}