
// Importing the flexmonster module
import * as Flexmonster from "flexmonster";
import "flexmonster/flexmonster.min.css";
// You can use a different theme by specifying the corresponding path.
// For example, to load the Green theme:
// import "flexmonster/theme/green/flexmonster.min.css";
// See the full list of available themes: https://www.flexmonster.com/doc/customizing-appearance/#built-in-themes

const pivot = new Flexmonster({
    container: "pivot-container",
    toolbar: true,
    height: 600,
    // licenseKey: "XXXX-XXXX-XXXX-XXXX-XXXX",
    report: "https://cdn.flexmonster.com/github/demo-report.json",
    shareReportConnection: {
        url: 'https://olap.flexmonster.com:9500'
    },
    beforetoolbarcreated: toolbar => {
        toolbar.showShareReportTab = true;
    }
});