const downloadGpx = () => {
    const paths = localStorage.getItem('paths')
    let pathsArr: any[] = []

    if(paths){
        pathsArr = JSON.parse(paths)

        let result = '<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1" creator="runtracker"><metadata/><trk><name></name><desc></desc>'
        pathsArr.forEach((path) => {
          let segmentTag = '<trkseg>';
          segmentTag += `<trkpt lat="${path[1]}" lon="${path[0]}"><ele>${0}</ele></trkpt>`;
          segmentTag += '</trkseg>'
      
          result += segmentTag;
        });
        result += '</trk></gpx>';

        const url = 'data:text/json;charset=utf-8,' + result;
        const link = document.createElement('a');
        link.download = `file__.gpx`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }
}

export default downloadGpx