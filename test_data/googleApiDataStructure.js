data = {
results: [
{
elevation: 66.05104064941406,
location: {
lat: 37.33240904999999,
lng: -122.0305121099999
},
resolution: 610.8129272460938
},
{
elevation: 198.69189453125,
location: {
lat: 37.79877679244791,
lng: -122.1132460392569
},
resolution: 610.8129272460938
},
{
elevation: 408.7547912597656,
location: {
lat: 38.26508594393884,
lng: -122.1970312410962
},
resolution: 1221.625854492188
},
{
elevation: 342.7359313964844,
location: {
lat: 38.73133475002899,
lng: -122.2818990566697
},
resolution: 1221.625854492188
},
{
elevation: 243.433837890625,
location: {
lat: 39.19752139467543,
lng: -122.367881919795
},
resolution: 1221.625854492188
},
{
elevation: 308.91552734375,
location: {
lat: 39.66364399736291,
lng: -122.4550134075218
},
resolution: 610.8129272460938
},
{
elevation: 272.1792907714844,
location: {
lat: 40.12970061007236,
lng: -122.5433282934575
},
resolution: 610.8129272460938
},
{
elevation: 1229.338989257812,
location: {
lat: 40.59568921408091,
lng: -122.6328626040272
},
resolution: 610.8129272460938
},
{
elevation: 1109.617797851562,
location: {
lat: 41.06160771658197,
lng: -122.7236536778618
},
resolution: 610.8129272460938
},
{
elevation: 962.9658203125,
location: {
lat: 41.52745394711395,
lng: -122.8157402285173
},
resolution: 610.8129272460938
},
{
elevation: 1723.326904296875,
location: {
lat: 41.99322565378441,
lng: -122.9091624107442
},
resolution: 610.8129272460938
},
{
elevation: 367.029541015625,
location: {
lat: 42.45892049927601,
lng: -123.0039618905474
},
resolution: 610.8129272460938
},
{
elevation: 397.1650390625,
location: {
lat: 42.92453605661939,
lng: -123.1001819192873
},
resolution: 610.8129272460938
},
{
elevation: 457.7146606445312,
location: {
lat: 43.39006980471694,
lng: -123.1978674120994
},
resolution: 610.8129272460938
},
{
elevation: 364.5382690429688,
location: {
lat: 43.8555191236001,
lng: -123.2970650309258
},
resolution: 610.8129272460938
},
{
elevation: 120.4281692504883,
location: {
lat: 44.32088128940169,
lng: -123.3978232724798
},
resolution: 610.8129272460938
},
{
elevation: 459.2116394042969,
location: {
lat: 44.78615346902284,
lng: -123.5001925614852
},
resolution: 610.8129272460938
},
{
elevation: 326.3323974609375,
location: {
lat: 45.25133271447304,
lng: -123.604225349563
},
resolution: 1221.625854492188
},
{
elevation: 298.99365234375,
location: {
lat: 45.71641595685944,
lng: -123.7099762201668
},
resolution: 1221.625854492188
},
{
elevation: 137.1586761474609,
location: {
lat: 46.1814,
lng: -123.817502
},
resolution: 1221.625854492188
}
],
status: "OK"
};

var elevData = [];

dataSet = data.results;

for (var i=0; i<dataSet.length; i++){
	
	elevData.push(
		{
			lat: dataSet[i].location.lat,
			lng: dataSet[i].location.lng,
			elev: dataSet[i].elevation
		}
	);
}




