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