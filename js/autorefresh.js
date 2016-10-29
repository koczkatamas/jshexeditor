var lastMod = null;
function checkModifications() {
    $.ajax({ type: "HEAD", async: true, url: location.href }).done(function (message, text, jqXHR) {
        var currMod = jqXHR.getResponseHeader('Last-Modified');
        if(lastMod !== null && currMod !== lastMod)
            location.reload();
        lastMod = currMod;
        setTimeout(checkModifications, 250);
    });
}
checkModifications();
