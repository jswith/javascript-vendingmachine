import { SNACK_BAR_SHOWING_TIME_IN_MS } from './constants';

export const pickRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const emit = (selector: string, eventName: string, detail: object, component: Element | Document = document) => {
  const event = new CustomEvent(eventName, { detail });
  const target = component.querySelector(selector);

  target.dispatchEvent(event);
};

export const on = (
  selector: string,
  eventName: string,
  handler: (e: any) => any,
  component: Element | Document = document,
) => {
  const targets = component.querySelectorAll(selector);

  targets.forEach((target) => target.addEventListener(eventName, handler));
};

export const addEvent = (component: Element, eventType: string, selector: string, callback: Function) => {
  const children = Array.from(component.querySelectorAll(selector));
  const isTarget = (target) => children.includes(target) || target.closest(selector);

  component.addEventListener(eventType, (event) => {
    if (!isTarget(event.target)) {
      return false;
    }
    return callback(event);
  });
};

export const $ = (selector: string, scope: Element | Document = document) => scope.querySelector(selector);

export const $$ = (selector: string, scope: Element | Document = document) =>
  Array.from(scope.querySelectorAll(selector));

export const markUnit = (price: number) => price.toLocaleString();

export const deleteSeparator = (price: string) => parseInt(price.replace(',', ''), 10);

export const showSnackBar = (message) => {
  const $snackBar = $('#snack-bar');
  $snackBar.classList.add('show');
  $snackBar.textContent = message;

  setTimeout(() => {
    $snackBar.classList.remove('show');
  }, SNACK_BAR_SHOWING_TIME_IN_MS);
};
