$(document).ready(function(){
    let GoodsTableData = [
        ["wood.jpg",chrome.i18n.getMessage("goods_Wood"),1,5000],
        ["grain.jpg",chrome.i18n.getMessage("goods_Grain"),1,5000],
        ["coal.jpg",chrome.i18n.getMessage("goods_Coal"),1,5000],
        ["iron_ore.jpg",chrome.i18n.getMessage("goods_Iron_Ore"),1,10000],
        ["boards.jpg",chrome.i18n.getMessage("goods_Boards"),1,15000],
        ["thread.jpg",chrome.i18n.getMessage("goods_Thread"),1,15000],
        ["cotton.jpg",chrome.i18n.getMessage("goods_Cotton"),1,15000],
        ["cattle.jpg",chrome.i18n.getMessage("goods_Cattle"),1,15000],
        ["leather.jpg",chrome.i18n.getMessage("goods_Leather"),1,17500],
        ["iron.jpg",chrome.i18n.getMessage("goods_Iron"),1,20000],
        ["flour.jpg",chrome.i18n.getMessage("goods_Flour"),2,17500],
        ["meat.jpg",chrome.i18n.getMessage("goods_Meat"),2,25000],
        ["paper.jpg",chrome.i18n.getMessage("goods_Paper"),2,25000],
        ["pastries.jpg",chrome.i18n.getMessage("goods_Pastries"),2,27500],
        ["textiles.jpg",chrome.i18n.getMessage("goods_Textiles"),2,25000],
        ["hardware.jpg",chrome.i18n.getMessage("goods_Hardware"),2,30000],
        ["copper_ore.jpg",chrome.i18n.getMessage("goods_Copper_Ore"),2,25000],
        ["quartz.jpg",chrome.i18n.getMessage("goods_Quartz"),2,30000],
        ["copper.jpg",chrome.i18n.getMessage("goods_Copper"),3,35000],
        ["steel.jpg",chrome.i18n.getMessage("goods_Steel"),3,35000],
        ["shoes.jpg",chrome.i18n.getMessage("goods_Shoes"),3,35000],
        ["packaging.jpg",chrome.i18n.getMessage("goods_Packaging"),3,35000],
        ["wires.jpg",chrome.i18n.getMessage("goods_Wires"),3,35000],
        ["pipes.jpg",chrome.i18n.getMessage("goods_Pipes"),3,40000],
        ["glassware.jpg",chrome.i18n.getMessage("goods_Glassware"),3,40000],
        ["windows.jpg",chrome.i18n.getMessage("goods_Windows"),3,50000],
        ["sheet_metal.jpg",chrome.i18n.getMessage("goods_Sheet_Metal"),4,50000],
        ["crude_oil.jpg",chrome.i18n.getMessage("goods_Crude_Oil"),4,60000],
        ["lamps.jpg",chrome.i18n.getMessage("goods_Lamps"),4,65000],
        ["food.jpg",chrome.i18n.getMessage("goods_Food"),4,70000],
        ["clothing.jpg",chrome.i18n.getMessage("goods_Clothing"),4,70000],
        ["stainless_steel.jpg",chrome.i18n.getMessage("goods_Stainless_Steel"),4,80000],
        ["chemicals.jpg",chrome.i18n.getMessage("goods_Chemicals"),4,80000],
        ["silicon.jpg",chrome.i18n.getMessage("goods_Silicon"),4,55000],
        ["aluminium.jpg",chrome.i18n.getMessage("goods_Aluminium"),5,80000],
        ["bauxite.jpg",chrome.i18n.getMessage("goods_Bauxite"),5,70000],
        ["plastics.jpg",chrome.i18n.getMessage("goods_Plastics"),5,85000],
        ["steel_beams.jpg",chrome.i18n.getMessage("goods_Steel_Beams"),5,90000],
        ["pottery.jpg",chrome.i18n.getMessage("goods_Pottery"),5,90000],
        ["petrol.jpg",chrome.i18n.getMessage("goods_Petrol"),5,100000],
        ["machinery.jpg",chrome.i18n.getMessage("goods_Machinery"),5,110000],
        ["cars.jpg",chrome.i18n.getMessage("goods_Cars"),5,120000],
        ["household_goods.jpg",chrome.i18n.getMessage("goods_Household_Goods"),6,90000],
        ["electronics.jpg",chrome.i18n.getMessage("goods_Electronics"),6,175000],
        ["toys.jpg",chrome.i18n.getMessage("goods_Toys"),6,120000],
        ["sports_Goods.jpg",chrome.i18n.getMessage("goods_Sports_Goods"),6,135000],
        ["toiletries.jpg",chrome.i18n.getMessage("goods_Toiletries"),6,145000],
        ["pharmaceuticals.jpg",chrome.i18n.getMessage("goods_Pharmaceuticals"),6,150000]
    ];

    $('#goodsTable').DataTable( {
            data: GoodsTableData,
            paging: false,
            scrollY: "400px",
            scrollCollapse: true,
            searching: true,
            destroy: false,
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
                { title: " ",
                    render: function ( data, type, full, meta ) {
                        return '<img src="img/goods/'+data+'">';
                    }},
                { title: chrome.i18n.getMessage("Good") },
                { title: chrome.i18n.getMessage("Era") },
                { title: chrome.i18n.getMessage("Waggon_Cost") }
            ]
    });
});