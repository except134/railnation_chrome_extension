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
            language: {
                "processing": chrome.i18n.getMessage("dataTables_translate_processing"),
                "search": chrome.i18n.getMessage("dataTables_translate_search"),
                "lengthMenu": chrome.i18n.getMessage("dataTables_translate_lengthMenu"),
                "info": chrome.i18n.getMessage("dataTables_translate_info"),
                "infoEmpty": chrome.i18n.getMessage("dataTables_translate_infoEmpty"),
                "infoFiltered": chrome.i18n.getMessage("dataTables_translate_infoFiltered"),
                "infoPostFix": chrome.i18n.getMessage("dataTables_translate_infoPostFix"),
                "loadingRecords": chrome.i18n.getMessage("dataTables_translate_loadingRecords"),
                "zeroRecords": chrome.i18n.getMessage("dataTables_translate_zeroRecords"),
                "emptyTable": chrome.i18n.getMessage("dataTables_translate_emptyTable"),
                "paginate": {
                    "first": chrome.i18n.getMessage("dataTables_translate_first"),
                    "previous": chrome.i18n.getMessage("dataTables_translate_previous"),
                    "next": chrome.i18n.getMessage("dataTables_translate_next"),
                    "last": chrome.i18n.getMessage("dataTables_translate_last")
                },
                "aria": {
                    "sortAscending": chrome.i18n.getMessage("dataTables_translate_sortAscending"),
                    "sortDescending": chrome.i18n.getMessage("dataTables_translate_sortDescending")
                }
            },
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