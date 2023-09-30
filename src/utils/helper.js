

function checkTime(timeString1,timeString1)
{
    let datatime1=new Date(timeString1);
    let datatime2=new Date(timeString2);
    return datatime1.getTime()>datatime2.getTime();
}

module.exports=checkTime;