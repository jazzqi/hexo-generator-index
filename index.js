/* global hexo */

'use strict';

var assign = require('object-assign');

hexo.config.index_generator = assign({}, hexo.config.index_generator);

hexo.extend.generator.register('index', require('./lib/generator'));
hexo.extend.generator.register('ares', require('./lib/generator'));
hexo.extend.generator.register('investor', require('./lib/generator'));
hexo.extend.generator.register('company', require('./lib/generator'));
hexo.extend.generator.register('about', require('./lib/generator'));
hexo.extend.generator.register('recruitment', require('./lib/generator'));
