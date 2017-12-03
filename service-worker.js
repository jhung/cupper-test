/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","7659f23019b289d196abbf864278958f"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.xml","99bed016e5b6fd0e54cc024a49b0611a"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","4a9f58ade51a0d0093a6380aed62ca44"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/bathroom-accessible-symbol.png","86ccbcba763233f4c0781ba7b4057656"],["images/bathroom-inclusive-symbol-2.png","6b243474febb512282e617250b8d5b6d"],["images/bathroom-inclusive-symbol.png","196269a04ebbeda635a97b5c53d2d8bc"],["images/browser-chrome-android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-firefox-android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-ie.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-safari-ios.svg","f729e629ec998ec40d313495d7257741"],["images/browser-safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/favicon.png","f07d98ae7d41c37037be0917b470380f"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/logo.svg","41f1c1780c2c5efa41d64359dbd651bb"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/samsung_homescreen.png","5ef40e64a18f966ce5c9084a024256db"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["index.html","cc85c2390f8db08ff3887e80cd9de64e"],["index.xml","e2be6d75158d83e983372ede9035d348"],["infusion/Infusion-LICENSE.txt","32597861c9f36f3b17cebf7541d21228"],["infusion/README.md","047bee8d11142e9e2fe76a88b2afceab"],["infusion/ReleaseNotes.md","b87b160554d74d51facb61eb8b7c359f"],["infusion/infusion-all.js","48d5b7eb78e74061f121fcabe9f4d009"],["infusion/src/components/inlineEdit/css/InlineEdit.css","e2069fd8dc574934c38116ec70b8a179"],["infusion/src/components/inlineEdit/images/inline_edit_edit_button_16x16.png","6168b9571259676713fc5128bf17aac9"],["infusion/src/components/inlineEdit/inlineEditDependencies.json","e25d34a1f5e4515f673ec63a6ec65a3c"],["infusion/src/components/inlineEdit/js/InlineEdit.js","29a4d1bb122ed7ad3d7d52eef94ec97e"],["infusion/src/components/inlineEdit/js/InlineEditIntegrations.js","501c7ba6844555f93755597b6d5c21b0"],["infusion/src/components/overviewPanel/css/OverviewPanel.css","4be263775685c2947b2e135422c58eab"],["infusion/src/components/overviewPanel/fonts/OpenSans-Bold.ttf","50145685042b4df07a1fd19957275b81"],["infusion/src/components/overviewPanel/fonts/OpenSans-Regular.ttf","629a55a7e793da068dc580d184cc0e31"],["infusion/src/components/overviewPanel/fonts/RobotoSlab-Bold.ttf","d63ef23299458362f3edbf6cd8c2c510"],["infusion/src/components/overviewPanel/fonts/RobotoSlab-Regular.ttf","1ec06eed11bbcb1ee510b8f3522adea8"],["infusion/src/components/overviewPanel/fonts/fluid-star.eot","6ee723cc50c105765cddff8983b4b27d"],["infusion/src/components/overviewPanel/fonts/fluid-star.ttf","494fd93ac330f7b66ea4e2aebd4ddd03"],["infusion/src/components/overviewPanel/fonts/icons.eot","008bddcddf98bbe5d3385a6881bb3f08"],["infusion/src/components/overviewPanel/fonts/icons.ttf","40552b6e6fefa10126c111a8676d2129"],["infusion/src/components/overviewPanel/fonts/overviewPanel-icons.eot","877ca167155d769a9c79cc24834ae54e"],["infusion/src/components/overviewPanel/fonts/overviewPanel-icons.ttf","c8a9203c16b05b953ccfd5f6d4aa215f"],["infusion/src/components/overviewPanel/html/overviewPanelTemplate.html","93addeab59102a17b0438796b7fb6955"],["infusion/src/components/overviewPanel/js/OverviewPanel.js","caaac05adc2c3c3e7b38bcdeb86fc277"],["infusion/src/components/overviewPanel/overviewPanelDependencies.json","74af156a46dc5b048c8316e32854261a"],["infusion/src/components/pager/css/Pager.css","f8844453d55981893b8d875f9cb4b876"],["infusion/src/components/pager/images/arrow-dn.png","ee0dd66007d4f34b5e6660b4abbb5a65"],["infusion/src/components/pager/images/arrow-up.png","27498450164be1b258cae9dfdd534b69"],["infusion/src/components/pager/js/PagedTable.js","a96b89aa60fff962a236d4bda4f610ca"],["infusion/src/components/pager/js/Pager.js","b2ed9146d30a3395f24c41a06af92b5b"],["infusion/src/components/pager/js/Table.js","76ee99bff14514f010b9c80447ccb627"],["infusion/src/components/pager/pagerDependencies.json","4dfbe31eaabbc0f1422ac77f162de315"],["infusion/src/components/progress/js/Progress.js","e03450eb54e27b991dcccf4c59cbb8ab"],["infusion/src/components/progress/progressDependencies.json","2ce7584b387463929baf2fc757f620a5"],["infusion/src/components/reorderer/css/ImageReorderer.css","3cf784a2f8279131c80220039086a2a5"],["infusion/src/components/reorderer/css/Reorderer.css","d7a7dbc0782752cec89edfbbe623f2bc"],["infusion/src/components/reorderer/js/GeometricManager.js","0f02300ea3cf1c50759514656e1ea2ba"],["infusion/src/components/reorderer/js/ImageReorderer.js","dfebaab62baa236614b7860685f5a967"],["infusion/src/components/reorderer/js/LayoutReorderer.js","78e1368d8735f0b01cbad52a12b54f7e"],["infusion/src/components/reorderer/js/ModuleLayout.js","7f0937d9e121f1f87191ed4ebd10b881"],["infusion/src/components/reorderer/js/Reorderer.js","3ea34871a501a2d546b1f0a57e5cb8d5"],["infusion/src/components/reorderer/js/ReordererDOMUtilities.js","123a658a1d98bb0382a23350249b81c5"],["infusion/src/components/reorderer/reordererDependencies.json","e35b05ea029287d1b1f0b2e19f37a1ae"],["infusion/src/components/slidingPanel/js/SlidingPanel.js","5ce4977f3584e7cced8ac9480ecef298"],["infusion/src/components/slidingPanel/slidingPanelDependencies.json","0e3db81c0eb61343e3c1da3828d426b0"],["infusion/src/components/tableOfContents/css/TableOfContents.css","24b445233929192e800e89df9e7d508c"],["infusion/src/components/tableOfContents/html/TableOfContents.html","680e9c179ee671c19885542c4f3170b6"],["infusion/src/components/tableOfContents/js/TableOfContents.js","e230433a192fb45cc24ae29e6c432ad5"],["infusion/src/components/tableOfContents/tableOfContentsDependencies.json","6b759d6255ee96d8aa6be64ca99f36a9"],["infusion/src/components/tabs/js/Tabs.js","709ddfb81be36cf72569c7b42a6f8dd3"],["infusion/src/components/tabs/tabsDependencies.json","c83b54f187f26695c892293c801bfbe1"],["infusion/src/components/textToSpeech/js/MockTTS.js","a93b51ab4f4484ee8de63f8de8c55cc9"],["infusion/src/components/textToSpeech/js/TextToSpeech.js","8b7dbe0ee098eeba9dcc6604db2a88e1"],["infusion/src/components/textToSpeech/textToSpeechDependencies.json","af721bcd1725b92bdbe04da207f2b4fe"],["infusion/src/components/textfieldSlider/js/TextfieldSlider.js","36302166f8c77c9903fc4822ab86183d"],["infusion/src/components/textfieldSlider/textfieldSliderDependencies.json","9edbe15fac341dd76132ed8e92d3b0bf"],["infusion/src/components/tooltip/js/Tooltip.js","fd567f8e3e7c7810c39239ab50241b93"],["infusion/src/components/tooltip/tooltipDependencies.json","a66f3e40f22979fbe9ccda3f041dc65a"],["infusion/src/components/uiOptions/js/UIOptions.js","7673e5fecfce19b0f643adb353aff4ea"],["infusion/src/components/uiOptions/uiOptionsDependencies.json","3acfb165d91be8afeb78327d79e4f451"],["infusion/src/components/undo/js/Undo.js","e2fff4a0dd53885b0d816b24dadea29a"],["infusion/src/components/undo/undoDependencies.json","28f41c7ee8dd19640acadb084241915a"],["infusion/src/components/uploader/ReadMe.txt","87eadf17896c8d7aaf7f2d10bdea3512"],["infusion/src/components/uploader/css/Uploader.css","d01a93dcffe05c92df37a9602d4f6822"],["infusion/src/components/uploader/fonts/InfusionIcons-Uploader.eot","cb2234ffc77d46c524a49b11fb968a6d"],["infusion/src/components/uploader/fonts/InfusionIcons-Uploader.ttf","f80f986ee07367e6633373f03abf1b72"],["infusion/src/components/uploader/html/Uploader.html","c289b6b9e04a60cee35e7d2dca5fa3ad"],["infusion/src/components/uploader/images/add-grey.png","7fae9a5eb789a7c811b8854b63476930"],["infusion/src/components/uploader/images/add.png","20b287b5b61f6bb1571feabb7a0cbf17"],["infusion/src/components/uploader/images/browse.png","70cbc3987487c49005114ed325cd2f16"],["infusion/src/components/uploader/images/error.png","c847e1076da70df83ef5284622b82a74"],["infusion/src/components/uploader/images/gradient-file-green.png","04351df2fcf61e5156307ed7b456645f"],["infusion/src/components/uploader/images/gradient-file-grey.png","022f77a407cfc6a8f5166e02c5ac324d"],["infusion/src/components/uploader/images/gradient-total-green.png","41e291f047cb0e16b1dc9421f7f09c2b"],["infusion/src/components/uploader/images/gradient-total-grey.png","2080f733423548f0dac8b79dc3f8e50a"],["infusion/src/components/uploader/images/gradient-total-yellow.png","04710a616620bb047e9578a3d81cb30c"],["infusion/src/components/uploader/images/grey-4d4d4d-x-button.png","310934eba6ac93f4c8252ac88f15e3c9"],["infusion/src/components/uploader/images/grey-999999-x-button.png","7af5174c3f6a06d53352cf5d4b6379dc"],["infusion/src/components/uploader/images/remove.png","6ae27aaabb73ed335323421a490fa68b"],["infusion/src/components/uploader/images/tick.png","fd677420999f150253b8d8df399694de"],["infusion/src/components/uploader/js/DemoUploadManager.js","775e14b471bc1f71192947a8fdf9c5d6"],["infusion/src/components/uploader/js/ErrorPanel.js","42f00bf1d874ea84d93847f646a4cf83"],["infusion/src/components/uploader/js/FileQueue.js","39a3400871d46f4b2b9ad3f721234ab6"],["infusion/src/components/uploader/js/FileQueueView.js","8942293846c4ed0a1df224e9763f4734"],["infusion/src/components/uploader/js/HTML5UploaderSupport.js","314bde9d30f525c07a31d2ae9f302fa2"],["infusion/src/components/uploader/js/MimeTypeExtensions.js","29f2ae26a97faf429037f71652a117de"],["infusion/src/components/uploader/js/Uploader.js","71c556a546c332016353f40df4f799d3"],["infusion/src/components/uploader/js/UploaderCompatibility-Infusion1.2.js","135eda7fc364618d1100f0ab57e9b0bb"],["infusion/src/components/uploader/js/UploaderCompatibility-Infusion1.3.js","583e73cfa706b50fb0ea18d2fb5beeec"],["infusion/src/components/uploader/uploaderDependencies.json","d8ab96dce9ef7d789b030c95b2a3b647"],["infusion/src/framework/core/css/fluid.css","cd21cc83b0eb6b938ff1b83be29494a2"],["infusion/src/framework/core/css/fluidDebugging.css","06c9c2593a769e46d5b89cbcf01a7855"],["infusion/src/framework/core/frameworkDependencies.json","c87a7b9af8b2bf2c752e4a77de757345"],["infusion/src/framework/core/images/debug_tab.png","11691752f439938b013b58f54903b066"],["infusion/src/framework/core/images/magnifying_glass.png","c1dc2a19d34b1c1092a0a12b755199df"],["infusion/src/framework/core/js/DataBinding.js","ea862f8e6d9ce319c521075e953ed66a"],["infusion/src/framework/core/js/Fluid.js","d8d2d70a3f8b8a0073e25901703a765a"],["infusion/src/framework/core/js/FluidDOMUtilities.js","5b125749791225bbd7af020318a974f6"],["infusion/src/framework/core/js/FluidDebugging.js","18635e27bd89b85434b0fe1256a5471d"],["infusion/src/framework/core/js/FluidDocument.js","60a3a4bdac401dfff4a1e884e9c5aa4d"],["infusion/src/framework/core/js/FluidIoC.js","c8ce75ea9de03ee69ed2799297bcd6e3"],["infusion/src/framework/core/js/FluidPromises.js","f44cd5f901870e2167f864ebfeeb5d46"],["infusion/src/framework/core/js/FluidRequests.js","9f44da09c34cc9a645395d3832c91072"],["infusion/src/framework/core/js/FluidView.js","fbd81537aaa511ad161c400d086ccb58"],["infusion/src/framework/core/js/FluidViewDebugging.js","43d52bd479cd2cc6371760a0af765580"],["infusion/src/framework/core/js/JavaProperties.js","28167ae165c962620736a721f06ea850"],["infusion/src/framework/core/js/ModelTransformation.js","0db2882face561ec520d8f8a1285f978"],["infusion/src/framework/core/js/ModelTransformationTransforms.js","ee8942faa39116ea1acb2cd88cadf356"],["infusion/src/framework/core/js/ResourceLoader.js","2b2cd89f6c0504c6181d24d8619f2a2a"],["infusion/src/framework/core/js/jquery.keyboard-a11y.js","5611f3121074b045666ad83a9ad82407"],["infusion/src/framework/core/js/jquery.standalone.js","35b0fce80a13c77338c4a543d353bb60"],["infusion/src/framework/enhancement/css/ProgressiveEnhancement.css","7365c24b0f52738d2a9a4409aa5ade62"],["infusion/src/framework/enhancement/enhancementDependencies.json","48b75267de14f4c19671655c456e2fa3"],["infusion/src/framework/enhancement/js/ContextAwareness.js","4b0307b704253b8b49c1b0ad5d241441"],["infusion/src/framework/enhancement/js/ProgressiveEnhancement.js","4f3856ef1434a295ad88c108321f00bb"],["infusion/src/framework/preferences/css/Enactors.css","d7bc5e4ba04d5055f2176e32bceff765"],["infusion/src/framework/preferences/css/FullNoPreviewPrefsEditor.css","759fb146a20157887b641c95e430f8cb"],["infusion/src/framework/preferences/css/FullPrefsEditor.css","8c14a79df5a4af1fcf15382c1f09801e"],["infusion/src/framework/preferences/css/FullPreviewPrefsEditor.css","b95d7fe1cdd37990266050b130e3b4d8"],["infusion/src/framework/preferences/css/PrefsEditor.css","0d33c72b43dc4f915615ab628ec4515f"],["infusion/src/framework/preferences/css/SeparatedPanelPrefsEditor.css","117952f40e0c37db2f8043722896fc58"],["infusion/src/framework/preferences/css/SeparatedPanelPrefsEditorFrame.css","1976c114d83cb7cfc4950353be657df3"],["infusion/src/framework/preferences/css/stylus/Enactors.styl","e1a4d989aa3155f7f964f48798490a10"],["infusion/src/framework/preferences/css/stylus/FullNoPreviewPrefsEditor.styl","495f2317ace3f89a0e3b793da9439fd0"],["infusion/src/framework/preferences/css/stylus/FullPrefsEditor.styl","8f920a676bbcf3e3b28aec9c8f661369"],["infusion/src/framework/preferences/css/stylus/FullPreviewPrefsEditor.styl","45bbde448128fa7a4d60d967516a3948"],["infusion/src/framework/preferences/css/stylus/PrefsEditor.styl","4e350ab476d4cb8363778368c06a9536"],["infusion/src/framework/preferences/css/stylus/README.md","76e9f25c5cdddbb65687f747ee45ebe1"],["infusion/src/framework/preferences/css/stylus/SeparatedPanelPrefsEditor.styl","621746fb8c8f6436e86b4c7e531d9c6a"],["infusion/src/framework/preferences/css/stylus/SeparatedPanelPrefsEditorFrame.styl","0fac1de580481997b0ec6b9a74060d0e"],["infusion/src/framework/preferences/css/stylus/utils/Helpers.styl","5480704d12653b54be98297e564ffdd9"],["infusion/src/framework/preferences/css/stylus/utils/Themes.styl","5b71999d6d80db7504509303f51d0f80"],["infusion/src/framework/preferences/fonts/InfusionIcons-PrefsEditor.eot","fd00160baf7c4b5c2657167d4be68d29"],["infusion/src/framework/preferences/fonts/InfusionIcons-PrefsEditor.ttf","bbc993c5181e2f4fd0a5077759684423"],["infusion/src/framework/preferences/html/FullNoPreviewPrefsEditor.html","fced881a357e35b94e3450b0e9d763ec"],["infusion/src/framework/preferences/html/FullPreviewPrefsEditor.html","ae75b0813e8064773a50a132bbbde91a"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-contrast.html","8c3c2ddcb41436585cd0e1eca172eeab"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-emphasizeLinks.html","51b5ebcd9580ea989be61c5fdf4622f1"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-inputsLarger.html","b48e3ed5f969a44f61e7e4171ae9e168"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-layout.html","0cead9b852ddd372c3c44e9c897aba09"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-lineSpace-jQueryUI.html","5a773874b3b33a9c063adf2eb5c36dcd"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-lineSpace-nativeHTML.html","ad213c871afe0d7c485c4687dd9ef77b"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-linksControls.html","a9a194dc736c3445791a799dc6067c9b"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-speak.html","4aab800472dec74874cd0efbf6bdb2c7"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-textFont.html","d34d18fa3080a94318961057e189391c"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-textSize-jQueryUI.html","ec05931d19f8c1b90b78f8f9be53f81f"],["infusion/src/framework/preferences/html/PrefsEditorTemplate-textSize-nativeHTML.html","c0ab5d3ca5e07a9ce2db4e1dcf08edbc"],["infusion/src/framework/preferences/html/SeparatedPanelPrefsEditor.html","6337eea67e287a14169d940e077e7b41"],["infusion/src/framework/preferences/html/SeparatedPanelPrefsEditorFrame-jQueryUI.html","42d1e6fbff82a5b4fbe816ea6403fdd2"],["infusion/src/framework/preferences/html/SeparatedPanelPrefsEditorFrame-nativeHTML.html","87becc3a889592c2d0f965e90a39cf84"],["infusion/src/framework/preferences/images/default/separatedpanelbg.png","f061a8fba8d8f4cbd61170ce01ebd430"],["infusion/src/framework/preferences/js/AuxBuilder.js","5cf1ee989c1bdae8c2f0fa151cf2fb6b"],["infusion/src/framework/preferences/js/Builder.js","055aa29c2d4e49bce3f22df86d9c95fa"],["infusion/src/framework/preferences/js/Enactors.js","07aa7202fce1a1343e0e75d46eab536f"],["infusion/src/framework/preferences/js/FullNoPreviewPrefsEditor.js","7b1128c544147c535324409b8bb9bd32"],["infusion/src/framework/preferences/js/FullPreviewPrefsEditor.js","f93d4f333cb54c738f14eaf1a064fabf"],["infusion/src/framework/preferences/js/Panels.js","b0987e78c63fe89cf920c8eebebaafad"],["infusion/src/framework/preferences/js/PrefsEditor.js","d3232ae9fe7bd212354dc4d501b8c5b6"],["infusion/src/framework/preferences/js/PrimaryBuilder.js","fd68dcb43d9a0fe570bbdb29bd708264"],["infusion/src/framework/preferences/js/SelfVoicingEnactor.js","0ab07aaef584044ca4ccf2ab16ef6037"],["infusion/src/framework/preferences/js/SelfVoicingPanel.js","b724649380433e371ea377d69694dc10"],["infusion/src/framework/preferences/js/SelfVoicingSchemas.js","03dbe61a02653829d11d0873d0d68ea4"],["infusion/src/framework/preferences/js/SeparatedPanelPrefsEditor.js","64c2b73f0f084ea956c4466b2b1cc7f1"],["infusion/src/framework/preferences/js/StarterGrades.js","6cb9109c9ad812bf6c2ff9eb0626f1c7"],["infusion/src/framework/preferences/js/StarterSchemas.js","ef1ad1d92d57a985ba816ceae24a5bce"],["infusion/src/framework/preferences/js/Store.js","f33ad54c021e7cb989fdc3439d58802b"],["infusion/src/framework/preferences/js/UIEnhancer.js","cf8cb6299dfd3fd0918ebb808317ae9b"],["infusion/src/framework/preferences/js/URLUtilities.js","2f1f3ae389c71c5cb29ea210149a56d2"],["infusion/src/framework/preferences/messages/contrast.json","99024b6e6929db6fcdbe0bbb8150c388"],["infusion/src/framework/preferences/messages/emphasizeLinks.json","8ee2fd6fedd7dab4e72c088b19269bbd"],["infusion/src/framework/preferences/messages/inputsLarger.json","4c91c1b6132420623d1f06cf09df40a9"],["infusion/src/framework/preferences/messages/lineSpace.json","68710ad0b66ee845077e651378e59e7a"],["infusion/src/framework/preferences/messages/linksControls.json","1ddf0d660057fd46d7d7e054800cebd8"],["infusion/src/framework/preferences/messages/prefsEditor.json","cda1a24016c64b8cf24c889cd9e20a3f"],["infusion/src/framework/preferences/messages/speak.json","041d519d631a2fac5c46c193ed6ed2f0"],["infusion/src/framework/preferences/messages/tableOfContents.json","985d7b9a58c3f0422f55bcc67b6f6d3d"],["infusion/src/framework/preferences/messages/textFont.json","cca6c3d92ce3fe98b59daaf179652680"],["infusion/src/framework/preferences/messages/textSize.json","0938d0fdcd8d15082aede5b5a91d2da4"],["infusion/src/framework/preferences/preferencesDependencies.json","cc1a9d09f20d87095353d92988656e39"],["infusion/src/framework/renderer/js/RendererUtilities.js","4b3c88d81bcdc9b9a277940a90ca3d7e"],["infusion/src/framework/renderer/js/fluidParser.js","8a555d0610c4d5c395d7e2548ad55690"],["infusion/src/framework/renderer/js/fluidRenderer.js","6e9fd8a4c0e2ad9c63103f20847a92b2"],["infusion/src/framework/renderer/rendererDependencies.json","852955aa8a5c1d270690e0ad2400fe5c"],["infusion/src/lib/fastXmlPull/fastXmlPull-LICENSE.txt","7a50cd6f5e8f67c410eb857a83636db0"],["infusion/src/lib/fastXmlPull/fastXmlPullDependencies.json","7c3a7a7523cb36c69323e9926654726b"],["infusion/src/lib/fastXmlPull/js/fastXmlPull.js","6b2c3d18f5abc7bf23ee66149f8408a7"],["infusion/src/lib/fonts/OpenSans-LICENSE.txt","d273d63619c9aeaf15cdaf76422c4f87"],["infusion/src/lib/fonts/OpenSans-Light.ttf","1bf71be111189e76987a4bb9b3115cb7"],["infusion/src/lib/fonts/OpenSans-Regular.ttf","629a55a7e793da068dc580d184cc0e31"],["infusion/src/lib/fonts/OpenSans-Semibold.ttf","33f225b8f5f7d6b34a0926f58f96c1e9"],["infusion/src/lib/fonts/fontsDependencies.json","efbb12a1e5e0300e8edd46aeea494ec7"],["infusion/src/lib/jquery/core/jQueryDependencies.json","2078e15252e77eff0901304960a58035"],["infusion/src/lib/jquery/core/js/jquery.js","8777f761b8463a858236c246bedbce92"],["infusion/src/lib/jquery/jQuery-LICENSE.txt","dbcc2c190962327ad79a758ce6bea6f8"],["infusion/src/lib/jquery/plugins/scrollTo/jQueryScrollToPluginDependencies.json","df726b721e0c95efe3cb627b8d8672c7"],["infusion/src/lib/jquery/plugins/scrollTo/js/jquery.scrollTo.js","be8584ae8427ce42599f4f0361eb7bb1"],["infusion/src/lib/jquery/plugins/touchPunch/jQueryTouchPunchPluginDependencies.json","1d4131c0bc251e0406882de70c97cb31"],["infusion/src/lib/jquery/plugins/touchPunch/js/jquery.ui.touch-punch.js","864b0244c7c2a73acceb9c67ef02d582"],["infusion/src/lib/jquery/ui/css/default-theme/images/ui-icons_444444_256x240.png","f4ebe485bc50abaf580cf6ae9895dde5"],["infusion/src/lib/jquery/ui/css/default-theme/images/ui-icons_555555_256x240.png","d70c49a1750e399344e77737be6eac71"],["infusion/src/lib/jquery/ui/css/default-theme/images/ui-icons_777620_256x240.png","03c85664fb3ba7db61e1b0c6da73b1ae"],["infusion/src/lib/jquery/ui/css/default-theme/images/ui-icons_777777_256x240.png","6d28e77dd32aa1e61433d5ba3d93ca86"],["infusion/src/lib/jquery/ui/css/default-theme/images/ui-icons_cc0000_256x240.png","bd6996f9c0921f5e744aba81d3dadd84"],["infusion/src/lib/jquery/ui/css/default-theme/images/ui-icons_ffffff_256x240.png","e33c878c8e1b176d439484ca0a094ec4"],["infusion/src/lib/jquery/ui/css/default-theme/jquery-ui.css","7edc9a931b3a7f4b3a5df793c241bd78"],["infusion/src/lib/jquery/ui/css/fl-theme-bw/bw.css","0f652c8b9dda94a56cc10de6dd5fea0a"],["infusion/src/lib/jquery/ui/css/fl-theme-bw/images/ui-icons_000000_256x240.png","1a5f86c63f84893f5e3fc0c91ae36156"],["infusion/src/lib/jquery/ui/css/fl-theme-bw/images/ui-icons_ffffff_256x240.png","e33c878c8e1b176d439484ca0a094ec4"],["infusion/src/lib/jquery/ui/css/fl-theme-by/by.css","38791464f2d17d92af3005906ae280e3"],["infusion/src/lib/jquery/ui/css/fl-theme-by/images/ui-icons_000000_256x240.png","1a5f86c63f84893f5e3fc0c91ae36156"],["infusion/src/lib/jquery/ui/css/fl-theme-by/images/ui-icons_ffff00_256x240.png","ce8dc4e38cd1ba27459ae886ecffd288"],["infusion/src/lib/jquery/ui/css/fl-theme-dglg/dglg.css","84a6ff7e87d690bb92660b06979b6786"],["infusion/src/lib/jquery/ui/css/fl-theme-dglg/images/ui-icons_555_256x240.png","d70c49a1750e399344e77737be6eac71"],["infusion/src/lib/jquery/ui/css/fl-theme-dglg/images/ui-icons_bdbdbb_256x240.png","9dd1342aa6947d932cad47d878297544"],["infusion/src/lib/jquery/ui/css/fl-theme-lgdg/images/ui-icons_555_256x240.png","d70c49a1750e399344e77737be6eac71"],["infusion/src/lib/jquery/ui/css/fl-theme-lgdg/images/ui-icons_bdbdbb_256x240.png","9dd1342aa6947d932cad47d878297544"],["infusion/src/lib/jquery/ui/css/fl-theme-lgdg/lgdg.css","c49585f6af99fa2a7526eb6c26a969fb"],["infusion/src/lib/jquery/ui/css/fl-theme-wb/images/ui-icons_000000_256x240.png","1a5f86c63f84893f5e3fc0c91ae36156"],["infusion/src/lib/jquery/ui/css/fl-theme-wb/images/ui-icons_ffffff_256x240.png","e33c878c8e1b176d439484ca0a094ec4"],["infusion/src/lib/jquery/ui/css/fl-theme-wb/wb.css","d8492d92ac89882070a5eaafb8c783ab"],["infusion/src/lib/jquery/ui/css/fl-theme-yb/images/ui-icons_000000_256x240.png","1a5f86c63f84893f5e3fc0c91ae36156"],["infusion/src/lib/jquery/ui/css/fl-theme-yb/images/ui-icons_ffff00_256x240.png","ce8dc4e38cd1ba27459ae886ecffd288"],["infusion/src/lib/jquery/ui/css/fl-theme-yb/yb.css","bf0d21e5aaad71593fa5eb4bcc2ea03f"],["infusion/src/lib/jquery/ui/jQueryUIDependencies.json","8d99cbda6cb0ec21f9e5b84dc13e7213"],["infusion/src/lib/jquery/ui/js/jquery-ui.js","76df213c56a3260443ecc845469518da"],["infusion/src/lib/normalize/css/normalize.css","5743a1a1d31e36b25475d22bf64166e5"],["infusion/src/lib/normalize/normalizeDependencies.json","9aa2b442a9c162654f04e9d406c5b0b5"],["infusion/src/module/devIncludes.json","11df07280cc2cba70f8a104f6f413a08"],["infusion/src/module/fluid.js","44d108720a294b51f10e769ecbfb6bbf"],["infusion/src/module/includes.json","835408ecc0e1f77cc4ab91816f5a2639"],["infusion/src/module/module.js","b9731c9617e1e27442df87cc266e8cd1"],["infusion/tests/lib/jQuery-LICENSE.txt","62d7a0f2a12e487aa8f925bb3fa69fcc"],["infusion/tests/lib/jquery-ui/js/jquery.simulate.js","7a145cec6eee9da5d30592762ffdc2ec"],["infusion/tests/lib/mockjax/js/jquery.mockjax.js","08c4e791d14200edc39b1a2a63affefa"],["infusion/tests/lib/qunit/addons/composite/README.md","4c876a8d12f497b7d7dd91f22ee2a6e4"],["infusion/tests/lib/qunit/addons/composite/qunit-composite.css","143ca341f69f080acf7390314240558e"],["infusion/tests/lib/qunit/addons/composite/qunit-composite.js","1f9fa209a33732eb91a99efc40a8bcaf"],["infusion/tests/lib/qunit/css/qunit.css","c15fa7139c3c5957fc1dfa9d0bc6f73e"],["infusion/tests/lib/qunit/js/qunit.js","29da3c853a45a3422a4a5f856b198ff0"],["infusion/tests/test-core/jqUnit/html/test-template.html","bae8b7004375ec60debff0528b1effaf"],["infusion/tests/test-core/jqUnit/js/jqUnit-browser.js","2c8b8ade4eb0d4a97d69d9b4b76689ca"],["infusion/tests/test-core/jqUnit/js/jqUnit-failingTests.js","443e6f51139f97c19b2922969c6ba712"],["infusion/tests/test-core/jqUnit/js/jqUnit.js","52423a2d4e5b54881b70fff5fb36b6d1"],["infusion/tests/test-core/utils/js/ConditionalTestUtils.js","d0dbc18148746f1766ef7e2522cd7f97"],["infusion/tests/test-core/utils/js/DebugFocus.js","84cf36a2004398f49703bab1cc59ccfa"],["infusion/tests/test-core/utils/js/IoCTestUtils.js","8afb04357b057abe2d72b6451d707ec5"],["infusion/tests/testem.json","30d7f99f59db9cb673a1454b3987d8e8"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","381e6af4fc2816f9a137f1ef30c10ebd"],["patterns/architecture/index.html","20f88f0a842afc75b539b5436d2bb5c0"],["patterns/index.html","376c521fb22f029f4ba9796f79649072"],["patterns/index.xml","8861fd2783958eecaeb65894c48ca74f"],["patterns/introduction/index.html","ee8583e5725df067f96c3573d82c7e00"],["patterns/visitor-supports/index.html","903d30e9b55f8b77343f6c2b5676091d"],["print-version/index.html","31820bc7fe0545563f6b7e67922462a6"],["sitemap.xml","f8179edd21672fa559066091193d4c26"],["tags/index.xml","de87350d32ab669e5fc5943352801f2c"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







