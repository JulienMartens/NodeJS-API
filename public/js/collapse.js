//Takes care of the collapsing menu
$(document).ready(function menuCollapser() {
    $('#emgCollapse').on('click', function () {
        $('#emgContainer').addClass('active');
        $('#cinematicsContainer').removeClass('active');
        $('#powerContainer').removeClass('active');
        $('#emgCollapse').addClass('active');
        $('#cinematicsCollapse').removeClass('active');
        $('#powerCollapse').removeClass('active');
    });
    $('#cinematicsCollapse').on('click', function () {
        $('#emgContainer').removeClass('active');
        $('#cinematicsContainer').addClass('active');
        $('#powerContainer').removeClass('active');
        $('#emgCollapse').removeClass('active');
        $('#cinematicsCollapse').addClass('active');
        $('#powerCollapse').removeClass('active');
    });
    $('#powerCollapse').on('click', function () {
        $('#emgContainer').removeClass('active');
        $('#cinematicsContainer').removeClass('active');
        $('#powerContainer').addClass('active');
        $('#emgCollapse').removeClass('active');
        $('#cinematicsCollapse').removeClass('active');
        $('#powerCollapse').addClass('active');
    });
});
