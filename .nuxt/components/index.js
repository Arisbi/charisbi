import { wrapFunctional } from './utils'

export { default as BigCircle } from '../../components/BigCircle.vue'
export { default as ByCh } from '../../components/ByCh.vue'
export { default as Lines } from '../../components/Lines.vue'
export { default as LogoCh } from '../../components/LogoCh.vue'
export { default as LogoChBig } from '../../components/LogoChBig.vue'
export { default as SmallCircle } from '../../components/SmallCircle.vue'
export { default as Wave } from '../../components/Wave.vue'
export { default as Galleryimage } from '../../components/galleryimage.vue'
export { default as Menu } from '../../components/menu.vue'

export const LazyBigCircle = import('../../components/BigCircle.vue' /* webpackChunkName: "components/big-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyByCh = import('../../components/ByCh.vue' /* webpackChunkName: "components/by-ch" */).then(c => wrapFunctional(c.default || c))
export const LazyLines = import('../../components/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c))
export const LazyLogoCh = import('../../components/LogoCh.vue' /* webpackChunkName: "components/logo-ch" */).then(c => wrapFunctional(c.default || c))
export const LazyLogoChBig = import('../../components/LogoChBig.vue' /* webpackChunkName: "components/logo-ch-big" */).then(c => wrapFunctional(c.default || c))
export const LazySmallCircle = import('../../components/SmallCircle.vue' /* webpackChunkName: "components/small-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyWave = import('../../components/Wave.vue' /* webpackChunkName: "components/wave" */).then(c => wrapFunctional(c.default || c))
export const LazyGalleryimage = import('../../components/galleryimage.vue' /* webpackChunkName: "components/galleryimage" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../../components/menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
