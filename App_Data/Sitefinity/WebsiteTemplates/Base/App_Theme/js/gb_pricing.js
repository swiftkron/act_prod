$(document).ready(function () {
   /* change pricing term and destination */
    //cloud
    $('#cloudBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/ActPremiumCloud/plan/Annual?srid=' + srid + '&ror=' + ror + '');
    $('#cloudFreq').change(function () {
        var gb_cloudVal = $('#cloudFreq').val();
        if (gb_cloudVal == "monthly"){
            $('#cloudPrice').html('<span class="usd">&pound;</span>32<span class="cents">.40</span>');
            $('#cloudBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/ActPremiumCloud/plan/Month?srid=' + srid + '&ror=' + ror + '');
        }
        else {
            $('#cloudPrice').html('<span class="usd">&pound;</span>27');
            $('#cloudBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/ActPremiumCloud/plan/Annual?srid=' + srid + '&ror=' + ror + '');
        }
    });
    //prem
    $('#premBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/ActPremium/plan/Month?srid=' + srid + '&ror=' + ror + '');
    $('#premFreq').change(function () {
        var gb_premVal = $('#premFreq').val();
        if (gb_premVal == "annual") {
            $('#premPrice').html('<span class="usd">&pound;</span>228');
            $('#premPriceU').html('<span class="usd">&pound;</span>190');
            $('#premTerm').html('GBP/user');
            $('#premBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/ActPremium/plan/Annual?srid=' + srid + '&ror=' + ror + '');
        }
        else if (gb_premVal == "license") {
            $('#premPrice').html('<span class="usd">&pound;</span>456');
            $('#premPriceU').html('<span class="usd">&pound;</span>380');
            $('#premTerm').html('USD/user');
            $('#premBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/ActPremium/plan/Annual?per=true&srid=' + srid + '&ror=' + ror + '');
        }
        else {
            $('#premPrice').html('<span class="usd">&pound;</span>22<span class="cents">.80</span>');
            $('#premTerm').html('USD/user/month');
            $('#premBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/ActPremium/plan/Month?srid=' + srid + '&ror=' + ror + '');
        }
    });
		$('#proBuy').attr('href', 'https://buy.act.com/en-gb/purchase/product/actpro/plan/perpetual?srid=' + srid + '&ror=' + ror + '');
    // KM tracking on buy click
    $('#cloudBuy').click(function () {
        var term = $('#cloudFreq').val();
        _kmq.push(["record", "buyClick", [term]]);
    });
    $('#premBuy').click(function () {
        var term = $('#premFreq').val();
        _kmq.push(["record", "buyClick", [term]]);
    });
});