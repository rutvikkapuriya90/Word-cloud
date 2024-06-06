console.log("Script loaded");

const words =[{'text': 'સલમાન', 'size': 30},
 {'text': 'પર્યાવરણ', 'size': 30},
 {'text': 'કુલ', 'size': 27},
 {'text': 'બેઠક', 'size': 27},
 {'text': 'અમદાવાદ', 'size': 26},
 {'text': 'ચૂંટણી', 'size': 26},
 {'text': 'સૌ', 'size': 24},
 {'text': 'વિશ્વ', 'size': 23},
 {'text': 'ભાજપ', 'size': 22},
 {'text': 'રન', 'size': 19},
 {'text': 'ફોર્મ', 'size': 19},
 {'text': 'ક્ષત્રિય', 'size': 19},
 {'text': 'પૂર્વ', 'size': 18},
 {'text': 'ભાજપ', 'size': 17},
 {'text': 'બિશ્નોઈ', 'size': 17},
 {'text': 'કોલકાતા', 'size': 16},
 {'text': 'લોકસભા', 'size': 16},
 {'text': 'લાખ', 'size': 16},
 {'text': 'દિવસે', 'size': 16},
 {'text': 'દાઉદ', 'size': 16},
 {'text': 'ઉમેદવારી', 'size': 16},
 {'text': 'મેચ', 'size': 15},
 {'text': 'સમય', 'size': 15},
 {'text': 'આજે', 'size': 15},
 {'text': 'શરૂ', 'size': 15},
 {'text': 'શાહ', 'size': 15},
 {'text': 'જાહેરાત', 'size': 14},
 {'text': 'લાખ', 'size': 14},
 {'text': 'ટકા', 'size': 14},
 {'text': 'અનમોલ', 'size': 14},
 {'text': 'તપાસ', 'size': 14},
 {'text': 'દિવસ', 'size': 14},
 {'text': 'ગુજરાત', 'size': 13},
 {'text': 'સિક્સ', 'size': 13},
 {'text': 'રોહિત', 'size': 13},
 {'text': 'પોઇન્ટ', 'size': 13},
 {'text': 'ચૂંટણી', 'size': 13},
 {'text': 'ભાજપે', 'size': 13},
 {'text': 'ભાજપ', 'size': 13},
 {'text': 'ઉમેદવાર', 'size': 13},
 {'text': 'સહિત', 'size': 13},
 {'text': 'જાહેર', 'size': 13},
 {'text': 'ઘર', 'size': 13},
 {'text': 'રો', 'size': 13},
 {'text': 'હાર્દિક', 'size': 12},
 {'text': 'સામાન્ય', 'size': 12},
 {'text': 'દાવો', 'size': 12},
 {'text': 'આવ્યું', 'size': 12},
 {'text': 'કામ', 'size': 12},
 {'text': 'બંધ', 'size': 12},
 {'text': 'એસએલઆર', 'size': 12},
 {'text': 'સલમાન', 'size': 12},
 {'text': 'પોલીસ', 'size': 12},
 {'text': 'રૂપિયા', 'size': 12},
 {'text': 'સંઘવી', 'size': 12},
 {'text': 'ભારત', 'size': 11},
 {'text': 'વિકેટ', 'size': 11},
 {'text': 'પ્રદર્શન', 'size': 11},
 {'text': 'જે', 'size': 11},
 {'text': 'ઉપરાંત', 'size': 11},
 {'text': 'શક્યતા', 'size': 11},
 {'text': 'કરોડ', 'size': 11},
 {'text': 'રજૂ', 'size': 11},
 {'text': 'પશ્ચિમ', 'size': 11},
 {'text': 'કેસ', 'size': 11},
 {'text': 'સવારે', 'size': 11},
 {'text': 'દેવપુરા', 'size': 11},
 {'text': 'સ્થળ', 'size': 10},
 {'text': 'રાજસ્થાન', 'size': 10},
 {'text': 'રેકોર્ડ', 'size': 10},
 {'text': 'બોલિંગ', 'size': 10},
 {'text': '૦', 'size': 10},
 {'text': 'ઝડપી', 'size': 10},
 {'text': 'મિનિટ', 'size': 10},
 {'text': 'લોકો', 'size': 10},
 {'text': 'ટિકિટ', 'size': 10},
 {'text': 'વાત', 'size': 10},
 {'text': 'ભાજપ', 'size': 10},
 {'text': 'અનુસાર', 'size': 10},
 {'text': 'ફાયર', 'size': 10},
 {'text': 'પોલીસે', 'size': 10},
 {'text': 'રાજકોટ', 'size': 10},
 {'text': 'રૂપાલા', 'size': 10},
 {'text': 'દિવસ', 'size': 10},
 {'text': 'વન', 'size': 9},
 {'text': 'પોઈન્ટ', 'size': 9},
 {'text': 'વર્ષે', 'size': 9},
 {'text': 'હજુ', 'size': 9},
 {'text': 'નવી', 'size': 9},
 {'text': 'કરવા', 'size': 9},
 {'text': '(પહેલા', 'size': 9},
 {'text': 'પાના', 'size': 9},
 {'text': 'ચાલુ)', 'size': 9},
 {'text': 'નોટિસ', 'size': 9},
 {'text': 'લાખ', 'size': 9},
 {'text': 'મુજબ', 'size': 9},
 {'text': 'વર્ષ', 'size': 9},
 {'text': 'પટેલ', 'size': 9},
 {'text': 'બેસણું', 'size': 9},
 {'text': 'બ્યુટી', 'size': 9}]
const layout = d3.layout.cloud()
    .size([800, 600])
    .words(words.map(d => ({ text: d.text, size: d.size })))
    .padding(5)
    .fontSize(d => d.size)
    .on("end", draw);

layout.start();

function draw(words) {
    console.log("Drawing words:", words);
    d3.select("#wordcloud")
        .append("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", d => d.size + "px")
        .style("fill", "#69b3a2")
        .attr("text-anchor", "middle")
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text)
        .on("mouseover", function (event, d) {
            console.log("Mouseover on:", d.text);
            d3.select(this)
                .style("fill", "#ff6347");
            const tooltip = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px")
                .text(`${d.text}: ${d.size}`)
                .style("display", "block");
        })
        .on("mouseout", function () {
            d3.select(this)
                .style("fill", "#69b3a2");
            d3.selectAll(".tooltip").remove();
        });
}
