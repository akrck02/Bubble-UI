import "./core/boxes.ts";
import "./core/colors.ts";
import "./core/text.ts";
import "./core/variables.ts";

/**
 * Converts variable name to css 
 * variable name
 * @param name The variable name
 * @returns The css variable name
 */
export function variable( name : string ) : string {
    return `var(--"${name}")`;
}

/**
 * Return a class name in css syntax 
 * @param name The class name
 * @returns The css class name
 */
export function classname ( name : string ) : string {
    return `.${name}`;
}

/**
 * Return a id in css syntax
 * @param name The id name
 * @returns The css id name
 */
export function id( name : string ) : string {
    return `#${name}`;
}
