$(document).ready(function () {
    var currentPassengers = $("#passengers_current").val();
    var requiredPassengers = $("#passengers_required").val();
    function dateNow() {
        var tableData = new Array();
        var percent = 0.001;
        var tickCount = 4;
        while (percent < 0.021) {
            var expectDate = new Date();
            var tempData = new Array();
            var hoursLeft = (requiredPassengers - currentPassengers) / (requiredPassengers * percent * tickCount);
            var minutesLeft = Math.floor(60 * (hoursLeft - Math.floor(hoursLeft)));
            expectDate.setHours(expectDate.getHours() + Math.floor(hoursLeft));
            expectDate.setMinutes(expectDate.getMinutes() + minutesLeft);
            tempData.push((percent * 100).toFixed(1) + "%", Math.floor(hoursLeft) + " " + chrome.i18n.getMessage("time_hours") + " " + minutesLeft + " " + chrome.i18n.getMessage("time_minutes"), expectDate.getDate() + "." + (expectDate.getMonth() + 1) + "." + expectDate.getFullYear() + " " + expectDate.getHours() + ":" + expectDate.getMinutes() + ":" + expectDate.getSeconds());
            tableData.push(tempData);
            percent = percent + 0.001;
        }
        ;
        $('#passengersTable').DataTable({
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
        });
    }
    ;
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
