function pageLayout() {

    // Get the height of the top div in the article on the left
    var topdivheight = document.getElementById('top_div').offsetHeight;

    // Match the height of the aside top element to the article top element
    document.getElementById("top_block").style["height"] = (topdivheight - 20) + "px";

}

window.onload = pageLayout();