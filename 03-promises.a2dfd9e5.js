!function(){function e(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=n.currentTarget.elements,o=t.delay,a=t.step,r=t.amount;if(o.value<0||a.value<0||r.value<0)window.alert("Please enter a number greater than zero");else for(var i=0;i<r.value;i++){var u=i+1,c=Number(o.value)+a.value*i;e(u,c).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}n.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.a2dfd9e5.js.map
