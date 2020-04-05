// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const counties = [
  {"slug":"jefferson-alabama","cases":"376","deaths":"9","county":"Jefferson","state":"Alabama"},
  {"slug":"maricopa-arizona","cases":"1171","deaths":"28","county":"Maricopa","state":"Arizona"},
  {"slug":"pima-arizona","cases":"326","deaths":"12","county":"Pima","state":"Arizona"},
  {"slug":"alameda-california","cases":"464","deaths":"12","county":"Alameda","state":"California"},
  {"slug":"contracosta-california","cases":"353","deaths":"5","county":"Contra Costa","state":"California"},
  {"slug":"kern-california","cases":"205","deaths":"2","county":"Kern","state":"California"},
  {"slug":"losangeles-california","cases":"5277","deaths":"117","county":"Los Angeles","state":"California"},
  {"slug":"orange-california","cases":"786","deaths":"14","county":"Orange","state":"California"},
  {"slug":"riverside-california","cases":"665","deaths":"18","county":"Riverside","state":"California"},
  {"slug":"sacramento-california","cases":"411","deaths":"12","county":"Sacramento","state":"California"},
  {"slug":"sanbernardino-california","cases":"353","deaths":"13","county":"San Bernardino","state":"California"},
  {"slug":"sandiego-california","cases":"1209","deaths":"18","county":"San Diego","state":"California"},
  {"slug":"sanfrancisco-california","cases":"529","deaths":"8","county":"San Francisco","state":"California"},
  {"slug":"sanmateo-california","cases":"538","deaths":"13","county":"San Mateo","state":"California"},
  {"slug":"santaclara-california","cases":"1148","deaths":"40","county":"Santa Clara","state":"California"},
  {"slug":"ventura-california","cases":"203","deaths":"6","county":"Ventura","state":"California"},
  {"slug":"adams-colorado","cases":"320","deaths":"9","county":"Adams","state":"Colorado"},
  {"slug":"arapahoe-colorado","cases":"552","deaths":"10","county":"Arapahoe","state":"Colorado"},
  {"slug":"denver-colorado","cases":"769","deaths":"14","county":"Denver","state":"Colorado"},
  {"slug":"douglas-colorado","cases":"209","deaths":"3","county":"Douglas","state":"Colorado"},
  {"slug":"eagle-colorado","cases":"333","deaths":"5","county":"Eagle","state":"Colorado"},
  {"slug":"elpaso-colorado","cases":"406","deaths":"22","county":"El Paso","state":"Colorado"},
  {"slug":"jefferson-colorado","cases":"483","deaths":"15","county":"Jefferson","state":"Colorado"},
  {"slug":"unknown-colorado","cases":"211","deaths":"0","county":"Unknown","state":"Colorado"},
  {"slug":"weld-colorado","cases":"424","deaths":"22","county":"Weld","state":"Colorado"},
  {"slug":"fairfield-connecticut","cases":"2824","deaths":"86","county":"Fairfield","state":"Connecticut"},
  {"slug":"hartford-connecticut","cases":"726","deaths":"26","county":"Hartford","state":"Connecticut"},
  {"slug":"newhaven-connecticut","cases":"1024","deaths":"29","county":"New Haven","state":"Connecticut"},
  {"slug":"unknown-connecticut","cases":"241","deaths":"1","county":"Unknown","state":"Connecticut"},
  {"slug":"newcastle-delaware","cases":"400","deaths":"9","county":"New Castle","state":"Delaware"},
  {"slug":"districtofcolumbia-districtofcolumbia","cases":"902","deaths":"21","county":"District of Columbia","state":"District of Columbia"},
  {"slug":"broward-florida","cases":"1765","deaths":"32","county":"Broward","state":"Florida"},
  {"slug":"collier-florida","cases":"221","deaths":"2","county":"Collier","state":"Florida"},
  {"slug":"duval-florida","cases":"387","deaths":"9","county":"Duval","state":"Florida"},
  {"slug":"hillsborough-florida","cases":"497","deaths":"5","county":"Hillsborough","state":"Florida"},
  {"slug":"lee-florida","cases":"347","deaths":"11","county":"Lee","state":"Florida"},
  {"slug":"miami-dade-florida","cases":"3889","deaths":"31","county":"Miami-Dade","state":"Florida"},
  {"slug":"orange-florida","cases":"656","deaths":"7","county":"Orange","state":"Florida"},
  {"slug":"osceola-florida","cases":"216","deaths":"4","county":"Osceola","state":"Florida"},
  {"slug":"palmbeach-florida","cases":"952","deaths":"35","county":"Palm Beach","state":"Florida"},
  {"slug":"pinellas-florida","cases":"342","deaths":"7","county":"Pinellas","state":"Florida"},
  {"slug":"clayton-georgia","cases":"235","deaths":"9","county":"Clayton","state":"Georgia"},
  {"slug":"cobb-georgia","cases":"453","deaths":"23","county":"Cobb","state":"Georgia"},
  {"slug":"dekalb-georgia","cases":"539","deaths":"9","county":"DeKalb","state":"Georgia"},
  {"slug":"dougherty-georgia","cases":"685","deaths":"30","county":"Dougherty","state":"Georgia"},
  {"slug":"fulton-georgia","cases":"959","deaths":"26","county":"Fulton","state":"Georgia"},
  {"slug":"gwinnett-georgia","cases":"400","deaths":"8","county":"Gwinnett","state":"Georgia"},
  {"slug":"unknown-guam","cases":"223","deaths":"4","county":"Unknown","state":"Guam"},
  {"slug":"honolulu-hawaii","cases":"266","deaths":"2","county":"Honolulu","state":"Hawaii"},
  {"slug":"ada-idaho","cases":"385","deaths":"3","county":"Ada","state":"Idaho"},
  {"slug":"blaine-idaho","cases":"410","deaths":"2","county":"Blaine","state":"Idaho"},
  {"slug":"cook-illinois","cases":"7439","deaths":"167","county":"Cook","state":"Illinois"},
  {"slug":"dupage-illinois","cases":"590","deaths":"18","county":"DuPage","state":"Illinois"},
  {"slug":"kane-illinois","cases":"207","deaths":"12","county":"Kane","state":"Illinois"},
  {"slug":"lake-illinois","cases":"689","deaths":"14","county":"Lake","state":"Illinois"},
  {"slug":"will-illinois","cases":"606","deaths":"11","county":"Will","state":"Illinois"},
  {"slug":"hamilton-indiana","cases":"265","deaths":"4","county":"Hamilton","state":"Indiana"},
  {"slug":"lake-indiana","cases":"313","deaths":"8","county":"Lake","state":"Indiana"},
  {"slug":"marion-indiana","cases":"1570","deaths":"34","county":"Marion","state":"Indiana"},
  {"slug":"jefferson-kentucky","cases":"294","deaths":"12","county":"Jefferson","state":"Kentucky"},
  {"slug":"ascension-louisiana","cases":"284","deaths":"7","county":"Ascension","state":"Louisiana"},
  {"slug":"caddo-louisiana","cases":"598","deaths":"10","county":"Caddo","state":"Louisiana"},
  {"slug":"eastbatonrouge-louisiana","cases":"621","deaths":"14","county":"East Baton Rouge","state":"Louisiana"},
  {"slug":"jefferson-louisiana","cases":"3008","deaths":"95","county":"Jefferson","state":"Louisiana"},
  {"slug":"lafayette-louisiana","cases":"229","deaths":"4","county":"Lafayette","state":"Louisiana"},
  {"slug":"lafourche-louisiana","cases":"217","deaths":"3","county":"Lafourche","state":"Louisiana"},
  {"slug":"orleans-louisiana","cases":"3966","deaths":"153","county":"Orleans","state":"Louisiana"},
  {"slug":"st.bernard-louisiana","cases":"239","deaths":"8","county":"St. Bernard","state":"Louisiana"},
  {"slug":"st.charles-louisiana","cases":"252","deaths":"12","county":"St. Charles","state":"Louisiana"},
  {"slug":"st.johnthebaptist-louisiana","cases":"338","deaths":"23","county":"St. John the Baptist","state":"Louisiana"},
  {"slug":"st.tammany-louisiana","cases":"532","deaths":"14","county":"St. Tammany","state":"Louisiana"},
  {"slug":"cumberland-maine","cases":"231","deaths":"7","county":"Cumberland","state":"Maine"},
  {"slug":"annearundel-maryland","cases":"289","deaths":"6","county":"Anne Arundel","state":"Maryland"},
  {"slug":"baltimore-maryland","cases":"491","deaths":"4","county":"Baltimore","state":"Maryland"},
  {"slug":"baltimorecity-maryland","cases":"343","deaths":"6","county":"Baltimore city","state":"Maryland"},
  {"slug":"montgomery-maryland","cases":"640","deaths":"9","county":"Montgomery","state":"Maryland"},
  {"slug":"princegeorge's-maryland","cases":"653","deaths":"13","county":"Prince George's","state":"Maryland"},
  {"slug":"barnstable-massachusetts","cases":"330","deaths":"6","county":"Barnstable","state":"Massachusetts"},
  {"slug":"berkshire-massachusetts","cases":"253","deaths":"10","county":"Berkshire","state":"Massachusetts"},
  {"slug":"bristol-massachusetts","cases":"601","deaths":"5","county":"Bristol","state":"Massachusetts"},
  {"slug":"essex-massachusetts","cases":"1400","deaths":"25","county":"Essex","state":"Massachusetts"},
  {"slug":"hampden-massachusetts","cases":"733","deaths":"35","county":"Hampden","state":"Massachusetts"},
  {"slug":"middlesex-massachusetts","cases":"2468","deaths":"39","county":"Middlesex","state":"Massachusetts"},
  {"slug":"norfolk-massachusetts","cases":"1199","deaths":"25","county":"Norfolk","state":"Massachusetts"},
  {"slug":"plymouth-massachusetts","cases":"898","deaths":"8","county":"Plymouth","state":"Massachusetts"},
  {"slug":"suffolk-massachusetts","cases":"2429","deaths":"27","county":"Suffolk","state":"Massachusetts"},
  {"slug":"unknown-massachusetts","cases":"274","deaths":"5","county":"Unknown","state":"Massachusetts"},
  {"slug":"worcester-massachusetts","cases":"915","deaths":"17","county":"Worcester","state":"Massachusetts"},
  {"slug":"genesee-michigan","cases":"464","deaths":"15","county":"Genesee","state":"Michigan"},
  {"slug":"macomb-michigan","cases":"1838","deaths":"78","county":"Macomb","state":"Michigan"},
  {"slug":"oakland-michigan","cases":"2785","deaths":"142","county":"Oakland","state":"Michigan"},
  {"slug":"unknown-michigan","cases":"333","deaths":"1","county":"Unknown","state":"Michigan"},
  {"slug":"washtenaw-michigan","cases":"501","deaths":"8","county":"Washtenaw","state":"Michigan"},
  {"slug":"wayne-michigan","cases":"6762","deaths":"252","county":"Wayne","state":"Michigan"},
  {"slug":"hennepin-minnesota","cases":"252","deaths":"9","county":"Hennepin","state":"Minnesota"},
  {"slug":"st.louis-missouri","cases":"864","deaths":"11","county":"St. Louis","state":"Missouri"},
  {"slug":"st.louiscity-missouri","cases":"287","deaths":"6","county":"St. Louis city","state":"Missouri"},
  {"slug":"clark-nevada","cases":"1418","deaths":"41","county":"Clark","state":"Nevada"},
  {"slug":"washoe-nevada","cases":"245","deaths":"4","county":"Washoe","state":"Nevada"},
  {"slug":"hillsborough-newhampshire","cases":"231","deaths":"7","county":"Hillsborough","state":"New Hampshire"},
  {"slug":"rockingham-newhampshire","cases":"213","deaths":"1","county":"Rockingham","state":"New Hampshire"},
  {"slug":"bergen-newjersey","cases":"5760","deaths":"179","county":"Bergen","state":"New Jersey"},
  {"slug":"burlington-newjersey","cases":"469","deaths":"10","county":"Burlington","state":"New Jersey"},
  {"slug":"camden-newjersey","cases":"481","deaths":"10","county":"Camden","state":"New Jersey"},
  {"slug":"essex-newjersey","cases":"3584","deaths":"156","county":"Essex","state":"New Jersey"},
  {"slug":"gloucester-newjersey","cases":"215","deaths":"3","county":"Gloucester","state":"New Jersey"},
  {"slug":"hudson-newjersey","cases":"3491","deaths":"78","county":"Hudson","state":"New Jersey"},
  {"slug":"mercer-newjersey","cases":"586","deaths":"13","county":"Mercer","state":"New Jersey"},
  {"slug":"middlesex-newjersey","cases":"2578","deaths":"76","county":"Middlesex","state":"New Jersey"},
  {"slug":"monmouth-newjersey","cases":"2065","deaths":"54","county":"Monmouth","state":"New Jersey"},
  {"slug":"morris-newjersey","cases":"1618","deaths":"51","county":"Morris","state":"New Jersey"},
  {"slug":"ocean-newjersey","cases":"2003","deaths":"56","county":"Ocean","state":"New Jersey"},
  {"slug":"passaic-newjersey","cases":"2856","deaths":"38","county":"Passaic","state":"New Jersey"},
  {"slug":"somerset-newjersey","cases":"765","deaths":"24","county":"Somerset","state":"New Jersey"},
  {"slug":"sussex-newjersey","cases":"236","deaths":"9","county":"Sussex","state":"New Jersey"},
  {"slug":"union-newjersey","cases":"2916","deaths":"66","county":"Union","state":"New Jersey"},
  {"slug":"unknown-newjersey","cases":"3935","deaths":"11","county":"Unknown","state":"New Jersey"},
  {"slug":"bernalillo-newmexico","cases":"225","deaths":"7","county":"Bernalillo","state":"New Mexico"},
  {"slug":"albany-newyork","cases":"293","deaths":"6","county":"Albany","state":"New York"},
  {"slug":"dutchess-newyork","cases":"938","deaths":"11","county":"Dutchess","state":"New York"},
  {"slug":"erie-newyork","cases":"945","deaths":"26","county":"Erie","state":"New York"},
  {"slug":"monroe-newyork","cases":"512","deaths":"17","county":"Monroe","state":"New York"},
  {"slug":"nassau-newyork","cases":"13346","deaths":"396","county":"Nassau","state":"New York"},
  {"slug":"newyorkcity-newyork","cases":"63307","deaths":"2254","county":"New York City","state":"New York"},
  {"slug":"onondaga-newyork","cases":"349","deaths":"4","county":"Onondaga","state":"New York"},
  {"slug":"orange-newyork","cases":"2741","deaths":"51","county":"Orange","state":"New York"},
  {"slug":"putnam-newyork","cases":"283","deaths":"9","county":"Putnam","state":"New York"},
  {"slug":"rockland-newyork","cases":"4872","deaths":"69","county":"Rockland","state":"New York"},
  {"slug":"suffolk-newyork","cases":"12328","deaths":"175","county":"Suffolk","state":"New York"},
  {"slug":"ulster-newyork","cases":"318","deaths":"4","county":"Ulster","state":"New York"},
  {"slug":"westchester-newyork","cases":"13080","deaths":"197","county":"Westchester","state":"New York"},
  {"slug":"mecklenburg-northcarolina","cases":"635","deaths":"4","county":"Mecklenburg","state":"North Carolina"},
  {"slug":"wake-northcarolina","cases":"283","deaths":"0","county":"Wake","state":"North Carolina"},
  {"slug":"cuyahoga-ohio","cases":"781","deaths":"13","county":"Cuyahoga","state":"Ohio"},
  {"slug":"franklin-ohio","cases":"557","deaths":"6","county":"Franklin","state":"Ohio"},
  {"slug":"hamilton-ohio","cases":"288","deaths":"2","county":"Hamilton","state":"Ohio"},
  {"slug":"lucas-ohio","cases":"272","deaths":"7","county":"Lucas","state":"Ohio"},
  {"slug":"mahoning-ohio","cases":"250","deaths":"13","county":"Mahoning","state":"Ohio"},
  {"slug":"oklahoma-oklahoma","cases":"256","deaths":"10","county":"Oklahoma","state":"Oklahoma"},
  {"slug":"tulsa-oklahoma","cases":"221","deaths":"8","county":"Tulsa","state":"Oklahoma"},
  {"slug":"multnomah-oregon","cases":"209","deaths":"6","county":"Multnomah","state":"Oregon"},
  {"slug":"washington-oregon","cases":"247","deaths":"4","county":"Washington","state":"Oregon"},
  {"slug":"allegheny-pennsylvania","cases":"552","deaths":"3","county":"Allegheny","state":"Pennsylvania"},
  {"slug":"berks-pennsylvania","cases":"235","deaths":"2","county":"Berks","state":"Pennsylvania"},
  {"slug":"bucks-pennsylvania","cases":"580","deaths":"14","county":"Bucks","state":"Pennsylvania"},
  {"slug":"chester-pennsylvania","cases":"250","deaths":"2","county":"Chester","state":"Pennsylvania"},
  {"slug":"delaware-pennsylvania","cases":"616","deaths":"13","county":"Delaware","state":"Pennsylvania"},
  {"slug":"lancaster-pennsylvania","cases":"291","deaths":"5","county":"Lancaster","state":"Pennsylvania"},
  {"slug":"lehigh-pennsylvania","cases":"804","deaths":"7","county":"Lehigh","state":"Pennsylvania"},
  {"slug":"luzerne-pennsylvania","cases":"648","deaths":"5","county":"Luzerne","state":"Pennsylvania"},
  {"slug":"monroe-pennsylvania","cases":"484","deaths":"11","county":"Monroe","state":"Pennsylvania"},
  {"slug":"montgomery-pennsylvania","cases":"982","deaths":"17","county":"Montgomery","state":"Pennsylvania"},
  {"slug":"northampton-pennsylvania","cases":"588","deaths":"11","county":"Northampton","state":"Pennsylvania"},
  {"slug":"philadelphia-pennsylvania","cases":"2610","deaths":"24","county":"Philadelphia","state":"Pennsylvania"},
  {"slug":"unknown-puertorico","cases":"452","deaths":"18","county":"Unknown","state":"Puerto Rico"},
  {"slug":"providence-rhodeisland","cases":"491","deaths":"7","county":"Providence","state":"Rhode Island"},
  {"slug":"charleston-southcarolina","cases":"274","deaths":"1","county":"Charleston","state":"South Carolina"},
  {"slug":"richland-southcarolina","cases":"242","deaths":"6","county":"Richland","state":"South Carolina"},
  {"slug":"davidson-tennessee","cases":"856","deaths":"6","county":"Davidson","state":"Tennessee"},
  {"slug":"shelby-tennessee","cases":"706","deaths":"10","county":"Shelby","state":"Tennessee"},
  {"slug":"sumner-tennessee","cases":"301","deaths":"10","county":"Sumner","state":"Tennessee"},
  {"slug":"williamson-tennessee","cases":"239","deaths":"2","county":"Williamson","state":"Tennessee"},
  {"slug":"bexar-texas","cases":"395","deaths":"11","county":"Bexar","state":"Texas"},
  {"slug":"collin-texas","cases":"268","deaths":"3","county":"Collin","state":"Texas"},
  {"slug":"dallas-texas","cases":"1015","deaths":"18","county":"Dallas","state":"Texas"},
  {"slug":"denton-texas","cases":"288","deaths":"6","county":"Denton","state":"Texas"},
  {"slug":"fortbend-texas","cases":"268","deaths":"5","county":"Fort Bend","state":"Texas"},
  {"slug":"galveston-texas","cases":"222","deaths":"1","county":"Galveston","state":"Texas"},
  {"slug":"harris-texas","cases":"1284","deaths":"17","county":"Harris","state":"Texas"},
  {"slug":"tarrant-texas","cases":"383","deaths":"9","county":"Tarrant","state":"Texas"},
  {"slug":"travis-texas","cases":"430","deaths":"6","county":"Travis","state":"Texas"},
  {"slug":"saltlake-utah","cases":"650","deaths":"1","county":"Salt Lake","state":"Utah"},
  {"slug":"summit-utah","cases":"230","deaths":"0","county":"Summit","state":"Utah"},
  {"slug":"chittenden-vermont","cases":"245","deaths":"6","county":"Chittenden","state":"Vermont"},
  {"slug":"fairfax-virginia","cases":"387","deaths":"5","county":"Fairfax","state":"Virginia"},
  {"slug":"king-washington","cases":"2900","deaths":"204","county":"King","state":"Washington"},
  {"slug":"pierce-washington","cases":"626","deaths":"8","county":"Pierce","state":"Washington"},
  {"slug":"snohomish-washington","cases":"1502","deaths":"44","county":"Snohomish","state":"Washington"},
  {"slug":"spokane-washington","cases":"209","deaths":"10","county":"Spokane","state":"Washington"},
  {"slug":"yakima-washington","cases":"289","deaths":"7","county":"Yakima","state":"Washington"},
  {"slug":"dane-wisconsin","cases":"253","deaths":"8","county":"Dane","state":"Wisconsin"},
  {"slug":"milwaukee-wisconsin","cases":"1069","deaths":"29","county":"Milwaukee","state":"Wisconsin"}
]   

export default counties;