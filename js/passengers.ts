$(document).ready(function(){

    let currentPassengers:number = $("#passengers_current").val();
    let requiredPassengers:number = $("#passengers_required").val();

    function dateNow() {
        let tableData:any[] = new Array();
        let percent: number = 0.001;
        const tickCount: number = 4;

        while (percent < 0.021) {
            let expectDate = new Date();
            let tempData:string[] = new Array();
            let hoursLeft: number = (requiredPassengers - currentPassengers) / (requiredPassengers*percent*tickCount);
            let minutesLeft: number = Math.floor(60*(hoursLeft - Math.floor(hoursLeft)));
            expectDate.setHours(expectDate.getHours() + Math.floor(hoursLeft));
            expectDate.setMinutes(expectDate.getMinutes() + minutesLeft);
            tempData.push(
                (percent * 100).toFixed(1) + "%",
                Math.floor(hoursLeft) + " " + chrome.i18n.getMessage("time_hours") + " " + minutesLeft + " " + chrome.i18n.getMessage("time_minutes"),
                expectDate.getDate() + "." + (expectDate.getMonth()+1) + "." + expectDate.getFullYear() + " " + expectDate.getHours() + ":" + expectDate.getMinutes() + ":" + expectDate.getSeconds()
            );
            tableData.push(tempData);
            percent=percent + 0.001;
        };
        $('#passengersTable').DataTable( {
            data: tableData,
            paging: false,
            scrollY: "400px",
            scrollCollapse: true,
            searching: false,
            destroy: true,
            info: false,
            columns: [
                { title: chrome.i18n.getMessage("delivery_speed") },
                { title: chrome.i18n.getMessage("time_left") },
                { title: chrome.i18n.getMessage("arrival_time") },
            ]
        } );
    };
    dateNow();

    $("#passengers_current").keyup(function () {
        currentPassengers = $(this).val();
        dateNow();
    });

    $("#passengers_required").keyup(function () {
        requiredPassengers = $(this).val();
        dateNow();
    });
});