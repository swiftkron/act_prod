$(document).ready(function () {
    /* change pricing term and destination */
    //cloud
    $('#cloudBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremiumCloud/plan/Annual?srid=' + srid + '&ror=' + ror + '');
    $('#cloudFreq').change(function () {
        var cloudVal = $('#cloudFreq').val();
        if (cloudVal == "monthly"){
            $('#cloudPrice').html('<span class="usd">$</span>42');
            $('#cloudBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremiumCloud/plan/Month?srid=' + srid + '&ror=' + ror + '');
        }
        else {
            $('#cloudPrice').html('<span class="usd">$</span>35');
            $('#cloudBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremiumCloud/plan/Annual?srid=' + srid + '&ror=' + ror + '');
        }
    });
    //prem
    $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Month?srid=' + srid + '&ror=' + ror + '');
    $('#premFreq').change(function () {
        var premVal = $('#premFreq').val();
        if (premVal == "annual") {
            $('#premPrice').html('<span class="usd">$</span>250');
            $('#premPriceU').html('<span class="usd">$</span>190');
            $('#premTerm').html('USD/user');
            $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Annual?srid=' + srid + '&ror=' + ror + '');
        }
        else if (premVal == "license") {
            $('#premPrice').html('<span class="usd">$</span>500');
            $('#premPriceU').html('<span class="usd">$</span>380');
            $('#premTerm').html('USD/user');
            $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Annual?per=true&srid=' + srid + '&ror=' + ror + '');
        }
        else {
            $('#premPrice').html('<span class="usd">$</span>25');
            $('#premTerm').html('USD/user/month');
            $('#premBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/ActPremium/plan/Month?srid=' + srid + '&ror=' + ror + '');
        }
    });
$('#proBuy').attr('href', 'https://buy.act.com/en-us/purchase/product/actpro/plan/perpetual?srid=' + srid + '&ror=' + ror + '');
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