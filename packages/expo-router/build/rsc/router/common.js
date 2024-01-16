"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHOULD_SKIP_ID = exports.PARAM_KEY_SKIP = exports.parseInputString = exports.getInputString = exports.getComponentIds = void 0;
function getComponentIds(path) {
    const pathItems = path.split('/').filter(Boolean);
    const idSet = new Set();
    for (let index = 0; index <= pathItems.length; ++index) {
        const id = [...pathItems.slice(0, index), 'layout'].join('/');
        idSet.add(id);
    }
    idSet.add([...pathItems, 'page'].join('/'));
    return Array.from(idSet);
}
exports.getComponentIds = getComponentIds;
function getInputString(path) {
    if (!path.startsWith('/')) {
        throw new Error('Path should start with `/`');
    }
    return path.slice(1);
}
exports.getInputString = getInputString;
function parseInputString(input) {
    return '/' + input;
}
exports.parseInputString = parseInputString;
exports.PARAM_KEY_SKIP = 'waku_router_skip';
// It starts with "/" to avoid conflicing with normal component ids.
exports.SHOULD_SKIP_ID = '/SHOULD_SKIP';
//# sourceMappingURL=common.js.map