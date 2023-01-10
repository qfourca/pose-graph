declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}
declare module "*.mp4" {
    const content: string;
    export = content
}
declare module "*.glb" {
    const content: string;
    export = content
}
declare module "*.gltf" {
    const content: string;
    export = content
}

declare module "file-loader?name=[name].js!*" {
    const value: string;
    export = value;
}