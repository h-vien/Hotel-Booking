import Auth from "~/core/layout/auth";
import Blank from "../core/layout/blank";
import Default from "../core/layout/default";

export const LAYOUTS = Object.freeze({
  DEFAULT: "default",
  BLANK: "blank",
});

export const LAYOUT_COMPONENTS = {
  [LAYOUTS.DEFAULT]: (props) => <Default>{props.children}</Default>,
  [LAYOUTS.BLANK]: (props) => <Blank>{props.children}</Blank>,
};

export const DEFAULT_LAYOUT = LAYOUTS.DEFAULT;
