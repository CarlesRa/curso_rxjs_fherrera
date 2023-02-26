import { fromEvent, map, tap } from "rxjs";

const text = document.createElement('div');
text.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc commodo, pharetra libero quis, congue arcu. Duis non felis gravida, imperdiet odio et, accumsan nisl. Cras fringilla at est sed dictum. Vestibulum vehicula lorem tellus, vel hendrerit ex feugiat in. Vivamus facilisis fringilla nisi, ut convallis tellus vestibulum a. Fusce non mauris sit amet orci cursus fringilla ut vitae eros. Ut vel facilisis risus. Suspendisse non mi odio.
    <br><br>
    Nam vitae scelerisque ipsum. Fusce nec varius libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a aliquet risus, non cursus nulla. Mauris eu felis vel massa tincidunt gravida pellentesque vitae purus. Aliquam erat volutpat. Proin consequat lobortis massa, eget rutrum felis mollis vitae.
    <br><br>
    Cras fringilla augue leo, consequat laoreet lacus congue eu. Curabitur pulvinar turpis vel mi tristique elementum. Fusce dui ligula, imperdiet sit amet faucibus id, eleifend quis leo. Donec blandit consequat pellentesque. Curabitur congue, dolor in imperdiet sagittis, nulla nibh accumsan diam, at venenatis augue ligula ac nisl. Ut id metus id est tincidunt bibendum at et massa. Sed non volutpat arcu. Sed malesuada, justo ut egestas maximus, velit sapien consectetur nulla, sed commodo nibh lacus id nunc. Pellentesque mollis tellus non dui maximus, bibendum aliquam nibh egestas. Nulla facilisi. Ut eu quam ipsum. Mauris vel commodo urna, sit amet hendrerit felis. Curabitur id augue faucibus, accumsan sapien sagittis, facilisis magna. Duis scelerisque mi lorem, et maximus nulla mollis in.
    <br><br>
    Quisque scelerisque eros eu tortor interdum, lacinia commodo felis ultrices. Praesent sed suscipit sem, ac vehicula nulla. Praesent bibendum libero eget diam sodales, a sodales velit congue. Nunc in urna erat. Aliquam quam risus, gravida id molestie ac, eleifend vitae augue. Nam ut convallis dui. Cras dignissim imperdiet accumsan. Duis viverra enim non ex interdum, vel porta lorem vehicula. Aenean ullamcorper ipsum sit amet nisl mollis, eget fermentum ante ornare. Nulla lectus diam, accumsan a ullamcorper eu, viverra eget erat. Ut egestas metus neque. Nunc eu congue mauris. Suspendisse potenti.
    <br><br>
    Sed quis fermentum odio, sed pulvinar nunc. Proin euismod mi quis est maximus euismod. Duis ligula nulla, ullamcorper facilisis dolor eu, lacinia aliquam elit. Aenean eu ipsum massa. Nunc blandit, nibh vel dictum dictum, ligula enim ullamcorper odio, sed pellentesque leo lacus eget urna. Suspendisse et urna libero. Duis eros enim, maximus vitae iaculis vitae, pulvinar ac est. Aliquam erat volutpat. Integer urna tortor, porttitor sit amet rutrum in, dictum in dolor. Curabitur scelerisque nulla vel odio tincidunt posuere in ut neque. Suspendisse nisl libero, finibus eget felis quis, congue elementum risus. Nullam vitae cursus ex. Sed fermentum elit diam, eu sodales felis vehicula sed. Donec congue mi vitae enim sollicitudin consectetur. Integer mollis metus elit, et vulputate elit volutpat congue. Fusce vehicula sapien eget diam consequat tempus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc commodo, pharetra libero quis, congue arcu. Duis non felis gravida, imperdiet odio et, accumsan nisl. Cras fringilla at est sed dictum. Vestibulum vehicula lorem tellus, vel hendrerit ex feugiat in. Vivamus facilisis fringilla nisi, ut convallis tellus vestibulum a. Fusce non mauris sit amet orci cursus fringilla ut vitae eros. Ut vel facilisis risus. Suspendisse non mi odio.
    <br><br>
    Nam vitae scelerisque ipsum. Fusce nec varius libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a aliquet risus, non cursus nulla. Mauris eu felis vel massa tincidunt gravida pellentesque vitae purus. Aliquam erat volutpat. Proin consequat lobortis massa, eget rutrum felis mollis vitae.
    <br><br>
    Cras fringilla augue leo, consequat laoreet lacus congue eu. Curabitur pulvinar turpis vel mi tristique elementum. Fusce dui ligula, imperdiet sit amet faucibus id, eleifend quis leo. Donec blandit consequat pellentesque. Curabitur congue, dolor in imperdiet sagittis, nulla nibh accumsan diam, at venenatis augue ligula ac nisl. Ut id metus id est tincidunt bibendum at et massa. Sed non volutpat arcu. Sed malesuada, justo ut egestas maximus, velit sapien consectetur nulla, sed commodo nibh lacus id nunc. Pellentesque mollis tellus non dui maximus, bibendum aliquam nibh egestas. Nulla facilisi. Ut eu quam ipsum. Mauris vel commodo urna, sit amet hendrerit felis. Curabitur id augue faucibus, accumsan sapien sagittis, facilisis magna. Duis scelerisque mi lorem, et maximus nulla mollis in.
    <br><br>
    Quisque scelerisque eros eu tortor interdum, lacinia commodo felis ultrices. Praesent sed suscipit sem, ac vehicula nulla. Praesent bibendum libero eget diam sodales, a sodales velit congue. Nunc in urna erat. Aliquam quam risus, gravida id molestie ac, eleifend vitae augue. Nam ut convallis dui. Cras dignissim imperdiet accumsan. Duis viverra enim non ex interdum, vel porta lorem vehicula. Aenean ullamcorper ipsum sit amet nisl mollis, eget fermentum ante ornare. Nulla lectus diam, accumsan a ullamcorper eu, viverra eget erat. Ut egestas metus neque. Nunc eu congue mauris. Suspendisse potenti.
    <br><br>
    Sed quis fermentum odio, sed pulvinar nunc. Proin euismod mi quis est maximus euismod. Duis ligula nulla, ullamcorper facilisis dolor eu, lacinia aliquam elit. Aenean eu ipsum massa. Nunc blandit, nibh vel dictum dictum, ligula enim ullamcorper odio, sed pellentesque leo lacus eget urna. Suspendisse et urna libero. Duis eros enim, maximus vitae iaculis vitae, pulvinar ac est. Aliquam erat volutpat. Integer urna tortor, porttitor sit amet rutrum in, dictum in dolor. Curabitur scelerisque nulla vel odio tincidunt posuere in ut neque. Suspendisse nisl libero, finibus eget felis quis, congue elementum risus. Nullam vitae cursus ex. Sed fermentum elit diam, eu sodales felis vehicula sed. Donec congue mi vitae enim sollicitudin consectetur. Integer mollis metus elit, et vulputate elit volutpat congue. Fusce vehicula sapien eget diam consequat tempus.

`;
const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el cálculo
const calculatePercentageScroll = (event) => {
    const {
        scrollTop, scrollHeight, clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight) * 100);
}

// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
    map(calculatePercentageScroll),
    tap(console.log)
);

progress$.subscribe(percent => {
    progressBar.style.width = `${percent}%`
});