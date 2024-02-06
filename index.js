// + Hide/Show the answer to a question when the question is clicked
// - Navigate the questions and hide/show answers using keyboard navigation alone - will be aded in the future
// + View the optimal layout for the interface depending on their device's screen size
// + See hover and focus states for all interactive elements on the page

$(document).ready(function () {
    $(".accordion-content p").hide();
});

function addContainerHeight(contentHeight) {
    const containerHeight = $("#container").outerHeight() + contentHeight;
    $("#container").animate(
        {
            height: containerHeight + "px",
        },
        400
    );
}

function removeContainerHeight(contentHeight) {
    const containerHeight = $("#container").outerHeight() - contentHeight;
    $("#container").animate(
        {
            height: containerHeight + "px",
        },
        400
    );
}

$(window).on("load", function () {
    // CLICK EVENT
    $("button").click(function () {
        const paragraph = $(this).parent().find(".accordion-content p");
        const contentHeight = paragraph.outerHeight();
        paragraph.slideToggle();

        let isExpanded;
        if ($(this).attr("aria-expanded") === "true") {
            isExpanded = true;
            $(this).attr("aria-expanded", !isExpanded);

            removeContainerHeight(contentHeight);
        } else {
            isExpanded = false;
            $(this).attr("aria-expanded", !isExpanded);
            addContainerHeight(contentHeight);
        }

        $(this)
            .find("img")
            .attr(
                "src",
                isExpanded
                    ? "./assets/images/icon-plus.svg"
                    : "./assets/images/icon-minus.svg"
            );
    });
});
