/** @flow */

import React from 'react'
import cx from 'classnames'

export type Props = {
  type: IconType,
  size?: IconSize,
  animation?: 'spin' | 'pulse',
  fixed?: boolean,
  rotate?: 90 | 180 | 270,
  flip?: 'horizontal' | 'vertical',
}

export function Icon(props: Props): React$Element<*> {
  const className = cx(
    'fa',
    `fa-${props.type}`,
    props.size && `fa-${props.size}`,
    props.animation && `fa-${props.animation}`,
    props.fixed && 'fa-fw',
    props.rotate && `fa-rotate-${props.rotate}`,
    props.flip && `fa-flip-${props.flip}`,
  )
  return <i className={className}/>
}

export type IconSize = 'lg'
                     | '2x' | '3x' | '4x' | '5x'

export type IconType
= '500px'
| 'address'
| 'adjust'
| 'adn'
| 'align'
| 'amazon'
| 'ambulance'
| 'american'
| 'anchor'
| 'android'
| 'angellist'
| 'angle'
| 'apple'
| 'archive'
| 'area'
| 'arrow'
| 'arrows'
| 'asl'
| 'assistive'
| 'asterisk'
| 'at'
| 'audio'
| 'automobile'
| 'backward'
| 'balance'
| 'ban'
| 'bandcamp'
| 'bank'
| 'bar'
| 'barcode'
| 'bars'
| 'bath'
| 'bathtub'
| 'battery'
| 'bed'
| 'beer'
| 'behance'
| 'bell'
| 'bicycle'
| 'binoculars'
| 'birthday'
| 'bitbucket'
| 'bitcoin'
| 'black'
| 'blind'
| 'bluetooth'
| 'bold'
| 'bolt'
| 'bomb'
| 'book'
| 'bookmark'
| 'braille'
| 'briefcase'
| 'btc'
| 'bug'
| 'building'
| 'bullhorn'
| 'bullseye'
| 'bus'
| 'buysellads'
| 'cab'
| 'calculator'
| 'calendar'
| 'camera'
| 'car'
| 'caret'
| 'cart'
| 'cc'
| 'certificate'
| 'chain'
| 'check'
| 'chevron'
| 'child'
| 'chrome'
| 'circle'
| 'clipboard'
| 'clock'
| 'clone'
| 'close'
| 'cloud'
| 'cny'
| 'code'
| 'codepen'
| 'codiepie'
| 'coffee'
| 'cog'
| 'cogs'
| 'columns'
| 'comment'
| 'commenting'
| 'comments'
| 'compass'
| 'compress'
| 'connectdevelop'
| 'contao'
| 'copy'
| 'copyright'
| 'creative'
| 'credit'
| 'crop'
| 'crosshairs'
| 'css3'
| 'cube'
| 'cubes'
| 'cut'
| 'cutlery'
| 'dashboard'
| 'dashcube'
| 'database'
| 'deaf'
| 'deafness'
| 'dedent'
| 'delicious'
| 'desktop'
| 'deviantart'
| 'diamond'
| 'digg'
| 'dollar'
| 'dot'
| 'download'
| 'dribbble'
| 'drivers'
| 'dropbox'
| 'drupal'
| 'edge'
| 'edit'
| 'eercast'
| 'eject'
| 'ellipsis'
| 'ellipsis-h'
| 'empire'
| 'envelope'
| 'envira'
| 'eraser'
| 'etsy'
| 'eur'
| 'euro'
| 'exchange'
| 'exclamation'
| 'exclamation-triangle'
| 'expand'
| 'expeditedssl'
| 'external'
| 'eye'
| 'eyedropper'
| 'fa'
| 'facebook'
| 'fast'
| 'fast-backward'
| 'fast-forward'
| 'fax'
| 'feed'
| 'female'
| 'fighter'
| 'file'
| 'files'
| 'film'
| 'filter'
| 'fire'
| 'firefox'
| 'first'
| 'flag'
| 'flash'
| 'flask'
| 'flickr'
| 'floppy'
| 'folder'
| 'font'
| 'fonticons'
| 'fort'
| 'forumbee'
| 'forward'
| 'foursquare'
| 'free'
| 'frown'
| 'futbol'
| 'gamepad'
| 'gavel'
| 'gbp'
| 'ge'
| 'gear'
| 'gears'
| 'genderless'
| 'get'
| 'gg'
| 'gift'
| 'git'
| 'github'
| 'gitlab'
| 'gittip'
| 'glass'
| 'glide'
| 'globe'
| 'google'
| 'graduation'
| 'gratipay'
| 'grav'
| 'group'
| 'h'
| 'hacker'
| 'hand'
| 'handshake'
| 'hard'
| 'hashtag'
| 'hdd'
| 'header'
| 'headphones'
| 'heart'
| 'heartbeat'
| 'history'
| 'home'
| 'hospital'
| 'hotel'
| 'hourglass'
| 'houzz'
| 'html5'
| 'i'
| 'id'
| 'ils'
| 'image'
| 'imdb'
| 'inbox'
| 'indent'
| 'industry'
| 'info'
| 'inr'
| 'instagram'
| 'institution'
| 'internet'
| 'intersex'
| 'ioxhost'
| 'italic'
| 'joomla'
| 'jpy'
| 'jsfiddle'
| 'key'
| 'keyboard'
| 'krw'
| 'language'
| 'laptop'
| 'lastfm'
| 'leaf'
| 'leanpub'
| 'legal'
| 'lemon'
| 'level'
| 'level-up'
| 'life'
| 'lightbulb'
| 'line'
| 'link'
| 'linkedin'
| 'linode'
| 'linux'
| 'list'
| 'location'
| 'lock'
| 'long'
| 'low'
| 'magic'
| 'magnet'
| 'mail'
| 'male'
| 'map'
| 'mars'
| 'maxcdn'
| 'meanpath'
| 'medium'
| 'medkit'
| 'meetup'
| 'meh'
| 'mercury'
| 'microchip'
| 'microphone'
| 'minus'
| 'mixcloud'
| 'mobile'
| 'modx'
| 'money'
| 'moon'
| 'mortar'
| 'motorcycle'
| 'mouse'
| 'music'
| 'navicon'
| 'neuter'
| 'newspaper'
| 'object'
| 'odnoklassniki'
| 'opencart'
| 'openid'
| 'opera'
| 'optin'
| 'outdent'
| 'pagelines'
| 'paint'
| 'paper'
| 'paperclip'
| 'paragraph'
| 'paste'
| 'pause'
| 'paw'
| 'paypal'
| 'pencil'
| 'percent'
| 'phone'
| 'photo'
| 'picture'
| 'pie'
| 'pied'
| 'pinterest'
| 'plane'
| 'play'
| 'plug'
| 'plus'
| 'podcast'
| 'power'
| 'print'
| 'product'
| 'puzzle'
| 'qq'
| 'qrcode'
| 'question'
| 'quora'
| 'quote'
| 'ra'
| 'random'
| 'ravelry'
| 'rebel'
| 'recycle'
| 'reddit'
| 'refresh'
| 'registered'
| 'remove'
| 'renren'
| 'reorder'
| 'repeat'
| 'reply'
| 'resistance'
| 'retweet'
| 'rmb'
| 'road'
| 'rocket'
| 'rotate'
| 'rouble'
| 'rss'
| 'rub'
| 'ruble'
| 'rupee'
| 's15'
| 'safari'
| 'save'
| 'scissors'
| 'scribd'
| 'search'
| 'sellsy'
| 'send'
| 'server'
| 'share'
| 'shekel'
| 'sheqel'
| 'shield'
| 'ship'
| 'shirtsinbulk'
| 'shopping'
| 'shower'
| 'sign'
| 'signal'
| 'signing'
| 'simplybuilt'
| 'sitemap'
| 'skyatlas'
| 'skype'
| 'slack'
| 'sliders'
| 'slideshare'
| 'smile'
| 'snapchat'
| 'snowflake'
| 'soccer'
| 'sort'
| 'soundcloud'
| 'space'
| 'spinner'
| 'spoon'
| 'spotify'
| 'square'
| 'stack'
| 'star'
| 'steam'
| 'step'
| 'step-backward'
| 'step-forward'
| 'stethoscope'
| 'sticky'
| 'stop'
| 'street'
| 'strikethrough'
| 'stumbleupon'
| 'subscript'
| 'subway'
| 'suitcase'
| 'sun'
| 'superpowers'
| 'superscript'
| 'support'
| 'table'
| 'tablet'
| 'tachometer'
| 'tag'
| 'tags'
| 'tasks'
| 'taxi'
| 'telegram'
| 'television'
| 'tencent'
| 'terminal'
| 'text'
| 'th'
| 'themeisle'
| 'thermometer'
| 'thumb'
| 'thumbs'
| 'ticket'
| 'times'
| 'tint'
| 'toggle'
| 'trademark'
| 'train'
| 'transgender'
| 'trash'
| 'tree'
| 'trello'
| 'tripadvisor'
| 'trophy'
| 'truck'
| 'try'
| 'tty'
| 'tumblr'
| 'turkish'
| 'tv'
| 'twitch'
| 'twitter'
| 'umbrella'
| 'underline'
| 'undo'
| 'universal'
| 'university'
| 'unlink'
| 'unlock'
| 'unsorted'
| 'upload'
| 'usb'
| 'usd'
| 'user'
| 'users'
| 'vcard'
| 'venus'
| 'viacoin'
| 'viadeo'
| 'video'
| 'vimeo'
| 'vine'
| 'vk'
| 'volume'
| 'warning'
| 'wechat'
| 'weibo'
| 'weixin'
| 'whatsapp'
| 'wheelchair'
| 'wifi'
| 'wikipedia'
| 'window'
| 'windows'
| 'won'
| 'wordpress'
| 'wpbeginner'
| 'wpexplorer'
| 'wpforms'
| 'wrench'
| 'xing'
| 'y'
| 'yahoo'
| 'yc'
| 'yelp'
| 'yen'
| 'yoast'
| 'youtube'
