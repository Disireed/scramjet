import { viteStaticCopy } from "vite-plugin-static-copy";

export default {

	server: {
    		allowedHosts: [".trycloudflare.com"],
  		proxy: {
  		    "/wisp": {
   	 	    	target: "ws://localhost:4142",
   		      	ws: true,
				rewrite: () => "/",
  		      },
 		   },
		},

	plugins: [
		viteStaticCopy({
			structured: false,
			targets: [
				{
					src: "../core/dist/*",
					dest: "scramjet",
				},
				{
					src: "../controller/dist/*",
					dest: "controller",
				},
			],
			watch: {
				reloadPageOnChange: true,
			},
		}),
	],
};
