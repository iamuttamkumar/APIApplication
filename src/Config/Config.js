let env = 'Local';
//let env = "Dev"

let Baseurl = '../dummyData';
let Url = 'http://dev2-publi-3o0d27omfsvr-1156685715.ap-south-1.elb.amazonaws.com';

if (env === 'Local') {
	Baseurl = 'data/data.json';
}

if (env === 'Dev') {
	//
}
//let productType="CLAIMS"
//let productType = "MICAygfyg";
export const config = {
	Baseurl: Baseurl,
	Url: Url,
	//productType: productType,
};

export default config;
