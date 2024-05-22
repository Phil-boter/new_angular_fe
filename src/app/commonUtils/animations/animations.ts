import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

const ANIMATION_SPEED = "1000ms";

export const slideInAnimation =
   trigger('routeAnimations', [
    transition('* => *', [
      query(":enter, :leave", style({ position: "fixed", width: "100%" })),
      group([
        query(":enter", [
          style({ transform: "translateX(150%)" }),
          animate(
            `${ANIMATION_SPEED} ease-in-out`,
            style({ transform: "translateX(0)" })
          )
        ]),
        query(":leave", [
          style({ transform: "translateX(0%)" }),
          animate(
            `${ANIMATION_SPEED} ease-in-out`,
            style({ transform: "translateX(-150%)" })
          )
        ])
      ])
    ]) 
  ]);