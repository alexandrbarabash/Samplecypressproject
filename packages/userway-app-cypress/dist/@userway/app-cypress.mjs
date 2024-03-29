var za = Object.defineProperty;
var _a = (e, t, n) => t in e ? za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Wn = (e, t, n) => (_a(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ha = Object.defineProperty, Oa = (e, t, n) => t in e ? Ha(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Y = (e, t, n) => (Oa(e, typeof t != "symbol" ? t + "" : t, n), n), ja = Object.defineProperty, Ua = (e, t) => {
  for (var n in t)
    ja(e, n, { get: t[n], enumerable: !0 });
}, mr = {};
Ua(mr, {
  accesskeys: () => Ii,
  areaAlt: () => Za,
  ariaAllowedAttr: () => Uo,
  ariaAllowedRole: () => Vo,
  ariaCommandName: () => $o,
  ariaDialogName: () => Yo,
  ariaHiddenBody: () => Mi,
  ariaHiddenFocus: () => Li,
  ariaInputFieldName: () => Bi,
  ariaMeterName: () => zi,
  ariaProgressbarName: () => _i,
  ariaRequiredAttr: () => Hi,
  ariaRequiredChildren: () => Oi,
  ariaRequiredParent: () => ji,
  ariaRoledescription: () => Ui,
  ariaRoles: () => Vi,
  ariaText: () => $i,
  ariaToggleFieldName: () => Yi,
  ariaTooltipName: () => Qi,
  ariaTreeitemName: () => Zi,
  ariaValidAttr: () => Ki,
  ariaValidAttrValue: () => ai,
  audioCaption: () => Xi,
  autocompleteValid: () => Ji,
  avoidInlineLineHeight: () => Jo,
  avoidInlineSpacing: () => eo,
  blink: () => qi,
  bold: () => Oo,
  buttonName: () => yi,
  bypass: () => to,
  bypassHeading: () => Zo,
  bypassLandmark: () => Ko,
  bypassMoveFocus: () => Xo,
  colorContrast: () => xi,
  colorContrastEnhanced: () => no,
  cssOrientationLock: () => ro,
  customFocusableElements: () => ii,
  definitionList: () => ao,
  dlitem: () => io,
  documentTitle: () => ci,
  duplicateId: () => Ri,
  duplicateIdActive: () => oo,
  duplicateIdAria: () => lo,
  emptyHeading: () => wi,
  emptyTableHeader: () => ei,
  fieldsetLegend: () => ti,
  focusOrderSemantics: () => so,
  formFieldMultipleLabels: () => uo,
  frameFocusableContent: () => co,
  frameTitle: () => si,
  frameTitleUnique: () => ui,
  headingOrder: () => bi,
  hiddenContent: () => mo,
  htmlLang: () => vi,
  htmlLangValid: () => Ci,
  htmlXmlLangMismatch: () => Ti,
  identicalLinksSamePurpose: () => gi,
  imageAlt: () => Va,
  imageAltLong: () => Qa,
  imageAltSuspicious: () => Xa,
  imageLinkWithoutText: () => hi,
  imageRedundantAlt: () => $a,
  imageSameAlt: () => Ya,
  inputButtonName: () => Di,
  inputImageAlt: () => Ka,
  invalidId: () => ki,
  italic: () => Qo,
  label: () => po,
  labelContentNameMismatch: () => Pi,
  labelTitleOnly: () => Ai,
  landmarkBannerIsTopLevel: () => ho,
  landmarkComplementaryIsTopLevel: () => go,
  landmarkContentinfoIsTopLevel: () => fo,
  landmarkMainIsTopLevel: () => wo,
  landmarkNoDuplicateBanner: () => bo,
  landmarkNoDuplicateContentinfo: () => Ao,
  landmarkNoDuplicateMain: () => Do,
  landmarkOneMain: () => yo,
  landmarkUnique: () => vo,
  linkAmbiguousText: () => Wi,
  linkInTextBlock: () => Co,
  linkName: () => mi,
  linkNoMentionTargetBlank: () => Fi,
  linkReferToImage: () => pi,
  list: () => ni,
  listitem: () => ri,
  marquee: () => li,
  metaRefresh: () => oi,
  metaRefreshNoExceptions: () => To,
  metaViewport: () => Si,
  metaViewportLarge: () => Eo,
  nestedInteractive: () => Ho,
  noAutoplayAudio: () => Gi,
  noAutoplayAudioNoExceptions: () => jo,
  objectAlt: () => Ro,
  pAsHeading: () => Io,
  pageHasHeadingOne: () => fi,
  presentationRoleConflict: () => xo,
  region: () => Fo,
  roleImgAlt: () => ko,
  scopeAttrValid: () => Wo,
  scrollableRegionFocusable: () => No,
  selectName: () => Mo,
  serverSideImageMap: () => Lo,
  skipLink: () => Ni,
  svgImgAlt: () => Go,
  tabindex: () => di,
  tableDuplicateName: () => Ja,
  tableFakeCaption: () => qo,
  targetSize: () => So,
  tdHasHeader: () => Po,
  tdHeadersAttr: () => Bo,
  thHasDataCells: () => zo,
  validLang: () => Ei,
  videoCaption: () => _o
});
function d(e, t) {
  return {
    id: e,
    ...t,
    fixable: t.fixable || !1,
    severity: t.severity || 1
  };
}
var Va = d(1, {
  description: "All images must have alternate text to convey their purpose to the user.",
  display: "Image alternate text",
  errorMessage: {
    emptyAlt: 'Image has an empty "alt" attribute',
    missingAlt: 'Image missing an alternate text, such as "alt" attribute'
  },
  fixable: !0,
  level: "A",
  key: "image-alt",
  recommendation: {
    emptyAlt: 'Add an "alt" attribute with concise description. For example: <img src="rocket.jpg" alt="A rocket lifts off from the launchpad" />. If the image is purely decorative or a text description would be redundant, add an empty "alt" attribute as well as an aria-hidden attribute with a value of "true". For example: <img src="decorative-graphic.jpg" alt="" aria-hidden="true" />.',
    missingAlt: 'Add an "alt" attribute with concise description. For example: <img src="rocket.jpg" alt="A rocket lifts off from the launchpad" />. If the image is purely decorative or a text description would be redundant, add an empty "alt" attribute as well as an aria-hidden attribute with a value of "true". For example: <img src="decorative-graphic.jpg" alt="" aria-hidden="true" />.'
  },
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1, Technique F65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"
    },
    {
      label: "WCAG 2.1, Technique F67",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H67"
    },
    {
      label: "WCAG 2.1, Technique H37",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H37"
    },
    {
      label: "WCAG 2.1, Technique ARIA10",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10"
    },
    {
      label: "ACT: Image has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/"
    }
  ],
  severity: 5
}), $a = d(2, {
  description: "Text of buttons and links should not be repeated in the image alternative text",
  display: "Redundant image alternate text",
  errorMessage: "Text of parent element is repeated in image alternative text",
  level: "Best Practice",
  key: "image-redundant-alt",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1: Technique F65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"
    },
    {
      label: "WCAG 2.1: Technique H36",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H36.html"
    }
  ],
  recommendation: `Left an "alt" attribute of image empty or modify it so it does not repeat the parent element's text`,
  severity: 1
}), Ya = d(3, {
  description: 'Each <img> element with unique value of "src" attribute must have unique value of "alt" attribute',
  display: "Same image alternate text",
  errorMessage: 'Two or more images with unique value of "src" attribute have the same "alt" attribute',
  level: "A",
  key: "image-same-alt",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1, Technique H37",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H37"
    }
  ],
  recommendation: `Write each image's "alt" attribute to uniquely describe that image's meaning or purpose`,
  severity: 1
}), Qa = d(4, {
  description: '"alt" attribute value of <img> element must not contain more than 256 characters',
  display: "Length of image alternate text",
  errorMessage: 'The "alt" attribute exceeds the recommended length',
  level: "A",
  key: "image-alt-long",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1, Technique H37",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H37"
    }
  ],
  recommendation: 'Shorten the length of the "alt" attribute to be 5–10 words. If a longer description is necessary, wrap the <img> element within a <figure> element. Add a <figcaption> element that links to a lengthier description on a separate page. Avoid using the "longdesc" attribute because it is not well-supported.',
  severity: 2
}), Za = d(5, {
  description: "All <area> elements must have alternate text to convey their purpose to the user",
  display: "Alternate text for <area> element",
  errorMessage: {
    emptyAlt: '<area> element has an empty "alt" attribute',
    missingAlt: '<area> element missing an alternate text, such as "alt" attribute'
  },
  level: "A",
  key: "area-alt",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1, Technique F65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"
    },
    {
      label: "WCAG 2.1, Technique H24",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H24"
    },
    {
      label: "ACT: Link has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/c487ae/"
    }
  ],
  recommendation: {
    emptyAlt: 'Add an "alt" attribute with concise description. For example: <area shape="rect" coords="0,0,48,48" href="userway.htm" alt="Userway logo" />',
    missingAlt: 'Add an "alt" attribute with concise description. For example: <area shape="rect" coords="0,0,48,48" href="userway.htm" alt="Userway logo" />'
  },
  severity: 5
}), Ka = d(6, {
  description: "All image buttons must have alternate text to convey their purpose to the user.",
  display: "Image button alternate text",
  errorMessage: {
    emptyAlt: 'Image button has an empty "alt" attribute',
    missingAlt: 'Image button missing an alternate text, such as "alt" attribute'
  },
  level: "A",
  key: "input-image-alt",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1, Technique F65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"
    },
    {
      label: "WCAG 2.1, Technique F67",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H67"
    },
    {
      label: "WCAG 2.1, Technique H36",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H36"
    },
    {
      label: "WCAG 2.1, Technique ARIA10",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10"
    },
    {
      label: "ACT: Image button has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/59796f/"
    }
  ],
  recommendation: {
    emptyAlt: 'Add a concise description to "alt" attribute. For example: <input type="image" src="rocket.jpg" alt="A rocket lifts off from the launchpad" />',
    missingAlt: 'Add an "alt" or "aria-label" attribute with concise description. For example: <input type="image" src="rocket.jpg" alt="A rocket lifts off from the launchpad" />'
  },
  severity: 10
}), Xa = d(7, {
  description: 'The "alt" attribute of <img> element must not contain extraneous text',
  display: "Extraneous image alternate text",
  errorMessage: 'The "alt" attribute contains extraneous text',
  level: "A",
  key: "image-alt-suspicious",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1, Technique H37",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H37"
    }
  ],
  recommendation: 'Delete from the "alt" attribute extraneous text such as "image of", "photo of", "graphic of" , "illustration of", "icon of", etc. For example, replace: alt="A photo of an astronaut performing a space walk" with alt="An astronaut performing a space walk"',
  severity: 1
}), Ja = d(10, {
  description: 'Text of "summary" attribute and <caption> element of all <table> elements must not be the same',
  display: "Duplicate table name",
  errorMessage: '"Summary" attribute and <caption> element of table have the same text',
  level: "Best Practice",
  key: "table-duplicate-name",
  references: [
    {
      label: "WCAG 2.1, Technique H39",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H39"
    },
    {
      label: "WCAG 2.1, Technique H43",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H43"
    },
    {
      label: "WCAG 2.1, Technique H51",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H51"
    },
    {
      label: "WCAG 2.1, Technique H63",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H63"
    },
    {
      label: "WCAG 2.1, Technique H73",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H73"
    }
  ],
  recommendation: 'Ensure that "summary" attribute and <caption> element of the <table> element have a different text',
  severity: 3
}), ei = d(11, {
  description: 'All <th> elements or elements with role="rowheader" and role="columnheader" must have discernible text',
  display: "Empty table header",
  errorMessage: "Table header text is empty",
  level: "Best Practice",
  key: "empty-table-header",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    }
  ],
  recommendation: 'For all <th> elements or elements with role="rowheader" and role="columnheader" add discernible text. If the element is not header, marking it up with a <td>',
  severity: 1
}), ti = d(12, {
  description: "<fieldset> element must contain a <legend> element as first child",
  display: "Fieldset lacks a legend",
  errorMessage: "<fieldset> element lacks a <legend> element as first child",
  level: "A",
  key: "fieldset-legend",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    }
  ],
  recommendation: "Add a descriptive <legend> element as the first child within the <fieldset> element to describe the grouping. For example: <fieldset><legend>Pizza toppings</legend>...</fieldset>",
  severity: 10
}), ni = d(13, {
  description: "All <ul> and <ol> elements must only directly contain <li>, <script> or <template> elements",
  display: "List",
  errorMessage: "List is structured incorrectly",
  level: "A",
  key: "list",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "WCAG 2.1, Technique H48",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H48"
    },
    {
      label: "MDN: The Unordered List element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
    },
    {
      label: "MDN: The Ordered List element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
    }
  ],
  recommendation: "Remove all elements from the list except <li>, <script> or <template>",
  severity: 8
}), ri = d(14, {
  description: 'All <li> elements must be contained in a <ul>, <ol> element or element with role="list"',
  display: "List item",
  errorMessage: '<li> element is not contained in a <ul>, <ol> element or element with role="list"',
  level: "A",
  key: "listitem",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WCAG 2.1, Technique H48",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H48"
    },
    {
      label: "MDN: The List Item element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"
    }
  ],
  recommendation: 'Enclose the <li> element in a <ul>, <ol> element or in a parent element with role="list"',
  severity: 8
}), ai = d(15, {
  description: "All ARIA attributes starting with aria- must have valid values",
  display: "ARIA valid attribute value",
  errorMessage: "Element has non-existent or misspelled ARIA attribute value",
  level: "A",
  key: "aria-valid-attr-value",
  references: [
    {
      label: "4.1.2 Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1 Technique ARIA5",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5"
    },
    {
      label: "WAI-ARIA 1.2, Definitions of States and Properties",
      url: "https://www.w3.org/TR/wai-aria-1.1/#states_and_properties"
    },
    {
      label: "WAI-ARIA 1.2, Characteristics of States and Properties, Value",
      url: "https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value"
    },
    {
      label: "ACT: ARIA state or property has valid value",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/proposed/"
    }
  ],
  recommendation: "Checks all elements that contain WAI-ARIA attributes to ensure that the attributes have valid values",
  severity: 10
}), ii = d(17, {
  description: 'All non-interactive elements with mouse or keyboard handlers have a tabindex="0" attribute',
  display: "Custom focusable elements",
  errorMessage: 'Non-interactive element with mouse or keyboard handlers missing tabindex="0" attribute',
  level: "A",
  key: "custom-focusable-elements",
  references: [
    {
      label: "2.1.1 Keyboard",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard"
    }
  ],
  recommendation: 'Add a tabindex="0" attribute to the element with the mouse or keyboard handler',
  severity: 10
}), oi = d(21, {
  description: 'A <meta> element with an http-equiv="refresh" attribute must not have refresh time of less than 20 hours',
  display: "Meta refresh",
  errorMessage: 'Page contains a <meta> element with http-equiv="refresh" attribute with refresh time of more than 0 and less than 20 hours',
  level: "A",
  key: "meta-refresh",
  references: [
    {
      label: "2.2.1 Timing Adjustable",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"
    },
    {
      label: "2.2.4 Interruptions",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html"
    },
    {
      label: "3.2.5: Change on Request",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html"
    },
    {
      label: "WCAG 2.1 Technique G110",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G110"
    },
    {
      label: "WCAG 2.0 Technique H76",
      url: "https://www.w3.org/TR/WCAG-TECHS/H76.html"
    },
    {
      label: "WCAG 2.0 Technique F40",
      url: "https://www.w3.org/TR/WCAG-TECHS/F40.html"
    },
    {
      label: "WCAG 2.0 Technique F41",
      url: "https://www.w3.org/TR/WCAG-TECHS/F41.html"
    },
    {
      label: "ACT: Meta element has no refresh delay",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/bc659a/"
    }
  ],
  recommendation: 'Remove all <meta> elements with http-equiv="refresh" attribute or set the refresh time to 0 or more than 72000 seconds (20 hours). As an alternative, you can implement the page refresh using a script and provide a mechanism for users to stop or extend the timing of it',
  severity: 10
}), li = d(22, {
  description: "<marquee> elements are deprecated and must not be used",
  display: "Marquee",
  errorMessage: "A <marquee> element is present",
  level: "A",
  key: "marquee",
  references: [
    {
      label: "2.2.2 Pause, Stop, Hide",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide"
    },
    {
      label: "WCAG 2.1, Technique F16",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F16.html"
    },
    {
      label: "MDN: The Marquee element (deprecated)",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee"
    }
  ],
  recommendation: "Remove all <marquee> elements",
  severity: 10
}), si = d(23, {
  description: "All <iframe> and <frame> elements mush have an accessible name that is not empty",
  display: "Accessible names for <iframe> and <frame> elements",
  errorMessage: "<iframe> or <frame> element has no accessible name",
  level: "A",
  key: "frame-title",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique H64",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H64.html"
    },
    {
      label: "ACT: Iframe element has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/cae760/proposed/"
    }
  ],
  recommendation: 'For each <iframe> or <frame> element add a non-empty "title" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 7
}), ui = d(24, {
  description: "All <iframe> or <frame> elements within the same document tree must have unique accessible names",
  display: "Unique titles for <iframe> and <frame> elements",
  errorMessage: "Few <iframe> or <frame> elements within the same document tree have the same accessible name (given by the title and aria-label attributes) but don’t embed equivalent resources",
  level: "A",
  key: "frame-title-unique",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique H64",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H64.html"
    },
    {
      label: "ACT: Iframe elements with identical accessible names have equivalent purpose",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/4b1c6c/proposed/"
    }
  ],
  recommendation: "Make each <iframe> or <frame> element's title unique and non-empty. If the elements embed the same resource, you can use the same title for all of them.",
  severity: 7
}), ci = d(25, {
  description: "HTML page must have a non-empty <title> element",
  display: "Document title",
  errorMessage: "HTML page has no <title> element or it is empty",
  level: "A",
  key: "document-title",
  references: [
    {
      label: "2.4.2 Page Titled",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/page-titled"
    },
    {
      label: "WCAG 2.1, Technique H25",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H25.html"
    },
    {
      label: "WCAG 2.1 Technique G88",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G88.html"
    },
    {
      label: "ACT: HTML page has non-empty title",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/2779a5/"
    }
  ],
  recommendation: "Add a non-empty <title> element to the HTML page",
  severity: 7
}), di = d(26, {
  description: 'Elements should not have a "tabindex" attribute with value greater than "0"',
  display: "Tabindex greater than 0",
  errorMessage: 'Element has a "tabindex" attribute with value greater than "0"',
  level: "Best Practice",
  key: "tabindex",
  references: [
    {
      label: "2.4.3 Focus Order",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/focus-order"
    },
    {
      label: "WCAG 2.1, Technique F44",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html"
    }
  ],
  recommendation: 'Remove the "tabindex" attribute or set its value to "0". Alternatively, set the value to "-1" and add a Javascript code that changes the tab focus order',
  severity: 10
}), mi = d(27, {
  description: 'All <a> elements or elements with role="link" must have non-empty accessible name',
  display: "Link accessible name",
  errorMessage: "Link has no accessible name",
  level: "A",
  key: "link-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique ARIA7",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7"
    },
    {
      label: "WCAG 2.1, Technique ARIA8",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8"
    },
    {
      label: "WCAG 2.1, Technique G91",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html"
    },
    {
      label: "WCAG 2.1, Technique H30",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html"
    },
    {
      label: "ACT: Link has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/c487ae/"
    }
  ],
  recommendation: 'For each <a> element and element with role="link" add an inner text, non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 7
}), pi = d(28, {
  description: '<a> element or element with role="link" should not refer to an image file',
  display: "Link refers to image",
  errorMessage: '<a> element or element with role="link" points to an image file',
  level: "A",
  key: "link-refer-to-image",
  references: [
    {
      label: "2.4.4 Link Purpose (In Context)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context"
    }
  ],
  recommendation: 'Insert the image within the page using an <img> tag instead of linking to the image itself. Add a descriptive "alt" attribute to the <img> element. For example: <img src="astronaut.jpg" alt="An astronaut performs a space walk"',
  severity: 5
}), hi = d(29, {
  description: 'All <img> elements that are wrapped in <a> must have "alt" text',
  display: "Image link without text",
  errorMessage: 'Image link lacks populated "alt" attribute',
  level: "A",
  key: "image-link-without-text",
  references: [
    {
      label: "2.4.4 Link Purpose (In Context)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context"
    },
    {
      label: "2.4.9 Link Purpose (Link Only)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only"
    },
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    }
  ],
  recommendation: `Provide an "alt" attribute that describes the link's target or function. For example: <a href="www.nasa.gov"><img src="astronaut.jpg" alt="the NASA website"></a>`,
  severity: 8
}), gi = d(30, {
  description: '<a> elements or elements with role="link" that have the same accessible name must serve the same purpose',
  display: "Identical links with same purpose",
  errorMessage: 'Two or more <a> elements or elements with role="link" that have the same accessible name do not serve the same purpose',
  level: "AAA",
  key: "identical-links-same-purpose",
  references: [
    {
      label: "2.4.9 Link Purpose (Link Only)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only"
    },
    {
      label: "WCAG 2.1, Technique F84",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F84.html"
    },
    {
      label: "ACT: Links with identical accessible names have equivalent purpose",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/b20e66/proposed/"
    }
  ],
  recommendation: 'For each <a> element or element with role="link" that has the same accessible name, verify that they serve the same purpose',
  severity: 1
}), fi = d(31, {
  description: "Page or or at least one of its frames should contain a level-one heading",
  display: "Page has level-one heading",
  errorMessage: 'Page does not contain a <h1> element or element with role="heading" and aria-level="1"',
  level: "Best Practice",
  key: "page-has-heading-one",
  references: [
    {
      label: "2.4.6 Headings and Labels",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
    },
    {
      label: "WAI, Headings - Page Structure Tutorial",
      url: "https://www.w3.org/WAI/tutorials/page-structure/headings/"
    }
  ],
  recommendation: 'Ensure that page starts with a <h1> element or element with role="heading" and aria-level="1". Also, ensure that the page has only one such element',
  severity: 5
}), wi = d(32, {
  description: 'All heading elements or elements with role="heading" must have non-empty accessible name',
  display: "Empty heading",
  errorMessage: "Heading element has an empty accessible name",
  level: "Best Practice",
  key: "empty-heading",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WCAG 2.1, Technique H42",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H42.html"
    },
    {
      label: "ACT: Heading has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/ffd0e9/proposed/"
    }
  ],
  recommendation: 'For each heading element and element with role="heading" add an inner text, non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 5
}), bi = d(33, {
  description: "Heading levels should only increase by one",
  display: "Heading order",
  errorMessage: '<h1>-<h6> elements or elements with role="heading" is not ordered hierarchically',
  level: "Best Practice",
  key: "heading-order",
  references: [
    {
      label: "WCAG 2.0, Technique H42",
      url: "https://www.w3.org/TR/WCAG20-TECHS/H42"
    },
    {
      label: "WCAG 2.0, Technique G141",
      url: "https://www.w3.org/TR/WCAG20-TECHS/G141"
    }
  ],
  recommendation: "Check that all headings are marked with <h1> through <h6> elements and that these are ordered hierarchically",
  severity: 5
}), Ai = d(34, {
  description: "All <input> elements should have a visible label",
  display: "Visible label for <input> element",
  errorMessage: "<input> element has no visible label",
  level: "Best Practice",
  key: "label-title-only",
  references: [
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "WCAG 2.1, Technique ARIA16",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"
    }
  ],
  recommendation: 'Ensure that every <input> element that requires a label is has a label other than the "title" or "aria-describedby" attributes. Provide a visible label using explicit or implicit <label> element, "aria-label" attribute or "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 10
}), Di = d(35, {
  description: "All input buttons must have an accessible name that is not empty",
  display: "Input button name",
  errorMessage: "An input button has no accessible name",
  level: "A",
  key: "input-button-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "WCAG 2.1, Technique ARIA16",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"
    },
    {
      label: "ACT: Button has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/"
    }
  ],
  recommendation: 'For each input button add a non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 10
}), yi = d(36, {
  description: "All buttons must have an accessible name that is not empty",
  display: "Button name",
  errorMessage: "A button has no accessible name",
  level: "A",
  key: "button-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "WCAG 2.1, Technique ARIA16",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"
    },
    {
      label: "ACT: Button has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/"
    }
  ],
  recommendation: 'For each button element and element with role="button" add an inner text, non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. As an alternative, you can add role="presentation" or role="none" attribute to the button element to remove it from the accessibility tree',
  severity: 10
}), vi = d(37, {
  description: "HTML document element must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default",
  display: "HTML lang attribute",
  errorMessage: "An HTML lang attribute is not present or is empty",
  level: "A",
  key: "html-has-lang",
  references: [
    {
      label: "3.1.1 Language of Page",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"
    },
    {
      label: "WCAG 2.1, Technique H57",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"
    },
    {
      label: "ACT: HTML page has lang attribute",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/b5c3f8/"
    },
    {
      label: "MDN: The lang global attribute",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang"
    }
  ],
  recommendation: "Set the lang attribute of <html> based on the page language",
  severity: 5
}), Ci = d(38, {
  description: '<html> element must have a valid value for the "lang" or "xml:lang" attribute',
  display: 'Valid HTML "lang" attribute',
  errorMessage: '<html> element has an invalid value for the "lang" or "xml:lang" attribute',
  level: "A",
  key: "html-lang-valid",
  references: [
    {
      label: "3.1.1 Language of Page",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"
    },
    {
      label: "WCAG 2.1, Technique H57",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"
    },
    {
      label: "ACT: HTML page lang attribute has valid language tag",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/bf051a/"
    }
  ],
  recommendation: 'Set the valid "lang" or "xml:lang" attribute of <html> element based on the page language',
  severity: 1
}), Ti = d(39, {
  description: '"lang" and "xml:lang" attributes of <html> element must have the same base language',
  display: "Lang and xml:lang mismatch",
  errorMessage: '"lang" and "xml:lang" attributes of <html> element have different base languages',
  level: "A",
  key: "html-xml-lang-mismatch",
  references: [
    {
      label: "3.1.1 Language of Page",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"
    },
    {
      label: "WCAG 2.1, Technique H57",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"
    },
    {
      label: "ACT: HTML page lang and xml:lang attributes have matching values",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/5b7ae0/"
    }
  ],
  recommendation: 'Ensure that the "lang" and "xml:lang" attributes of <html> element have the same base language',
  severity: 4
}), Ei = d(40, {
  description: 'All elements that have a "lang" attribute must have a valid value',
  display: 'Valid "lang" attribute',
  errorMessage: 'Element has an invalid value for the "lang" attribute',
  level: "A",
  key: "valid-lang",
  references: [
    {
      label: "3.1.2 Language of Parts",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html"
    },
    {
      label: "WCAG 2.1, Technique H58",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H58.html"
    },
    {
      label: "ACT: HTML page lang attribute has valid language tag",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/de46e4/"
    }
  ],
  recommendation: `Set the valid "lang" attribute of the element based on the element's content language`,
  severity: 5
}), Ri = d(41, {
  description: 'All "id" attributes must be unique',
  display: "Dubplicate id",
  errorMessage: 'An "id" attribute is not unique',
  level: "A",
  key: "duplicate-id",
  references: [
    {
      label: "4.1.1 Parsing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/parsing"
    },
    {
      label: "WCAG 2.1 Technique F77",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F77"
    },
    {
      label: "ACT: Id attribute value is unique",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/3ea0c8/proposed/"
    }
  ],
  recommendation: "For each element provide a unique id value",
  severity: 1
}), Ii = d(42, {
  description: 'All "accesskey" attributes must have a unique value',
  display: "Unique accesskey value",
  errorMessage: '"accesskey" attribute value is not unique',
  level: "Best Practice",
  key: "accesskeys",
  references: [
    {
      label: "WCAG 2.0 Technique F17",
      url: "https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F17.html"
    }
  ],
  recommendation: 'Ensure that all "accesskey" attributes have a unique value',
  severity: 10
}), xi = d(43, {
  description: "All text elements must have sufficient color contrast between the text in the foreground and the background color behind it",
  display: "Color contrast",
  errorMessage: "Text element has insufficient color contrast",
  level: "AA",
  key: "color-contrast",
  references: [
    {
      label: "1.4.3 Contrast (Minimum)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
    },
    {
      label: "WCAG 2.1 Technique G18",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G18"
    },
    {
      label: "WCAG 2.1 Technique G145",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G145"
    },
    {
      label: "ACT: Text has minimum contrast",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/afw4f7/proposed/"
    }
  ],
  recommendation: "For each text element, ensure that the contrast of at least 4.5:1 for small text (18pt or 24 CSS pixels) and 3:1 for large text (14pt or 19 CSS pixels)",
  severity: 7
}), Fi = d(44, {
  description: 'All <a> elements or elements with role="link" that have a target="_blank" attribute must warn users about opening a new window or tab',
  display: "Link",
  errorMessage: '<a> element or element with role="link" that has a target="_blank" attribute does not warn users about opening a new window or tab',
  level: "AAA",
  key: "link-no-mention-target-blank",
  references: [
    {
      label: "3.2.5 Change on Request",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html"
    }
  ],
  recommendation: `Add "(opens in a new tab)" within the link text. For example: Visit the <a href="https://nasa.gov" target="_blank">Visit NASA's website (opens in a new tab)</a> for more information. For images or texts that cannot be modified, add an aria-label with the same info. For example: <a href="https://nasa.gov" aria-label="Visit NASA's website (opens in a new tab)" target="_blank"><img src="nasa.jpg" alt="NASA logo" /></a>`,
  severity: 1
}), ki = d(45, {
  description: 'All "id" attributes must have a valid value',
  display: 'Empty "id" attribute',
  errorMessage: '"id" attribute value is invalid',
  level: "A",
  key: "invalid-id",
  references: [
    {
      label: "4.1.1 Parsing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/parsing"
    },
    {
      label: "WCAG 2.1 Technique H93",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H93"
    }
  ],
  recommendation: 'Either populate the "id" attribute with a unique value or remove the "id" attribute entirely',
  severity: 5
}), Wi = d(47, {
  description: 'All <a> elements or elements with role="link" must have meaningful, desribing what the link points to',
  display: "Ambiguous link text",
  errorMessage: '<a> element or element with role="link" has ambiguous text',
  level: "Best Practice",
  key: "link-ambiguous-text",
  references: [
    {
      label: "4.1.1 Parsing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/parsing"
    }
  ],
  recommendation: `Rewrite the link text to be meaningful, describing what the link points to. Alternately, place the <a> element around already existing text that is meaningful. For example, replace: For details on NASA's Mars program, <a href="www.nasa.gov">click here</a> with: Visit the <a href="www.nasa.gov">NASA website Mars program page</a> for details`,
  severity: 1
}), Ni = d(50, {
  description: "",
  display: "",
  errorMessage: "",
  level: "Best Practice",
  key: "skip-link",
  references: [],
  recommendation: "",
  severity: 8
}), Mi = d(58, {
  description: 'aria-hidden="true" attribute must not be present on the document <body> element',
  display: "Aria-hidden body",
  errorMessage: 'An aria-hidden="true" attribute is present on the document <body> element',
  level: "A",
  key: "aria-hidden-body",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    }
  ],
  recommendation: 'Remove the aria-hidden="true" attribute from the document <body> element',
  severity: 1
}), Li = d(59, {
  description: 'All elements with aria-hidden="true" must not be focusable nor contain focusable elements',
  display: "ARIA hidden focus",
  errorMessage: 'Element with aria-hidden="true" or its descendants cannot be focusable',
  level: "A",
  key: "aria-hidden-focus",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "ACT: Element with aria-hidden has no content in sequential focus navigation",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/"
    }
  ],
  recommendation: `Make all elements with aria-hidden="true" and their descendants non-focusable (by applying the "disabled" attribute if element is allowed to use this attribute) or non-tabbable (by applying the "tabindex" attribute with a value of "-1"). Where appropriate, hide the element and it's children from assistive technologies using CSS (e.g. display: none or visibility: hidden properties)`,
  severity: 4
}), Gi = d(70, {
  description: "<video> or <audio> element should not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
  display: "No autoplay audio more than 3 seconds without controls",
  errorMessage: "<video> or <audio> element autoplays for longer than 3 seconds, and does not have an instrument to pause, stop, or mute the audio",
  level: "A",
  key: "no-autoplay-audio",
  references: [
    {
      label: "1.4.2 Audio Control (Level A)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html"
    },
    {
      label: "WCAG 2.1, Technique G60",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G60"
    },
    {
      label: "WCAG 2.1, Technique G170",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G170"
    },
    {
      label: "WCAG 2.1, Technique G171",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G171"
    },
    {
      label: "ACT: Audio or video element avoids automatically playing audio",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/80f0bf/proposed/"
    },
    {
      label: "ACT: Audio or video element that plays automatically has a control mechanism",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/4c31df/proposed/"
    }
  ],
  recommendation: 'For each <video> or <audio> element add an mechanism to pause, stop, or mute the audio such as "controls" attribute or a custom controls. As an alternative, make auto playing the audio shorter than 3 seconds',
  severity: 10
}), qi = d(74, {
  description: "<blink> elements are deprecated and must not be used",
  display: "Blink",
  errorMessage: "A <blink> element is present",
  level: "A",
  key: "blink",
  references: [
    {
      label: "2.2.2 Pause, Stop, Hide",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide"
    },
    {
      label: "WCAG 2.1, Technique F47",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F47.html"
    },
    {
      label: "MDN: The Blink element (deprecated)",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink"
    }
  ],
  recommendation: "Remove all <blink> elements and replace them with CSS animations",
  severity: 10
}), Si = d(78, {
  description: "Zooming and scaling must not be disabled on page",
  display: "Meta viewport",
  errorMessage: '<meta name="viewport"> element is configured to disable browser zooming and/or scaling',
  level: "AA",
  key: "meta-viewport",
  references: [
    {
      label: "1.4.4 Resize Text",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
    },
    {
      label: "ACT: Meta viewport allows for zoom",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/b4f0c3/"
    }
  ],
  recommendation: 'Remove the "user-scalable=no" parameter from <meta name="viewport"> element and ensure that the "maximum-scale" parameter is not less than 2',
  severity: 10
}), Pi = d(81, {
  description: "The accessible name of all elements that include a visible text label, must match the visible text in a label",
  display: "Label content name mismatch",
  errorMessage: "Element accessible name does not match the visible text in a label of the element",
  level: "Experimental",
  key: "label-content-name-mismatch",
  references: [
    {
      label: "2.5.3: Label in Name",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
    },
    {
      label: "WCAG 2.1 Technique G208",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G208"
    },
    {
      label: "WCAG 2.1 Technique G211",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G211"
    },
    {
      label: "WCAG 2.1 Technique F96",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/F96"
    },
    {
      label: "ACT: Visible label is part of accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/"
    }
  ],
  recommendation: "Change the accessible name or the visible text in a label so that they match",
  severity: 1
}), Bi = d(84, {
  description: 'Each element with role="combobox", role="listbox", role="searchbox", role="slider",role="spinbutton" or role="textbox" must have a non-empty accessible name',
  display: "Accessible name for ARIA input fields",
  errorMessage: "ARIA input field has no accessible name",
  level: "A",
  key: "aria-input-field-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique H91",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html"
    },
    {
      label: "WCAG 2.1, Technique H44",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html"
    },
    {
      label: "WCAG 2.1, Technique H65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html"
    },
    {
      label: "ACT: Form field has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"
    }
  ],
  recommendation: 'For each element with role="combobox", role="listbox", role="searchbox", role="slider",role="spinbutton" or role="textbox" add a non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 1
}), zi = d(85, {
  description: 'All elements with role="meter" must have an accessible name',
  display: "ARIA meter accessible name",
  errorMessage: 'An element with role="meter" has no accessible name',
  level: "A",
  key: "aria-meter-name",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    }
  ],
  recommendation: 'For each elements with role="meter" add a non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 1
}), _i = d(86, {
  description: 'All elements with role="progressbar" must have an accessible name',
  display: "ARIA progressbar accessible name",
  errorMessage: 'An element with role="progressbar" has no accessible name',
  level: "A",
  key: "aria-progressbar-name",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    }
  ],
  recommendation: 'For each elements with role="progressbar" add a non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 1
}), Hi = d(87, {
  description: "Required ARIA attributes must be provided for elements with certain ARIA roles",
  display: "Required ARIA attributes",
  errorMessage: "Some required ARIA attributes are missing for the element with the given ARIA role",
  level: "A",
  key: "aria-required-attr",
  references: [
    {
      label: "4.1.1 Parsing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/parsing"
    },
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "ARIA in HTML: ARIA Roles, States, and Properties",
      url: "https://www.w3.org/TR/html-aria/#aria-table"
    },
    {
      label: "WAI-ARIA States and Properties Taxonomy",
      url: "https://www.w3.org/TR/wai-aria-1.1/#state_prop_taxonomy"
    },
    {
      label: "ACT: Element with role attribute has required states and properties",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/4e8ab6/proposed/"
    }
  ],
  recommendation: 'Apply any ARIA state and property attributes that are required for the element with the given ARIA role. For example, an element with role="checkbox" must have an aria-checked attribute: <div role="checkbox" aria-checked="false" tabindex="0"> I agree to the Terms of Use </div>',
  severity: 1
}), Oi = d(88, {
  description: "All elements with certain ARIA roles must contain particular children",
  display: "Required ARIA children",
  errorMessage: "Element with the given ARIA role is missing required children",
  level: "A",
  key: "aria-required-children",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WAI-ARIA 1.1 - The Roles Model",
      url: "https://www.w3.org/TR/wai-aria-1.1/#roles_model"
    },
    {
      label: "ACT: ARIA required owned elements",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/bc4a75/proposed/"
    }
  ],
  recommendation: "Check all elements that contain a WAI-ARIA role to ensure that all required children elements with certain roles are present",
  severity: 1
}), ji = d(89, {
  description: "All elements with certain ARIA roles must be contained by particular parent elements",
  display: "Required ARIA parent",
  errorMessage: "Element with the given ARIA role is missing required parent",
  level: "A",
  key: "aria-required-parent",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WAI-ARIA 1.1 - The Roles Model",
      url: "https://www.w3.org/TR/wai-aria-1.1/#roles_model"
    },
    {
      label: "ACT: ARIA required context role",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/ff89c9/proposed/"
    }
  ],
  recommendation: "Check all elements that contain a WAI-ARIA role to ensure that all required parent elements with certain roles are present",
  severity: 1
}), Ui = d(90, {
  description: '"aria-roledescription" attribute must be on elements with an explicit or implicit "role" value',
  display: "ARIA role description",
  errorMessage: 'Element with no role has an "aria-roledescription" attribute',
  level: "A",
  key: "aria-roledescription",
  references: [
    {
      label: "WAI-ARIA 1.1 - Taxonomy of States and Properties",
      url: "https://www.w3.org/TR/wai-aria-1.1/#state_prop_taxonomy"
    }
  ],
  recommendation: 'Ensure that the "aria-roledescription" attribute is used only on elements with an explicit or implicit "role" value',
  severity: 1
}), Vi = d(91, {
  description: 'All elements with a "role" attribute must use a valid value for that attribute',
  display: "ARIA roles",
  errorMessage: 'Element with "role" attribute has an invalid value ',
  level: "A",
  key: "aria-roles",
  references: [
    {
      label: "WAI-ARIA Roles",
      url: "https://www.w3.org/TR/wai-aria-1.1/#roles"
    },
    {
      label: "ACT: Role attribute has valid value",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/proposed/"
    }
  ],
  recommendation: 'For each element with a "role" attribute, check that the value of the "role" attribute is valid ARIA, DPub-ARIA or Graphics-ARIA role',
  severity: 1
}), $i = d(92, {
  description: 'All elements with role="text" should have a non-focusable descendants',
  display: "ARIA text role",
  errorMessage: 'Element with role="text" has focusable descendants',
  level: "Best Practice",
  key: "aria-text",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    }
  ],
  recommendation: 'Check all elements with role="text" to ensure that they do not have focusable descendants',
  severity: 1
}), Yi = d(93, {
  description: 'Each element with role="checkbox", role="menu", role="menuitemcheckbox", role="menuitemradio",role="radio", role="radiogroup", or role="switch" must have a non-empty accessible name',
  display: "Accessible name for ARIA toggle fields",
  errorMessage: "ARIA toggle field has no accessible name",
  level: "A",
  key: "aria-toggle-field-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique H91",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html"
    },
    {
      label: "WCAG 2.1, Technique H44",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html"
    },
    {
      label: "WCAG 2.1, Technique H65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html"
    },
    {
      label: "ACT: Form field has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"
    }
  ],
  recommendation: 'For each element with role="checkbox", role="menu", role="menuitemcheckbox", role="menuitemradio",role="radio", role="radiogroup", or role="switch" add a non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 1
}), Qi = d(94, {
  description: 'Each element with role="tooltip" must have a non-empty accessible name',
  display: "Accessible name for ARIA tooltip elements",
  errorMessage: "ARIA tooltip element has no accessible name because it has no content or attribute that can provide it",
  level: "A",
  key: "aria-tooltip-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    }
  ],
  recommendation: 'For each element with role="tooltip", provide an accessible name using an inner text, "title", "aria-label" or "aria-labelledby" attribute',
  severity: 1
}), Zi = d(95, {
  description: 'Each element with role="treeitem" must have a non-empty accessible name',
  display: "Accessible name for ARIA treeitem elements",
  errorMessage: "ARIA treeitem element has no accessible name because it has no content or attribute that can provide it",
  level: "Best Practice",
  key: "aria-treeitem-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    }
  ],
  recommendation: 'For each element with role="treeitem", provide an accessible name using an inner text, "title", "aria-label" or "aria-labelledby" attribute',
  severity: 1
}), Ki = d(96, {
  description: "All ARIA attributes starting with aria- must have valid names",
  display: "Valid ARIA attribute",
  errorMessage: "Element has non-existent or misspelled ARIA attribute",
  level: "A",
  key: "aria-valid-attr",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "4.1.2 Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WAI ARIA Supported States and Properties",
      url: "https://www.w3.org/TR/wai-aria-1.1/#states_and_properties"
    },
    {
      label: "WCAG 2.1, Technique G108",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G108"
    },
    {
      label: "ACT: ARIA attribute is defined in the WAI-ARIA",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/5f99a7/proposed/"
    }
  ],
  recommendation: "Checks all elements that contain WAI-ARIA attributes to ensure that the attributes have valid names",
  severity: 1
}), Xi = d(97, {
  description: 'All <audio> elements must contain at least one <track> element with kind="captions"',
  display: "Audio caption",
  errorMessage: '<audio> element does not contain <track> element(s) with kind="captions"',
  level: "A",
  key: "audio-caption",
  references: [
    {
      label: "ACT: Audio element content has a transcript",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/2eb176/proposed/"
    },
    {
      label: "ACT: Audio element content is media alternative for text",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/afb423/proposed/"
    },
    {
      label: "ACT: Audio element content has text alternative",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/e7aa44/proposed/"
    }
  ],
  recommendation: 'Check all <audio> elements and ensure that they contain at least one <track> element with kind="captions". For example: <audio> <source src="userway_installation_guide.mp3" type="audio/mp3"> <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"> </audio>',
  severity: 1
}), Ji = d(98, {
  description: '"Autocomplete" attribute value must be valid',
  display: 'Valid "autocomplete" attribute value',
  errorMessage: 'Element has invalid "autocomplete" attribute value',
  level: "AA",
  key: "autocomplete-valid",
  references: [
    {
      label: "1.3.5 Identify Input Purpose",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"
    },
    {
      label: "WCAG 2.1, Technique H98",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H98"
    },
    {
      label: "ACT: Autocomplete attribute has valid value",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/73f2c2/"
    }
  ],
  recommendation: 'Provide a valid value for the "autocomplete" attribute and make sure that it is allowed for the field type',
  severity: 1
}), eo = d(99, {
  description: "Inline text spacing must be adjustable using custom stylesheets",
  display: "Avoid inline spacing",
  errorMessage: "Element uses !important to set inline styles that affect text spacing",
  level: "AA",
  key: "avoid-inline-spacing",
  references: [
    {
      label: "1.4.12 Text Spacing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
    },
    {
      label: "ACT: Letter spacing in style attributes is not !important",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/24afc2/"
    },
    {
      label: "ACT: Word spacing in style attributes is not !important",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/9e45ec/"
    }
  ],
  recommendation: 'Remove !important from inline styles that affect text spacing (e.g "letter-spacing" and "word-spacing")',
  severity: 1
}), to = d(100, {
  description: "Page must allow keyboard users to bypass repeated blocks of content",
  display: "Bypass repeated blocks",
  errorMessage: "Page has no mechanism to bypass repeated blocks of content",
  level: "A",
  key: "bypass",
  references: [
    {
      label: "2.4.1 Bypass Blocks",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
    },
    {
      label: "ACT: Bypass Blocks of Repeated Content",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/cf77f2/proposed/"
    }
  ],
  recommendation: 'Provide a mechanism to bypass repeated blocks of content: valid "skip to main content" link, heading or landmark region',
  severity: 1
}), no = d(101, {
  description: "All text elements must have sufficient color contrast between the text in the foreground and the background color behind it in accordance with WCAG 2 AAA contrast ratio thresholds",
  display: "Color contrast (enhanced)",
  errorMessage: "Text element has insufficient color contrast",
  level: "AAA",
  key: "color-contrast-enhanced",
  references: [
    {
      label: "1.4.6 Contrast (Enhanced)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced"
    },
    {
      label: "WCAG 2.1 Technique G17",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G17"
    },
    {
      label: "ACT: Text has enhanced contrast",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/09o5cg/proposed/"
    }
  ],
  recommendation: "For each text element, ensure that the contrast of at least 7:1 for small text (18pt or 24 CSS pixels) and 4.5:1 for large text (14pt or 19 CSS pixels)",
  severity: 1
}), ro = d(102, {
  description: "CSS media queries or other techniques must not lock display orientation",
  display: "CSS orientation lock",
  errorMessage: "CSS media queries or other techniques on the page lock display orientation",
  level: "Experimental",
  key: "css-orientation-lock",
  references: [
    {
      label: "1.3.4: Orientation",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/orientation"
    },
    {
      label: "ACT: Orientation of the page is not restricted using CSS transforms",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/b33eff/proposed/"
    }
  ],
  recommendation: "Remove all CSS media queries or other techniques that lock display orientation. Ensure that content continues to be accessible to all users, including assistive technology users, in any orientation",
  severity: 1
}), ao = d(103, {
  description: "All <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
  display: "Definition list",
  errorMessage: "Definition list is structured incorrectly",
  level: "A",
  key: "definition-list",
  references: [
    {
      label: "WCAG 2.1 Success Criterion 1.3.1 Info and Relationships",
      url: "https://www.w3.org/TR/WCAG21/#info-and-relationships"
    },
    {
      label: "WCAG 2.1 Technique H40",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html"
    },
    {
      label: "WCAG 2.1, Technique H48",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H48"
    },
    {
      label: "MDN: The Description List element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"
    }
  ],
  recommendation: "Remove all elements from the list except properly-ordered <dt> and <dd> groups, <script>, <template> or <div>",
  severity: 1
}), io = d(104, {
  description: "All <dt> and <dd> elements must be contained by a <dl> element",
  display: "Description list item",
  errorMessage: "<dt> and/or <dd> element(s) not contained in a <dl> element",
  level: "A",
  key: "dlitem",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WCAG 2.1 Technique H40",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html"
    },
    {
      label: "WCAG 2.1 Technique H48",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html"
    },
    {
      label: "MDN: The Definition List element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"
    }
  ],
  recommendation: "Enclose all <dt> and <dd> elements in a <dl> element",
  severity: 1
}), oo = d(105, {
  description: 'All "id" attributes of active elements must be unique',
  display: "Duplicate id of active elements",
  errorMessage: 'An "id" attribute of active element is not unique',
  level: "A",
  key: "duplicate-id-active",
  references: [
    {
      label: "4.1.1 Parsing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/parsing"
    },
    {
      label: "WCAG 2.1 Technique F77",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F77"
    },
    {
      label: "ACT: Id attribute value is unique",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/3ea0c8/proposed/"
    }
  ],
  recommendation: "For each active, focusable element provide a unique id value",
  severity: 1
}), lo = d(106, {
  description: 'All "id" attributes of elements referenced by a labels or ARIA attributes must be unique',
  display: "Duplicate id of ARIA elements",
  errorMessage: "",
  level: "A",
  key: "duplicate-id-aria",
  references: [
    {
      label: "4.1.1 Parsing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/parsing"
    },
    {
      label: "WCAG 2.1 Technique F77",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F77"
    },
    {
      label: "ACT: Id attribute value is unique",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/3ea0c8/proposed/"
    }
  ],
  recommendation: "For each element referenced by a label or ARIA attribute, provide a unique id value",
  severity: 1
}), so = d(107, {
  description: "Interactive elements in the focus order should have a valid and appropriate role",
  display: "Focus order semantics",
  errorMessage: "Interactive element in the focus has an invalid and/or inappropriate role",
  level: "Best Practice",
  key: "focus-order-semantics",
  references: [
    {
      label: "WAI-ARIA 1.1 - The Roles Model",
      url: "https://www.w3.org/TR/wai-aria-1.1/#roles_model"
    }
  ],
  recommendation: "Ensure that the interactive element in the focus have a valid and appropriate role, whether native HTML or a custom ARIA widget",
  severity: 1
}), uo = d(108, {
  description: "Form fields must not have multiple labels",
  display: "Form field with multiple labels",
  errorMessage: "Form field has multiple labels",
  level: "A",
  key: "form-field-multiple-labels",
  references: [
    {
      label: "3.3.2 Labels or Instructions",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
    },
    {
      label: "WCAG 2.1 Technique f68",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F68"
    },
    {
      label: "WCAG 2.1 Technique H44",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html"
    },
    {
      label: "WCAG 2.1 Technique H65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html"
    },
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "WCAG 2.1, Technique ARIA16",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"
    }
  ],
  recommendation: "Ensure that only one label is assigned to a form field",
  severity: 1
}), co = d(109, {
  description: '<frame> and <iframe> elements with tabindex="-1" must not have focusable content',
  display: "focusable content of frame",
  errorMessage: '<frame> or <iframe> element with tabindex="-1" has focusable content',
  level: "A",
  key: "frame-focusable-content",
  references: [
    {
      label: "2.1.1 Keyboard",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard"
    },
    {
      label: "ACT: Iframe with interactive elements is not excluded from tab-order",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/akn7bn/proposed/"
    }
  ],
  recommendation: 'For all <frame> and <iframe> elements that have focusable content remove "tabindex" attribute with negative value or set it to "0"',
  severity: 1
}), mo = d(110, {
  description: "Informs about hidden content that cannot be analyzed for accessibility violations",
  display: "Hidden content",
  errorMessage: "Page contains hidden content that cannot be analyzed for accessibility violations",
  level: "Experimental",
  key: "hidden-content",
  references: [
    {
      label: 'MDN: "hidden" attribute',
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden"
    }
  ],
  recommendation: "You need to trigger the display of the hidden content to analyze it for accessibility violations",
  severity: 1
}), po = d(111, {
  description: "All <input> and <textarea> elements must have a non-empty accessible name",
  display: "Form field accessible name",
  errorMessage: "Form field has no accessible name because it has no content or attribute that can provide it",
  level: "A",
  key: "label",
  references: [
    {
      label: "3.3.2: Labels or Instructions",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions"
    },
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "ACT: Form field has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"
    }
  ],
  recommendation: 'For each <input> and <textarea> element, provide an accessible name using an non-empty "placeholder", "title" attribute, explicit or implicit (wrapped) <label> element that is not hidden. Alternatively, use an "aria-label" non-empty attribute or an "aria-labelledby" attribute that references an element with a non-empty accessible name',
  severity: 1
}), ho = d(113, {
  description: 'role="banner" landmark must not be contained in another landmark',
  display: 'role="banner" landmark is top level',
  errorMessage: 'Element with role="banner" is contained in another landmark',
  level: "Best Practice",
  key: "landmark-banner-is-top-level",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "W3 ARIA - Banner Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#banner"
    }
  ],
  recommendation: 'Ensure that element with role="banner" is not contained in another landmark',
  severity: 1
}), go = d(114, {
  description: '<aside> element or element with role="complementary" must not be contained in another landmark',
  display: '"Complementary" landmark is top level',
  errorMessage: '<aside> element or element with role="complementary" is contained in another landmark',
  level: "Best Practice",
  key: "landmark-complementary-is-top-level",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    }
  ],
  recommendation: 'Ensure that <aside> element or element with role="complementary" is not contained in another landmark',
  severity: 1
}), fo = d(115, {
  description: 'role="contentinfo" landmark must not be contained in another landmark',
  display: 'role="contentinfo" landmark is top level',
  errorMessage: 'Element with role="contentinfo" is contained in another landmark',
  level: "Best Practice",
  key: "landmark-contentinfo-is-top-level",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "W3 ARIA - Contentinfo Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#contentinfo"
    }
  ],
  recommendation: 'Ensure that element with role="contentinfo" is not contained in another landmark',
  severity: 1
}), wo = d(116, {
  description: '<main> element or element with role="main" must not be contained in another landmark',
  display: '"Main" landmark is top level',
  errorMessage: '<main> element or element with role="main" is contained in another landmark',
  level: "Best Practice",
  key: "landmark-main-is-top-level",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "W3 ARIA - Contentinfo Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#contentinfo"
    }
  ],
  recommendation: 'Ensure that <main> element or element with role="main" is not contained in another landmark',
  severity: 1
}), bo = d(117, {
  description: 'Page must have at most one "banner" landmark',
  display: 'No duplicate "banner" landmark',
  errorMessage: 'Page has more than one "banner" landmark',
  level: "Best Practice",
  key: "landmark-no-duplicate-banner",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "2.4.1 Bypass Blocks",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
    },
    {
      label: "2.4.6 Headings and Labels",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
    },
    {
      label: "WCAG 2.1 Technique ARIA11",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"
    },
    {
      label: "WCAG 2.1 Technique ARIA13",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13"
    },
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "W3 ARIA - Banner Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#banner"
    }
  ],
  recommendation: 'Ensure the page has at most one "banner" landmark',
  severity: 1
}), Ao = d(118, {
  description: 'Page must have at most one "contentinfo" landmark',
  display: 'No duplicate "contentinfo" landmark',
  errorMessage: 'Page has more than one "contentinfo" landmark',
  level: "Best Practice",
  key: "landmark-no-duplicate-contentinfo",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "2.4.1 Bypass Blocks",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
    },
    {
      label: "2.4.6 Headings and Labels",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
    },
    {
      label: "WCAG 2.1 Technique ARIA11",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"
    },
    {
      label: "WCAG 2.1 Technique ARIA13",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13"
    },
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "W3 ARIA - Contentinfo Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#contentinfo"
    }
  ],
  recommendation: 'Ensure the page has at most one "contentinfo" landmark',
  severity: 1
}), Do = d(119, {
  description: 'Page must have at most one "main" landmark',
  display: 'No duplicate "main" landmark',
  errorMessage: 'Page has more than one "main" landmark',
  level: "Best Practice",
  key: "landmark-no-duplicate-main",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "2.4.1 Bypass Blocks",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
    },
    {
      label: "2.4.6 Headings and Labels",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"
    },
    {
      label: "WCAG 2.1 Technique ARIA11",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"
    },
    {
      label: "WCAG 2.1 Technique ARIA13",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13"
    },
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "W3 ARIA - Contentinfo Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#contentinfo"
    }
  ],
  recommendation: 'Ensure the page has at most one "main" landmark',
  severity: 1
}), yo = d(120, {
  description: 'Page must have one "main" landmark',
  display: 'One "main" landmark',
  errorMessage: 'Page has more than one "main" landmark',
  level: "Best Practice",
  key: "landmark-one-main",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "2.4.1 Bypass Blocks",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
    },
    {
      label: "WCAG 2.1 Technique ARIA11",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"
    }
  ],
  recommendation: 'Ensure the page has one "main" landmark',
  severity: 1
}), vo = d(121, {
  description: "Landmarks must have a unique role or role/label/title combination",
  display: "Unique landmark",
  errorMessage: "Page contains landmarks with the same role or role/label/title combination",
  level: "Best Practice",
  key: "landmark-unique",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"
    },
    {
      label: "Contentinfo Landmark: ARIA Landmark Examples (W3)",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/contentinfo.html"
    },
    {
      label: "W3C Recommendation - Contentinfo role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#contentinfo"
    }
  ],
  recommendation: "Ensure the page contains only landmarks with a unique role or accessible name (i.e. role, label, title) combination",
  severity: 1
}), Co = d(122, {
  description: 'All <a> elements or elements with role="link" must be distinguishable without relying on color',
  display: "Link in text block",
  errorMessage: "The color contrast ratio of the element is lower than 3:1",
  level: "A",
  key: "link-in-text-block",
  references: [
    {
      label: "1.4.3 Contrast (Minimum)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
    },
    {
      label: "WCAG 2.1 Technique G18",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html"
    }
  ],
  recommendation: 'Ensure the color contrast ratio of all <a> elements or elements with role="link" that appear in blocks of text is at least 3:1 against the surrounding text',
  severity: 1
}), To = d(123, {
  description: 'A <meta> element with a http-equiv="refresh" attribute must not have refresh time of more than 0',
  display: "Meta refresh (no exception)",
  errorMessage: 'Page contains a <meta> element with http-equiv="refresh" attribute with refresh time of more than 0',
  level: "AAA",
  key: "meta-refresh-no-exceptions",
  references: [
    {
      label: "2.2.1 Timing Adjustable",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"
    },
    {
      label: "2.2.4 Interruptions",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html"
    },
    {
      label: "3.2.5: Change on Request",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html"
    },
    {
      label: "WCAG 2.1 Technique G110",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G110"
    },
    {
      label: "WCAG 2.0 Technique H76",
      url: "https://www.w3.org/TR/WCAG-TECHS/H76.html"
    },
    {
      label: "WCAG 2.0 Technique F40",
      url: "https://www.w3.org/TR/WCAG-TECHS/F40.html"
    },
    {
      label: "WCAG 2.0 Technique F41",
      url: "https://www.w3.org/TR/WCAG-TECHS/F41.html"
    },
    {
      label: "ACT: Meta element has no refresh delay (no exception)",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/bisz58/proposed/"
    }
  ],
  recommendation: 'Remove <meta> elements with http-equiv="refresh" attribute, or set the refresh time to 0',
  severity: 1
}), Eo = d(124, {
  description: "Page zooming and scaling must be available up to 500%",
  display: "Meta viewport (large)",
  errorMessage: '<meta name="viewport"> element is configured to limit page zooming and scaling to less than 500%',
  level: "Best Practice",
  key: "meta-viewport-large",
  references: [
    {
      label: "1.4.4 Resize Text",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
    }
  ],
  recommendation: 'Remove the "user-scalable=no" parameter from <meta name="viewport"> element and ensure that the "maximum-scale" parameter is not less than 5',
  severity: 1
}), Ro = d(125, {
  description: "All <object> elements must have alternate text to convey their purpose to the user",
  display: "Alternate text for <object> element",
  errorMessage: {
    emptyAlt: "<object> element has an empty accessible name",
    missingAlt: '<object> element missing an alternate text, such as "title", "aria-label" or "alt" attribute'
  },
  level: "A",
  key: "object-alt",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1 Technique H53",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H53"
    },
    {
      label: "ACT: Object element rendering non-text content has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/8fc3b6/"
    }
  ],
  recommendation: {
    emptyAlt: 'For each <object> element add a non-empty "alt, "title" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <object title="Userway installation guide" data="/videos/userway-installation-guide.mp4"></object>',
    missingAlt: 'For each <object> element add a non-empty "alt, "title" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <object title="Userway installation guide" data="/videos/userway-installation-guide.mp4"></object>'
  },
  severity: 1
}), Io = d(126, {
  description: "<p> elements must not be used to style headings",
  display: "Paragraph as heading",
  errorMessage: "<p> element used to style heading",
  level: "Experimental",
  key: "p-as-heading",
  references: [
    {
      label: "WCAG 2.0, Technique H42",
      url: "https://www.w3.org/TR/WCAG20-TECHS/H42"
    },
    {
      label: "WCAG 2.0, Technique G141",
      url: "https://www.w3.org/TR/WCAG20-TECHS/G141"
    }
  ],
  recommendation: 'Ensure <p> elements are not used to style headings. Instead, use <h1> - <h6>  elements or elements with role="heading" and an appropriate aria-level attribute',
  severity: 1
}), xo = d(127, {
  description: "",
  display: "Elements marked as decorative must be excluded from the accessibility tree or have a presentational role",
  errorMessage: "Element marked as decorative but not excluded from the accessibility tree or has no presentational role",
  level: "Best Practice",
  key: "presentation-role-conflict",
  references: [
    {
      label: "ACT: Element marked as decorative is not exposed",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/46ca7f/"
    }
  ],
  recommendation: 'For each element marked as decorative using "aria-hidden=true" or "hidden" attribute ensure that it is excluded from the accessibility tree by absence of non-empty "aria-label" or "aria-labelledby" attributes, or by using "role=presentation" or "role=none"',
  severity: 1
}), Fo = d(128, {
  description: "",
  display: "",
  errorMessage: "",
  level: "Best Practice",
  key: "region",
  references: [],
  recommendation: "",
  severity: 1
}), ko = d(129, {
  description: 'All elements with role="image" must have alternate text to convey their purpose to the user',
  display: 'Alternate text for element with role="image"',
  errorMessage: {
    emptyAlt: 'Element with role="image" has an empty "aria-label" attribute',
    missingAlt: 'Element with role="image" missing an alternate text, such as "aria-label" attribute'
  },
  fixable: !0,
  level: "A",
  key: "role-img-alt",
  recommendation: {
    emptyAlt: 'Add a concise description to "aria-label" attribute or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <div role="img" style="width:48px; height:48px; background-image: url(userway-logo.png)" />. If the element is purely decorative or a text description would be redundant, add an role="presentation" or role="none" attribute. For example: <div role="presentation" style="width:48px; height:48px; background-image: url(userway-logo.png)" />.',
    missingAlt: 'Add an "aria-label" attribute with concise description or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <div role="img" style="width:48px; height:48px; background-image: url(userway-logo.png)" />. If the element is purely decorative or a text description would be redundant, add an role="presentation" or role="none" attribute. For example: <div role="presentation" style="width:48px; height:48px; background-image: url(userway-logo.png)" />.'
  },
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "WCAG 2.1, Technique F65",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"
    },
    {
      label: "WCAG 2.1, Technique F67",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H67"
    },
    {
      label: "WCAG 2.1, Technique H37",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H37"
    },
    {
      label: "WCAG 2.1, Technique ARIA10",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10"
    },
    {
      label: "ACT: Image has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/"
    }
  ],
  severity: 1
}), Wo = d(130, {
  description: 'A "scope" attribute must be used correctly on tables in accordance with either HTML4 or HTML5 specifications',
  display: 'Valid "scope" attribute',
  errorMessage: {
    thOnly: '"scope" attribute is used on an element other than <th> element in accordance with HTML5 specification',
    invalidScopeValue: 'A value of "scope" attribute is invalid'
  },
  level: "Best Practice",
  key: "scope-attr-valid",
  references: [
    {
      label: "WAI, Tables Concepts",
      url: "https://www.w3.org/WAI/tutorials/tables/"
    },
    {
      label: "MDN: The Table Header element",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope"
    }
  ],
  recommendation: {
    thOnly: '"scope" attribute must be used only on <th> elements in accordance with HTML5 specification',
    invalidScopeValue: 'A value of "scope" attribute can be only "row" or "col"'
  },
  severity: 1
}), No = d(131, {
  description: "Scrollable region must be keyboard accessible",
  display: "Scrollable region is focusable",
  errorMessage: "Scrollable region has no focusable elements",
  level: "A",
  key: "scrollable-region-focusable",
  references: [
    {
      label: "2.1.1 Keyboard",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
    },
    {
      label: "WCAG 2.1, Technique F55",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55"
    },
    {
      label: "ACT: Scrollable element is keyboard accessible",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/proposed/"
    }
  ],
  recommendation: "Ensure that the scrollable region is accessible with the keyboard",
  severity: 1
}), Mo = d(132, {
  description: "Each <select> element must have a programmatically associated <label> element",
  display: "Select name",
  errorMessage: "<select> element has no associated <label> element",
  level: "A",
  key: "select-name",
  references: [
    {
      label: "ACT: Form field has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"
    }
  ],
  recommendation: 'For each <select> element, provide a programmatically associated label using implicit or explicit <label> element, non-empty "aria-label" attribute or "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 1
}), Lo = d(133, {
  description: "Server-side image maps must not be used as they require the use of a mouse",
  display: "Server-side image map",
  errorMessage: "A server-side image map is present",
  level: "A",
  key: "server-side-image-map",
  references: [
    {
      label: "9.1 - Provide client-side image maps instead of server-side image maps except where the regions cannot be defined with an available geometric shape",
      url: "https://www.w3.org/WAI/wcag-curric/sam66-0.htm"
    },
    {
      label: "MDN: The HTMLImageElement property isMap",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/isMap"
    }
  ],
  recommendation: "Use client-side image maps instead — <map> element and usemap attribute of <img> element",
  severity: 1
}), Go = d(134, {
  description: '<svg> element with role="img", role="graphics-document" or role="graphics-symbol" must have a non-empty accessible name',
  display: "SVG image alternate text",
  errorMessage: '<svg> element with role="img", role="graphics-document" or role="graphics-symbol" has no accessible name',
  level: "A",
  key: "svg-img-alt",
  references: [
    {
      label: "1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"
    },
    {
      label: "ACT: SVG element with explicit role has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/7d6734/"
    }
  ],
  recommendation: 'For each <svg> element with role="img", role="graphics-document" or role="graphics-symbol", provide a non-empty accessible name using <title> element, non-empty "aria-label" attribute or "aria-labelledby" attribute that refers to the id of an element with discernible text content',
  severity: 1
}), qo = d(135, {
  description: 'All <table> element must use a <caption> element instead of <th> or <td> elements with "colspan" attribute to visually indicate a caption',
  display: "Fake table caption",
  errorMessage: '<table> element uses a <th> or <td> elements with "colspan" attribute to visually indicate a caption',
  level: "Experimental",
  key: "table-fake-caption",
  references: [
    {
      label: "WCAG 2.1, Technique H39",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H39"
    },
    {
      label: "WCAG 2.1, Technique H43",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H43"
    },
    {
      label: "WCAG 2.1, Technique H51",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H51"
    },
    {
      label: "WCAG 2.1, Technique H63",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H63"
    },
    {
      label: "WCAG 2.1, Technique H73",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H73"
    }
  ],
  recommendation: 'Replace the <th> or <td> elements that use a "colspan" attribute to visually indicate a caption with a non-empty <caption> element',
  severity: 1
}), So = d(136, {
  description: "All touch targets must be at least 24 by 24 CSS pixels in size or leave a sufficient space around them",
  display: "Target size",
  errorMessage: "Element does not meet minimum requirements for a touch target",
  level: "AA",
  key: "target-size",
  references: [
    {
      label: "2.5.8 Target Size (Minimum)",
      url: "https://w3c.github.io/wcag/understanding/target-size-minimum.html"
    }
  ],
  recommendation: "Set the minimum width and height of the element to 24px or more. The size is computed by taking the largest unobscured area of the touch target",
  severity: 1
}), Po = d(137, {
  description: "All non-empty <td> elements in a <table> elements larger than 3x3 must have a <th> element as an associated header",
  display: "<td> has header",
  errorMessage: "One or more <td> elements are missing an associated <th> element",
  level: "Experimental",
  key: "td-has-header",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WCAG 2.1 Technique H43",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H43"
    },
    {
      label: "WCAG 2.1 Technique H51",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H51"
    },
    {
      label: "WCAG 2.1 Technique H63",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H63"
    },
    {
      label: "WCAG 2.1 Technique H73",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H73"
    }
  ],
  recommendation: "For each non-empty <td> element in <table> element larger than 3x3, add a <th> element and set its scope attribute so it will be a row or a column header cell. Alternatively you can use the headers attribute on the <td> element to set its associated <th> element(s)",
  severity: 5
}), Bo = d(138, {
  description: "All <td> elements that use the headers attribute must only refer to <th> elements in the same <table> element",
  display: "Table headers attribute",
  errorMessage: "<td> element refers to <th> element in another table",
  level: "A",
  key: "td-headers-attr",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WCAG 2.1 Technique H43",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H43"
    },
    {
      label: "ACT: Headers attribute specified on a cell refers to cells in the same table element",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/a25f45/"
    }
  ],
  recommendation: "Ensure that the all <td> elements refer to <th> elements in the same <table> element. If the <td> element refers to a <th> element in another <table> element, add the <th> element to the same <table> element",
  severity: 1
}), zo = d(139, {
  description: "All <th> elements must refer to <td> elements",
  display: "<th> has data cells",
  errorMessage: "<th> element does not refer to any <td> elements",
  level: "A",
  key: "th-has-data-cells",
  references: [
    {
      label: "1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
    },
    {
      label: "WCAG 2.1 Technique H43",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H43"
    },
    {
      label: "WCAG 2.1 Technique H51",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H51"
    },
    {
      label: "WCAG 2.1 Technique H63",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H63"
    },
    {
      label: "WCAG 2.1 Technique H73",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H73"
    },
    {
      label: "ACT: Table header cell has assigned cells",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/d0f69e/proposed/"
    }
  ],
  recommendation: "Set the <th> element's scope attribute so it will be a row or a column header cell. Alternatively you can use the headers attribute on the <td> element to set their associated <th> element(s)",
  severity: 1
}), _o = d(140, {
  description: 'All <video> elements must contain at least one <track> element with kind="captions"',
  display: "Video caption",
  errorMessage: '<video> element does not contain <track> element(s) with kind="captions"',
  level: "A",
  key: "video-caption",
  references: [
    {
      label: "ACT: Video element auditory content has accessible alternative",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/eac66b/proposed/"
    },
    {
      label: "ACT: Video element auditory content has captions",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/f51b46/proposed/"
    },
    {
      label: "ACT: Video element content is media alternative for text",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/ab4d13/proposed/"
    }
  ],
  recommendation: 'Check all <video> elements and ensure that they contain at least one <track> element with kind="captions". For example: <video width="300" height="200"> <source src="userway_installation_guide.mp4" type="video/mp4"> <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"> </video>',
  severity: 1
}), Ho = d(141, {
  description: "Interactive control elements must not have focusable descendants",
  display: "Nested interactive elements",
  errorMessage: "Interactive element has focusable descendants",
  level: "A",
  key: "nested-interactive",
  references: [
    {
      label: "ACT: Element with presentational children has no focusable content",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/307n5z/"
    }
  ],
  recommendation: "Check all interactive elements and ensure that they do not have focusable descendants",
  severity: 10
  // another value in google sheet is 8, consult Dmytro Ulianov or Adam Mezes
}), Oo = d(142, {
  description: "Screen readers and other assistive technology cannot understand the context of a <b> element as bolded text can play numerous roles",
  display: "Bold",
  errorMessage: "A <b> element used to format text",
  level: "Best Practice",
  key: "bold",
  references: [
    {
      label: "WCAG 2.1, Technique G115",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G115"
    },
    {
      label: "WCAG 2.1, Technique G140",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G140"
    },
    {
      label: "WCAG 2.1, Technique H49",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H49"
    }
  ],
  recommendation: "If the text should be emphasized semantically, use the <strong> element instead. If the text is a heading, an 'H' tag (such as <h1>, <h2>, <h3>…) should be used instead. If the text is highlighted as a visual effect, CSS should be used to do this",
  severity: 1
}), jo = d(143, {
  description: "<video> or <audio> element should not autoplay audio for more than 3 seconds",
  display: "No autoplay audio for more than 3 seconds",
  errorMessage: "<video> or <audio> element plays audio automatically for more than 3 seconds",
  level: "A",
  key: "no-autoplay-audio-no-exceptions",
  references: [
    {
      label: "1.4.2 Audio Control (Level A)",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html"
    },
    {
      label: "WCAG 2.1, Technique G60",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G60"
    },
    {
      label: "WCAG 2.1, Technique G171",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G171"
    },
    {
      label: "ACT: Audio or video element that plays automatically has no audio that lasts more than 3 seconds",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/aaa1bf/proposed/"
    }
  ],
  recommendation: "Make auto playing the audio shorter than 3 seconds",
  severity: 10
}), Uo = d(144, {
  description: "All elements must only use allowed ARIA attributes",
  display: "Allowed ARIA attribute",
  errorMessage: "",
  level: "A",
  key: "aria-allowed-attr",
  references: [
    {
      label: "WAI-ARIA 1.2, Supported States and Properties",
      url: "https://www.w3.org/TR/wai-aria-1.2/#states_and_properties"
    },
    {
      label: "WAI-ARIA 1.2, Global States and Properties",
      url: "https://www.w3.org/TR/wai-aria-1.2/#global_states"
    },
    {
      label: "ACT: ARIA state or property is permitted",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/5c01ea/proposed/"
    }
  ],
  recommendation: 'Ensure that all elements use only ARIA attributes allowed for their role. For example: <div role="button" aria-pressed="true">Button</div>',
  severity: 1
}), Vo = d(145, {
  description: "WAI-ARIA role should be appropriate for the element",
  display: "Allowed ARIA role",
  errorMessage: 'Element has an invalid value for the ARIA "role" attribute',
  level: "Best Practice",
  key: "aria-allowed-role",
  references: [
    {
      label: "WAI-ARIA Roles",
      url: "https://www.w3.org/TR/wai-aria-1.1/#roles"
    }
  ],
  recommendation: 'Ensure all elements that have ARIA "role" attribute have a valid value for it and the value is appropriate for the element in the context of the page',
  severity: 1
}), $o = d(146, {
  description: 'All elements with role="link", role="button", or role="menuitem" must have a non-empty accessible name',
  display: "Accessible name for ARIA command elements",
  errorMessage: "ARIA command element has no accessible name because it has no content or attribute that can provide it",
  level: "A",
  key: "aria-command-name",
  references: [
    {
      label: "4.1.2: Name, Role, Value",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"
    },
    {
      label: "WCAG 2.1, Technique ARIA14",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"
    },
    {
      label: "WCAG 2.1, Technique ARIA16",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"
    },
    {
      label: "ACT: Button has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/"
    },
    {
      label: "ACT: Menuitem has non-empty accessible name",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/m6b1q3/proposed/"
    }
  ],
  recommendation: 'For each element with role="button", role="link", or role="menuitem", provide an accessible name using an inner text, "title", "aria-label" or "aria-labelledby" attribute',
  severity: 1
}), Yo = d(147, {
  description: 'All elements with role="dialog" and role="alertdialog" must have a non-empty accessible name',
  display: "ARIA dialog name",
  errorMessage: "ARIA dialog element has no accessible name because it has no content or attribute that can provide it",
  level: "Best Practice",
  key: "aria-dialog-name",
  references: [],
  recommendation: 'For each element with role="dialog" and role="alertdialog", provide an accessible name using an "aria-label" or "aria-labelledby" attribute',
  severity: 1
}), Qo = d(148, {
  description: "Screen readers and other assistive technology cannot understand the context of a <i> element as italic text can play numerous roles",
  display: "Italic",
  errorMessage: "A <i> element used to format text",
  level: "Best Practice",
  key: "italic",
  references: [
    {
      label: "WCAG 2.1, Technique G115",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G115"
    },
    {
      label: "WCAG 2.1, Technique G140",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G140"
    },
    {
      label: "WCAG 2.1, Technique H49",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H49"
    }
  ],
  recommendation: "If the text should be emphasized semantically, use the <em> element instead. If the text should be marked in another language, add 'lang' attribute with a valid value. If the text is highlighted as a visual effect, CSS should be used to do this",
  severity: 1
}), Zo = d(149, {
  description: "Each section of non-repeated content must have a heading element",
  display: "Bypass heading",
  errorMessage: "Section of non-repeated content has no visible heading element or it is excluded from the accessibility tree",
  level: "A",
  key: "bypass-heading",
  references: [
    {
      label: "2.4.1 Bypass Blocks",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
    },
    {
      label: "WCAG 2.1, Technique H69",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/html/H69"
    },
    {
      label: "ACT: Document has heading for non-repeated content",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/047fe0/proposed/"
    }
  ],
  recommendation: "For each section of non-repeated content, provide a visible heading element that is included in the accessibility tree",
  severity: 1
}), Ko = d(150, {
  description: 'Page must have a <main> element or element with role="main" that has non-repeated content and is included in the accessibility tree',
  display: "Bypass landmark",
  errorMessage: 'Page has no <main> element or element with role="main" that has non-repeated content and is included in the accessibility tree',
  level: "A",
  key: "bypass-landmark",
  references: [
    {
      label: "WCAG 2.1 Technique ARIA11",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"
    },
    {
      label: "ACT: Document has a landmark with non-repeated content",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/b40fd1/proposed/"
    }
  ],
  recommendation: 'Provide a <main> element or element with role="main" that has non-repeated content and is included in the accessibility tree',
  severity: 1
}), Xo = d(151, {
  description: "Page must have an instrument to move focus to non-repeated content",
  display: "Move focus to non-repeated content",
  errorMessage: "Page has no instrument to move focus to non-repeated content",
  level: "A",
  key: "bypass-move-focus",
  references: [
    {
      label: "WCAG 2.1 Technique G1",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G1"
    },
    {
      label: "WCAG 2.1 Technique G123",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G123"
    },
    {
      label: "WCAG 2.1 Technique G124",
      url: "https://www.w3.org/WAI/WCAG21/Techniques/general/G124"
    },
    {
      label: "ACT: Document has an instrument to move focus to non-repeated content",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/ye5d6e/proposed/"
    }
  ],
  recommendation: 'Provide an instrument to move focus to non-repeated content (e.g. "Skip to main content" link)',
  severity: 1
}), Jo = d(152, {
  description: 'Elements should not have "!important" for "line-height" property in "style" attribute, except if it’s at least 1.5 times the font size',
  display: "Avoid inline line height",
  errorMessage: 'Element has "!important" for "line-height" property in "style" attribute',
  level: "A",
  key: "avoid-inline-line-height",
  references: [
    {
      label: "1.4.12 Text Spacing",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
    },
    {
      label: "ACT: Line height in style attributes is not !important",
      url: "https://www.w3.org/WAI/standards-guidelines/act/rules/78fd32/"
    }
  ],
  recommendation: 'Remove "!important" for "line-height" property in "style" attribute or make it at least 1.5 times the font size',
  severity: 1
});
const Qe = {
  "aria-activedescendant": {
    type: "idref",
    allowEmpty: !0
  },
  "aria-atomic": {
    type: "boolean",
    defaultValue: "false"
  },
  "aria-autocomplete": {
    type: "token",
    values: ["inline", "list", "both", "none"],
    defaultValue: "none"
  },
  "aria-busy": {
    type: "boolean",
    defaultValue: "false"
  },
  "aria-checked": {
    type: "tristate",
    defaultValue: "undefined"
  },
  "aria-colcount": {
    type: "integer",
    minValue: -1
  },
  "aria-colindex": {
    type: "integer",
    minValue: 1
  },
  "aria-colspan": {
    type: "integer",
    minValue: 1
  },
  "aria-controls": {
    type: "idref-list",
    allowEmpty: !0
  },
  "aria-current": {
    type: "token",
    allowEmpty: !0,
    values: ["page", "step", "location", "date", "time", "true", "false"],
    defaultValue: "false"
  },
  "aria-describedby": {
    type: "idref-list",
    allowEmpty: !0
  },
  "aria-details": {
    type: "idref",
    allowEmpty: !0
  },
  "aria-disabled": {
    type: "boolean",
    defaultValue: "false"
  },
  // deprecated in WAI ARIA 1.1
  "aria-dropeffect": {
    deprecated: !0,
    type: "token-list",
    values: ["copy", "execute", "link", "move", "none", "popup"],
    defaultValue: "none"
  },
  "aria-errormessage": {
    type: "idref",
    allowEmpty: !0
  },
  "aria-expanded": {
    type: "boolean-undefined",
    defaultValue: "undefined"
  },
  "aria-flowto": {
    type: "idref-list",
    allowEmpty: !0
  },
  // deprecated in WAI ARIA 1.1
  "aria-grabbed": {
    deprecated: !0,
    type: "boolean-undefined",
    defaultValue: "undefined"
  },
  "aria-haspopup": {
    type: "token",
    allowEmpty: !0,
    values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"],
    defaultValue: "false"
  },
  "aria-hidden": {
    type: "boolean-undefined",
    defaultValue: "undefined"
  },
  "aria-invalid": {
    type: "token",
    allowEmpty: !0,
    values: ["grammar", "false", "spelling", "true"],
    defaultValue: "false"
  },
  "aria-keyshortcuts": {
    type: "string",
    allowEmpty: !0
  },
  "aria-label": {
    type: "string",
    allowEmpty: !0
  },
  "aria-labelledby": {
    type: "idref-list",
    allowEmpty: !0
  },
  "aria-level": {
    type: "integer",
    minValue: 1
  },
  "aria-live": {
    type: "token",
    values: ["assertive", "off", "polite"],
    defaultValue: "polite"
  },
  "aria-modal": {
    type: "boolean",
    defaultValue: "false"
  },
  "aria-multiline": {
    type: "boolean",
    defaultValue: "false"
  },
  "aria-multiselectable": {
    type: "boolean",
    defaultValue: "false"
  },
  "aria-orientation": {
    type: "token",
    values: ["horizontal", "undefined", "vertical"],
    defaultValue: "undefined"
  },
  "aria-owns": {
    type: "idref-list",
    allowEmpty: !0
  },
  "aria-placeholder": {
    type: "string",
    allowEmpty: !0
  },
  "aria-posinset": {
    type: "integer",
    minValue: 1
  },
  "aria-pressed": {
    type: "tristate",
    defaultValue: "undefined"
  },
  "aria-readonly": {
    type: "boolean",
    defaultValue: "false"
  },
  "aria-relevant": {
    type: "token-list",
    values: ["additions", "all", "removals", "text"]
  },
  "aria-required": {
    type: "boolean",
    defaultValue: "false"
  },
  "aria-roledescription": {
    type: "string",
    allowEmpty: !0
  },
  "aria-rowcount": {
    type: "integer",
    minValue: -1
  },
  "aria-rowindex": {
    type: "integer",
    minValue: 1
  },
  "aria-rowspan": {
    type: "integer",
    minValue: 0
  },
  "aria-selected": {
    type: "boolean-undefined",
    defaultValue: "undefined"
  },
  "aria-setsize": {
    type: "integer",
    minValue: -1
  },
  "aria-sort": {
    type: "token",
    values: ["ascending", "descending", "none", "other"],
    defaultValue: "none"
  },
  "aria-valuemax": {
    type: "number"
  },
  "aria-valuemin": {
    type: "number"
  },
  "aria-valuenow": {
    type: "number"
  },
  "aria-valuetext": {
    type: "string"
  }
}, el = {
  boolean: ["true", "false"],
  "boolean-undefined": ["true", "false", "undefined"],
  tristate: ["true", "false", "mixed", "undefined"]
};
function pr() {
  return Object.keys(Qe);
}
function Ee(e) {
  return Qe[e] ? { ...Qe[e] } : null;
}
function tl(e) {
  return Object.entries(Qe).reduce(
    (t, [n, r]) => (e.includes(r.type) && (t[n] = r), t),
    {}
  );
}
function Q(e, t) {
  let n = e.getAttribute(t);
  if (typeof n == "string") {
    if (n = n.trim().toLowerCase(), n === "true" || n === "")
      return !0;
    if (n === "false")
      return !1;
  }
  return null;
}
function j(e, t) {
  const n = parseInt(e.getAttribute(t) || "", 10);
  return isNaN(n) ? null : n;
}
function Nn(e) {
  return e[e.length - 1];
}
function qt(e) {
  return [...new Set(e)];
}
function St(e, t = (n, r) => n < r ? -1 : n > r ? 1 : 0) {
  if (e.length <= 1)
    return e;
  const n = Math.floor(e.length / 2), r = e.slice(0, n), a = e.slice(n), i = St(r, t), o = St(a, t), l = [];
  let s = 0, u = 0;
  for (; s < i.length && u < o.length; )
    t(i[s], o[u]) <= 0 ? (l.push(i[s]), s++) : (l.push(o[u]), u++);
  return l.concat(
    i.slice(s),
    o.slice(u)
  );
}
function Ze(e, t) {
  if (!e)
    throw new Error(t);
}
let ke = {};
const tt = {
  /**
   * Set an item in the cache.
   * @param key Name of the key.
   * @param value Value to store.
   */
  set(e, t) {
    nl(e), ke[e] = t;
  },
  /**
   * Retrieve an item from the cache.
   * @param key Name of the key the value was stored as.
   * @param creator Default value to set if there is a cache miss. Functions are evaluated before caching. To override a value already saved, use `set()`.
   * @returns The item stored
   */
  get(e, t = () => {
  }) {
    if (rl(t), e in ke)
      return ke[e];
    if (typeof t == "function") {
      const n = t();
      return Ze(
        n !== void 0,
        "Cache creator function should not return undefined"
      ), this.set(e, n), ke[e];
    }
  },
  /**
   * Clear the cache.
   */
  clear() {
    ke = {};
  }
};
function nl(e) {
  Ze(
    typeof e == "string",
    "key must be a string, " + typeof e + " given"
  ), Ze(e !== "", "key must not be empty");
}
function rl(e) {
  Ze(
    typeof e == "function" || typeof e > "u",
    "creator must be a function or undefined, " + typeof e + " given"
  );
}
const hr = typeof window < "u" && "MutationObserver" in window, ne = {}, ue = {
  /**
   * Adds a new cache item
   */
  set(e, t) {
    if (ue.exist(e))
      throw new Error(`'${e}' mutation cache is already exist`);
    ne[e] = {
      value: t(),
      recalculateValue: t
    };
  },
  /**
   * Returns the given cache's value
   */
  get(e) {
    return (ne[e].isRecalculateNeeded || // If we cannot use mutation observer, we need to calculate the values before returning them
    !hr) && (ne[e].isRecalculateNeeded = !1, ue.recalculate(e)), ne[e].value;
  },
  /**
   * Determines if the given cache item is already added
   */
  exist(e) {
    return e in ne;
  },
  /**
   * Recalculates the given cache's value
   */
  recalculate(e) {
    ne[e].value = ne[e].recalculateValue();
  }
};
hr && new MutationObserver(() => {
  for (const e in ne)
    ne[e].isRecalculateNeeded = !0;
}).observe(document.documentElement, { childList: !0, subtree: !0 });
function Pt(e) {
  return e ? e.trim().split("-")[0].toLowerCase() : "";
}
let J = class {
  /* eslint-disable-next-line max-params */
  constructor(t, n, r, a) {
    Y(this, "hexRegex", /^#[0-9a-f]{3,8}$/i), Y(this, "colorFnRegex", /^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i), Y(this, "red"), Y(this, "green"), Y(this, "blue"), Y(this, "alpha"), this.red = t === void 0 ? 0 : t, this.blue = r === void 0 ? 0 : r, this.green = n === void 0 ? 0 : n, this.alpha = a === void 0 ? 1 : a;
  }
  /**
   * Parse any valid color string and assign its values to "this"
   */
  parseString(t) {
    return t.match(this.colorFnRegex) ? (this.parseColorFnString(t), this) : t.match(this.hexRegex) ? (this.parseHexString(t), this) : (console.error(`Unable to parse color "${t}"`), null);
  }
  /**
   * Set the color value based on a CSS RGB/RGBA string
   */
  parseColorFnString(t) {
    const [, n, r] = t.match(this.colorFnRegex) || [];
    if (!n || !r)
      return;
    let a = r.split(/\s*[,\/\s]\s*/).map((i) => i.replace(",", "").trim()).filter((i) => i !== "").map((i, o) => this.convertColorVal(n, i, o));
    n.substr(0, 3) === "hsl" && (a = this.hslToRgb(a)), this.red = a[0], this.green = a[1], this.blue = a[2], this.alpha = typeof a[3] == "number" ? a[3] : 1;
  }
  /**
   * Set the color value based on a CSS HEX string
   */
  parseHexString(t) {
    if (!t.match(this.hexRegex) || [6, 8].includes(t.length))
      return;
    let n = t.replace("#", "");
    if (n.length < 6) {
      const [a, i, o, l] = n;
      n = a + a + i + i + o + o, l && (n += l + l);
    }
    const r = n.match(/.{1,2}/g);
    r && (this.red = parseInt(r[0], 16), this.green = parseInt(r[1], 16), this.blue = parseInt(r[2], 16)), r && r[3] ? this.alpha = parseInt(r[3], 16) / 255 : this.alpha = 1;
  }
  /**
   * Set the color value based on a CSS RGB/RGBA string
   */
  parseRgbString(t) {
    if (t === "transparent") {
      this.red = 0, this.green = 0, this.blue = 0, this.alpha = 0;
      return;
    }
    this.parseColorFnString(t);
  }
  /**
   * Get the relative luminance value
   * using algorithm from http://www.w3.org/WAI/GL/wiki/Relative_luminance
   */
  getRelativeLuminance() {
    if (!this.red && !this.green && !this.blue)
      return;
    const t = this.red / 255, n = this.green / 255, r = this.blue / 255, a = t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4), i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4), o = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    return 0.2126 * a + 0.7152 * i + 0.0722 * o;
  }
  /**
   * Provide the hex string value for the color
   */
  toHexString() {
    const t = Math.round(this.red).toString(16), n = Math.round(this.green).toString(16), r = Math.round(this.blue).toString(16);
    return "#" + (this.red > 15.5 ? t : "0" + t) + (this.green > 15.5 ? n : "0" + n) + (this.blue > 15.5 ? r : "0" + r);
  }
  /**
   * Convert a CSS color value into a number
   */
  convertColorVal(t, n, r) {
    if (/%$/.test(n))
      return r === 3 ? parseFloat(n) / 100 : parseFloat(n) * 255 / 100;
    if (t[r] === "h") {
      if (/turn$/.test(n))
        return parseFloat(n) * 360;
      if (/rad$/.test(n))
        return parseFloat(n) * 57.3;
    }
    return parseFloat(n);
  }
  /**
   * Convert HSL to RGB
   */
  hslToRgb([t, n, r, a]) {
    n /= 255, r /= 255;
    const i = (1 - Math.abs(2 * r - 1)) * n, o = i * (1 - Math.abs(t / 60 % 2 - 1)), l = r - i / 2;
    let s;
    return t < 60 ? s = [i, o, 0] : t < 120 ? s = [o, i, 0] : t < 180 ? s = [0, i, o] : t < 240 ? s = [0, o, i] : t < 300 ? s = [o, 0, i] : s = [i, 0, o], s.map((u) => Math.round((u + l) * 255)).concat(a);
  }
};
function al(e, t, n) {
  return Math.min(Math.max(t, e), n);
}
const il = {
  normal(e, t) {
    return t;
  },
  multiply(e, t) {
    return t * e;
  },
  screen(e, t) {
    return e + t - e * t;
  },
  overlay(e, t) {
    return this["hard-light"](t, e);
  },
  darken(e, t) {
    return Math.min(e, t);
  },
  lighten(e, t) {
    return Math.max(e, t);
  },
  "color-dodge"(e, t) {
    return e === 0 ? 0 : t === 1 ? 1 : Math.min(1, e / (1 - t));
  },
  "color-burn"(e, t) {
    return e === 1 ? 1 : t === 0 ? 0 : 1 - Math.min(1, (1 - e) / t);
  },
  "hard-light"(e, t) {
    return t <= 0.5 ? this.multiply(e, 2 * t) : this.screen(e, 2 * t - 1);
  },
  "soft-light"(e, t) {
    if (t <= 0.5)
      return e - (1 - 2 * t) * e * (1 - e);
    {
      const n = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e);
      return e + (2 * t - 1) * (n - e);
    }
  },
  difference(e, t) {
    return Math.abs(e - t);
  },
  exclusion(e, t) {
    return e + t - 2 * e * t;
  }
};
function At(e, t, n, r, a) {
  return t * (1 - r) * e + // Note: Cs and Cb values need to be between 0 and 1 inclusive for the blend function
  // @see https://www.w3.org/TR/compositing-1/#simplealphacompositing
  t * r * il[a](n / 255, e / 255) * 255 + (1 - t) * r * n;
}
function ye(e, t, n = "normal") {
  const r = At(
    e.red,
    e.alpha,
    t.red,
    t.alpha,
    n
  ), a = At(
    e.green,
    e.alpha,
    t.green,
    t.alpha,
    n
  ), i = At(
    e.blue,
    e.alpha,
    t.blue,
    t.alpha,
    n
  ), o = al(e.alpha + t.alpha * (1 - e.alpha), 0, 1);
  if (o === 0)
    return new J(r, a, i, o);
  const l = Math.round(r / o), s = Math.round(a / o), u = Math.round(i / o);
  return new J(l, s, u, o);
}
function gr(e, t) {
  const n = e.alpha, r = (1 - n) * t.red + n * e.red, a = (1 - n) * t.green + n * e.green, i = (1 - n) * t.blue + n * e.blue, o = e.alpha + t.alpha * (1 - e.alpha);
  return new J(r, a, i, o);
}
function nn(e, t, n) {
  const r = y(e), a = r.getPropertyValue("text-shadow"), i = r.getPropertyValue("font-size"), o = parseInt(i);
  if (a === "none" || isNaN(o))
    return [];
  const l = [];
  return ol(a).forEach(({ colorStr: s, pixels: u }) => {
    s = s || r.getPropertyValue("color");
    const [c, g, w = 0] = u;
    if ((!t || w >= o * t) && (!n || w < o * n)) {
      const v = ll({
        colorStr: s,
        offsetY: c,
        offsetX: g,
        blurRadius: w,
        fontSize: o
      });
      l.push(v);
    }
  }), l;
}
function ol(e) {
  let t = { pixels: [] }, n = e.trim();
  const r = [t];
  if (!n)
    return [];
  for (; n; ) {
    const a = n.match(/^rgba?\([0-9,.\s]+\)/i) || n.match(/^[a-z]+/i) || n.match(/^#[0-9a-f]+/i), i = n.match(/^([0-9.-]+)px/i) || n.match(/^(0)/);
    if (a) {
      if (t.colorStr)
        return [];
      n = n.replace(a[0], "").trim(), t.colorStr = a[0];
    } else if (i) {
      if (!(t.pixels.length < 3))
        return [];
      n = n.replace(i[0], "").trim();
      const o = parseFloat(
        (i[1][0] === "." ? "0" : "") + i[1]
      );
      t.pixels.push(o);
    } else if (n[0] === ",") {
      if (!(t.pixels.length >= 2))
        return [];
      t = { pixels: [] }, r.push(t), n = n.substr(1).trim();
    } else
      return [];
  }
  return r;
}
function ll({
  colorStr: e,
  offsetX: t,
  offsetY: n,
  blurRadius: r,
  fontSize: a
}) {
  if (t > r || n > r)
    return new J(0, 0, 0, 0);
  const i = new J();
  return i.parseString(e), i.alpha *= sl(r, a), i;
}
function sl(e, t) {
  return e === 0 ? 1 : 0.185 / (e / t + 0.4);
}
let He = {};
const ee = {
  /**
   * Store incomplete data by key with a string value
   */
  set: function(e, t) {
    return t && (He[e] = t), He[e];
  },
  /**
   * Get incomplete data by key
   */
  get: function(e) {
    return He[e];
  },
  /**
   * Clear incomplete data on demand
   */
  clear: function() {
    He = {};
  }
};
function fr(e, t) {
  const n = ["img", "canvas", "object", "iframe", "video", "svg"], r = b(e);
  if (n.includes(r))
    return ee.set("bgColor", "imgNode"), !0;
  t = t || y(e);
  const a = t.getPropertyValue("background-image"), i = a !== "none";
  if (i) {
    const o = /gradient/.test(a);
    ee.set("bgColor", o ? "bgGradient" : "bgImage");
  }
  return i;
}
const Mn = /* @__PURE__ */ new WeakMap();
function wr(e, t = [], n = 0.1) {
  const r = Mn.get(e);
  if (r)
    return t.push(...r.bgElms), ee.set("bgColor", r.incompleteData), r.bgColor;
  const a = ul(e, t, n);
  return Mn.set(e, {
    bgColor: a,
    bgElms: t,
    incompleteData: ee.get("bgColor")
  }), a;
}
function ul(e, t, n) {
  const r = nn(e, n);
  let a = [];
  r.length && (a = [{ color: r.reduce(gr) }]);
  const i = dl(e), o = aa(e);
  if ((i || []).some((u) => {
    const c = y(u);
    if (fr(u, c))
      return a = null, t.push(u), !0;
    const g = Me(c);
    if (g.alpha === 0)
      return !1;
    if (c.getPropertyValue("display") !== "inline" && !br(u, o))
      return a = null, t.push(u), ee.set("bgColor", "elmPartiallyObscured"), !0;
    t.push(u);
    const w = c.getPropertyValue("mix-blend-mode");
    return a && a.unshift({
      color: g,
      blendMode: Bt(w)
    }), g.alpha === 1;
  }), a === null || i === null)
    return null;
  const l = cl(e, i.includes(document.body));
  if (a.unshift(...l), a.length === 0)
    return new J(255, 255, 255, 1);
  const s = a.reduce((u, c) => ({
    color: ye(c.color, u.color, c.blendMode)
  }));
  return ye(s.color, new J(255, 255, 255, 1));
}
function br(e, t) {
  t = Array.isArray(t) ? t : [t];
  const n = k(e);
  let { right: r, bottom: a } = n;
  const i = y(e).getPropertyValue("overflow");
  return (["scroll", "auto"].includes(i) || e instanceof window.HTMLHtmlElement) && (r = n.left + e.scrollWidth, a = n.top + e.scrollHeight), t.every((o) => o.top >= n.top && o.bottom <= a && o.left >= n.left && o.right <= r);
}
function Bt(e) {
  return e || void 0;
}
function cl(e, t) {
  const n = [];
  if (!t) {
    const r = document.documentElement, a = document.body, i = y(r), o = y(a), l = Me(i), s = Me(o), u = s.alpha !== 0 && br(a, k(e));
    (s.alpha !== 0 && l.alpha === 0 || u && s.alpha !== 1) && n.unshift({
      color: s,
      blendMode: Bt(
        o.getPropertyValue("mix-blend-mode")
      )
    }), l.alpha !== 0 && (!u || u && s.alpha !== 1) && n.unshift({
      color: l,
      blendMode: Bt(
        i.getPropertyValue("mix-blend-mode")
      )
    });
  }
  return n;
}
function dl(e) {
  const t = Ks(e).map((n) => (n = hl(n, e), n = ml(n), n));
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r[0] !== e)
      return ee.set("bgColor", "bgOverlap"), null;
    if (n !== 0 && !pl(r, t[0]))
      return ee.set("bgColor", "elmPartiallyObscuring"), null;
  }
  return t[0] || null;
}
function ml(e) {
  const t = e.indexOf(document.body), n = e, r = Me(
    y(document.documentElement)
  );
  if (t > 1 && r.alpha === 0 && !fr(document.documentElement)) {
    t > 1 && (n.splice(t, 1), n.push(document.body));
    const a = n.indexOf(document.documentElement);
    a > 0 && (n.splice(a, 1), n.push(document.documentElement));
  }
  return n;
}
function pl(e, t) {
  if (e === t)
    return !0;
  if (e === null || t === null || e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; ++n)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function hl(e, t) {
  const n = ["fixed", "sticky"];
  let r = [], a = !1;
  for (let i = 0; i < e.length; ++i) {
    const o = e[i];
    o === t && (a = !0);
    const l = y(o);
    if (!a && n.indexOf(l.position) !== -1) {
      r = [];
      continue;
    }
    r.push(o);
  }
  return r;
}
function Oe(e, t) {
  if (!t || !e)
    return null;
  t.alpha < 1 && (t = ye(t, e));
  const n = Number(e.getRelativeLuminance() || 0), r = Number(t.getRelativeLuminance() || 0);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function gl(e, t, n) {
  const r = y(e), a = Ar(e, r), i = wl(r, n);
  if (i && i.alpha * a === 1)
    return i.alpha = 1, i;
  const o = fl(r);
  let l = i ? ye(i, o) : o;
  if (l.alpha * a === 1 || (l = nn(e, 0).reduce((s, u) => ye(s, u), l), l.alpha * a === 1))
    return l.alpha = 1, l;
  if (t ?? (t = wr(e, [])), t === null) {
    const s = ee.get("bgColor");
    return ee.set("fgColor", s), null;
  }
  return l.alpha = l.alpha * a, ye(l, t);
}
function fl(e) {
  return new J().parseString(
    e.getPropertyValue("-webkit-text-fill-color") || e.getPropertyValue("color")
  );
}
function wl(e, t = 0) {
  const n = parseFloat(
    e.getPropertyValue("-webkit-text-stroke-width")
  );
  if (n === 0)
    return null;
  const r = e.getPropertyValue("font-size"), a = n / parseFloat(r);
  if (isNaN(a) || a < t)
    return null;
  const i = e.getPropertyValue("-webkit-text-stroke-color");
  return new J().parseString(i);
}
const Dt = /* @__PURE__ */ new WeakMap();
function Ar(e, t) {
  if (!e)
    return 1;
  if (Dt.has(e))
    return Dt.get(e);
  t ?? (t = y(e));
  const n = Number(t.getPropertyValue("opacity")) * Ar(e.parentElement);
  return Dt.set(e, n), n;
}
function Me(e) {
  const t = new J();
  if (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0) {
    const n = e.getPropertyValue("opacity");
    t.alpha = t.alpha * Number(n);
  }
  return t;
}
function bl(e = document) {
  return [e, ...Qr(e)].reduce((t, n) => {
    if (typeof n.styleSheets < "u") {
      let r = t.findIndex((a) => a.root === n);
      r < 0 && (r = t.length);
      for (const a of n.styleSheets)
        if (typeof a.cssRules < "u") {
          t[r] || (t[r] = {
            root: n,
            cssRules: []
          });
          for (const i of a.cssRules)
            t[r].cssRules.push(i);
        }
    }
    return t;
  }, []);
}
function y(e, t) {
  const n = tt.get("computed-styles-cache", () => /* @__PURE__ */ new Map()), r = t || "main";
  if (n.has(e)) {
    const i = n.get(e);
    if (i[r])
      return i[r];
  }
  const a = window.getComputedStyle(e, t);
  return n.set(e, {
    [r]: a
  }), a;
}
const Al = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
function Dl(e) {
  let t = Al;
  for (; e.length < 3; )
    e += "`";
  e = e.toLowerCase();
  for (let n = 0; n <= e.length - 1; n++) {
    const r = e.charCodeAt(n) - 96;
    if (t = t[r], !t)
      return !1;
  }
  return !0;
}
function yl(e, t) {
  const n = Math.min(e.top, t.top), r = Math.max(e.right, t.right), a = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left);
  return new window.DOMRect(i, n, r - i, a - n);
}
function zt(e) {
  return Math.round(e * (180 / Math.PI));
}
function vl(e) {
  return e = e % 400, e < 0 && (e += 400), Math.round(e / 400 * 360);
}
function Cl(e) {
  return Math.round(360 / (1 / e));
}
function Ln(e) {
  const [t] = e.match(/(deg|grad|rad|turn)/) || [];
  if (!t)
    return null;
  const n = parseFloat(e.replace(t, ""));
  switch (t) {
    case "rad":
      return zt(n);
    case "grad":
      return vl(n);
    case "turn":
      return Cl(n);
    case "deg":
    default:
      return Math.trunc(n);
  }
}
function Tl(e) {
  const t = e.split(",");
  if (t.length <= 6) {
    const [o, l] = t, s = Math.atan2(parseFloat(l), parseFloat(o));
    return zt(s);
  }
  const n = parseFloat(t[8]), r = Math.asin(n), a = Math.cos(r), i = Math.acos(parseFloat(t[0]) / a);
  return zt(i);
}
function Dr(e, t) {
  const n = Math.max(e.left, t.left), r = Math.min(e.right, t.right), a = Math.max(e.top, t.top), i = Math.min(e.bottom, t.bottom);
  return n >= r || a >= i ? null : new window.DOMRect(n, a, r - n, i - a);
}
function yr({
  left: e,
  top: t,
  width: n,
  height: r
}) {
  return new window.DOMPoint(e + n / 2, t + r / 2);
}
function El(e, t) {
  const n = k(e), r = k(t), a = Rl(n, r), i = Il(a, n, r);
  return xl(a, i);
}
function Rl(e, t) {
  const n = [
    ["x", "left", "right", "width"],
    ["y", "top", "bottom", "height"]
  ], r = { x: 0, y: 0 };
  return n.forEach((a) => {
    const i = a[0], o = a[1], l = a[2], s = a[3];
    if (t[o] < e[o] && t[l] > e[l]) {
      r[i] = e[o] + e[s] / 2;
      return;
    }
    const u = t[o] + t[s] / 2, c = Math.abs(u - e[o]), g = Math.abs(u - e[l]);
    c >= g ? r[i] = e[o] : r[i] = e[l];
  }), r;
}
function Il({ x: e, y: t }, n, r) {
  if (Fl({ x: e, y: t }, r)) {
    const w = kl(
      { x: e, y: t },
      n,
      r
    );
    if (w !== null)
      return w;
    r = n;
  }
  const { top: a, right: i, bottom: o, left: l } = r, s = e >= l && e <= i, u = t >= a && t <= o, c = Math.abs(l - e) < Math.abs(i - e) ? l : i, g = Math.abs(a - t) < Math.abs(o - t) ? a : o;
  return !s && u ? { x: c, y: t } : s && !u ? { x: e, y: g } : !s && !u ? { x: c, y: g } : Math.abs(e - c) < Math.abs(t - g) ? { x: c, y: t } : { x: e, y: g };
}
function xl(e, t) {
  const n = Math.abs(e.x - t.x), r = Math.abs(e.y - t.y);
  return !n || !r ? n || r : Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
}
function Fl({ x: e, y: t }, n) {
  return t >= n.top && e <= n.right && t <= n.bottom && e >= n.left;
}
function kl({ x: e, y: t }, n, r) {
  let a = 0, i;
  if (e === n.left && n.right < r.right ? a = n.right : e === n.right && n.left > r.left && (a = n.left), t === n.top && n.bottom < r.bottom ? i = n.bottom : t === n.bottom && n.top > r.top && (i = n.top), !a && !i)
    return null;
  if (i) {
    if (!a)
      return { x: e, y: i };
  } else
    return { x: a, y: t };
  return Math.abs(e - a) < Math.abs(t - i) ? { x: a, y: t } : { x: e, y: i };
}
function vr({ x: e, y: t }, {
  top: n,
  right: r,
  bottom: a,
  left: i
}) {
  return t >= n && e <= r && t <= a && e >= i;
}
function Wl(e, t) {
  let n = [e];
  for (const r of t)
    n = n.reduce((a, i) => a.concat(Nl(i, r)), []);
  return n;
}
function Nl(e, t) {
  const { top: n, left: r, bottom: a, right: i } = e, o = n < t.bottom && a > t.top, l = r < t.right && i > t.left, s = [];
  return je(t.top, n, a) && l && s.push({ top: n, left: r, bottom: t.top, right: i }), je(t.right, r, i) && o && s.push({ top: n, left: t.right, bottom: a, right: i }), je(t.bottom, n, a) && l && s.push({ top: t.bottom, right: i, bottom: a, left: r }), je(t.left, r, i) && o && s.push({ top: n, left: r, bottom: a, right: t.left }), s.length === 0 && s.push(e), s.map(Ml);
}
const je = (e, t, n) => e > t && e < n;
function Ml(e) {
  return {
    ...e,
    x: e.left,
    y: e.top,
    height: e.bottom - e.top,
    width: e.right - e.left
  };
}
function de(e) {
  if (typeof CSS < "u" && CSS != null && CSS.escape)
    return CSS.escape(e);
  const t = String(e), n = t.charCodeAt(0);
  let r = -1, a, i = "";
  for (; ++r < t.length; ) {
    if (a = t.charCodeAt(r), a == 0) {
      i += "�";
      continue;
    }
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, [...]
      a >= 1 && a <= 31 || a == 127 || // If the character is the first character and is in the range [0-9]
      // (U+0030 to U+0039), [...]
      r == 0 && a >= 48 && a <= 57 || // If the character is the second character and is in the range [0-9]
      // (U+0030 to U+0039) and the first character is a `-` (U+002D), [...]
      r == 1 && a >= 48 && a <= 57 && n == 45
    ) {
      i += "\\" + a.toString(16) + " ";
      continue;
    }
    if (r == 0 && t.length == 1 && a == 45) {
      i += "\\" + t.charAt(r);
      continue;
    }
    if (a >= 128 || a == 45 || a == 95 || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122) {
      i += t.charAt(r);
      continue;
    }
    i += "\\" + t.charAt(r);
  }
  return i;
}
function Ll(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gl = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
const Cr = /* @__PURE__ */ Ll(Gl);
function Tr(e, {
  any: t = !1,
  emoji: n = !0,
  nonBmp: r = !0,
  punctuations: a = !0
} = {}) {
  return t && ya().test(e) || n && Cr().test(e) || r && (va().test(e) || Ta().test(e)) ? !0 : !!(a && Ca().test(e));
}
function Se(e, {
  any: t = !1,
  emoji: n = !0,
  nonBmp: r = !0,
  punctuations: a = !0
} = {}) {
  return t ? e.replace(ya(), "") : (n && (e = e.replace(Cr(), "")), r && (e = e.replace(va(), ""), e = e.replace(Ta(), "")), a && (e = e.replace(Ca(), "")), e);
}
function x(e) {
  return e ? e.replace(/\r\n/g, `
`).replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
}
const ql = [
  "x",
  // close
  "i"
  // info
];
function Sl(e) {
  return !e || (e = e.trim(), !(e != null && e.length)) ? !1 : !!(ql.includes(e.toLowerCase()) || !x(Se(e)));
}
function Pl(e, t) {
  return e.length === 1 && Er(e, t);
}
function Er(e, t) {
  return Tr(e, t) && x(Se(e, t)) === "";
}
function he(e) {
  return (e || "").trim().split(/\s+/);
}
function Bl(e) {
  if (!e)
    return !1;
  try {
    const t = e.replaceAll(/:host\((?<selector>.+?)\)/g, "$<selector>").replaceAll(">>>", ">");
    return document.querySelector(t), !0;
  } catch {
    return !1;
  }
}
function rn(e, t) {
  return he(e.getAttribute(t));
}
function R(e, t) {
  var n;
  return ((n = e.getAttribute(t)) == null ? void 0 : n.trim()) || "";
}
function F(e, t) {
  var n;
  return ((n = e.getAttribute(t)) == null ? void 0 : n.trim().toLowerCase()) || "";
}
function b(e) {
  return e.nodeName.toLowerCase();
}
function _(e, t) {
  return e.getAttribute(t) || "";
}
function W(e, {
  altAttrNames: t,
  checkAriaLabel: n = !0,
  checkAriaLabelledBy: r = !0,
  checkTextContent: a,
  checkPresentationRole: i,
  furtherChecker: o
} = {}) {
  return !!n && !!Rr(e) || !!r && !!an(e) || !!i && zr(e) || !!t && t.some((l) => xr(e, l)) || !!a && at(e) || !!o && o(e);
}
function Rr(e) {
  return !!x(ha(e));
}
function an(e) {
  return !!x(ga(e));
}
function Ye(e) {
  return Rr(e) || an(e);
}
function ce(e) {
  if (e.hasAttribute("role") && Aa(e, ["contents", "author"]))
    return !0;
  const t = te(e);
  return !!(t != null && t.namingMethods && t.namingMethods.length > 0 || E(e) === "combobox" && p(e, 'input:not([type="hidden"])').length);
}
function Pe(e) {
  const t = E(e), n = t ? q(t) : null;
  return !t || z(t) || (n == null ? void 0 : n.accessibleNameRequired) || M(e);
}
function nt(e) {
  const t = Ie(e, "for");
  return t != null && t.every((n) => !I(n)) ? G(e).trim() === "" : !1;
}
function rt(e) {
  const t = ge(e);
  if (!t)
    return !1;
  let n = ct(e);
  return !n && e.getAttribute("aria-describedby") && (n = le(e, "aria-describedby").map((r) => r ? G(r) : "").join()), x(t).toLowerCase() === x(n).toLowerCase();
}
function Ir(e) {
  const t = e.getAttribute("type");
  return !(b(e) === "input" && t && ["hidden", "image", "button", "submit", "reset"].includes(t));
}
function zl(e, t) {
  const n = G(e);
  return n ? (Array.isArray(t) || (t = [t]), t.some((r) => n.indexOf(r) !== -1)) : !1;
}
function on(e) {
  return e.indexOf("aria-") === 0;
}
function _l(e, t) {
  return e.hasAttribute(t) && !e.getAttribute(t);
}
function xr(e, t) {
  return !e || !t || !e.hasAttribute(t) ? !1 : !!x(e.getAttribute(t));
}
const Hl = ["lang", "xml:lang"];
function Fr(e) {
  return Hl.some((t) => {
    const n = R(e, t);
    if (n !== "" && !x(n))
      return !1;
    if (t === "lang" && e.hasAttribute("xml:lang") && n === "")
      return !0;
    const r = Pt(n);
    return Dl(r);
  });
}
function Ol(e, t) {
  return T1(e, t) !== !1;
}
const We = {
  stateTerms: [
    "on",
    "off",
    "none",
    "false",
    "true",
    "disabled",
    "enabled",
    "undefined",
    "null"
  ],
  standaloneTerms: [
    "name",
    "honorific-prefix",
    "given-name",
    "additional-name",
    "family-name",
    "honorific-suffix",
    "nickname",
    "username",
    "new-password",
    "current-password",
    "one-time-code",
    "organization-title",
    "organization",
    "street-address",
    "address-line1",
    "address-line2",
    "address-line3",
    "address-level4",
    "address-level3",
    "address-level2",
    "address-level1",
    "country",
    "country-name",
    "postal-code",
    "cc-name",
    "cc-given-name",
    "cc-additional-name",
    "cc-family-name",
    "cc-number",
    "cc-exp",
    "cc-exp-month",
    "cc-exp-year",
    "cc-csc",
    "cc-type",
    "transaction-currency",
    "transaction-amount",
    "language",
    "bday",
    "bday-day",
    "bday-month",
    "bday-year",
    "sex",
    "url",
    "photo"
  ],
  qualifiers: ["home", "work", "mobile", "fax", "pager"],
  qualifiedTerms: [
    "tel",
    "tel-country-code",
    "tel-national",
    "tel-area-code",
    "tel-local",
    "tel-local-prefix",
    "tel-local-suffix",
    "tel-extension",
    "email",
    "impp"
  ],
  locations: ["billing", "shipping"]
};
function jl(e, t, n = {}) {
  if (t || (t = F(e, "autocomplete")), t === "" || We.stateTerms.includes(t))
    return !0;
  const r = t.split(/\s+/g);
  if (r[r.length - 1] === "webauthn" && (!["input", "textarea"].includes(b(e)) || (r.pop(), r.length === 0)))
    return !1;
  let a = !0;
  if (!n.looseTyped && (r[0].length > 8 && r[0].substring(0, 8) === "section-" && r.shift(), We.locations.includes(r[0]) && r.shift(), We.qualifiers.includes(r[0]) && (r.shift(), a = !1), r.length !== 1))
    return !1;
  const i = r[r.length - 1];
  return a && We.standaloneTerms.includes(i) || We.qualifiedTerms.includes(i);
}
function kr(e) {
  const t = oe(e, { composed: !0 });
  if (!(t instanceof Document))
    return !1;
  const n = t.doctype;
  return n === null ? !1 : n.name.toLowerCase() === "html" && !n.publicId && !n.systemId;
}
const Ne = {
  xml: ["text/xml"],
  xhtml: ["application/xhtml+xml", "application/xml"],
  svg: ["image/svg+xml"],
  math: [
    "application/mathml+xml",
    "application/mathml-presentation+xml",
    "application/mathml-content+xml"
  ]
};
function Ul(e) {
  return e === "xml" ? [
    ...Ne.xml,
    ...Ne.xhtml,
    ...Ne.svg,
    ...Ne.math
  ] : [...Ne[e]];
}
function ln(e, t) {
  var n;
  const r = oe(e, { composed: !0 });
  if (r instanceof Document) {
    const a = (n = r.contentType) == null ? void 0 : n.trim().toLowerCase();
    if (a && Ul(t).includes(a))
      return !0;
    if (r.createElement)
      return r.createElement("A").localName === "A";
  }
  return !1;
}
function Wr(e) {
  return S(e, "math", { includeGivenElement: !0 }) ? !0 : ln(e, "math");
}
function Re(e) {
  return S(e, "svg", { includeGivenElement: !0 }) ? !0 : ln(e, "svg");
}
function Vl(e) {
  return ln(e, "xhtml");
}
function ie(e, t = { allowEmpty: !0 }) {
  return t.allowEmpty ? e.nodeType === Node.TEXT_NODE : e.nodeType === Node.TEXT_NODE && x(e.nodeValue) !== "";
}
function A(e) {
  var t, n;
  return e instanceof (((n = (t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) == null ? void 0 : n.Element) || Element);
}
function $l(e) {
  var t, n;
  return e instanceof (((n = (t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) == null ? void 0 : n.HTMLIFrameElement) || HTMLIFrameElement);
}
function ae(e) {
  var t, n;
  return e instanceof (((n = (t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) == null ? void 0 : n.ShadowRoot) || ShadowRoot);
}
function Yl(e) {
  const t = E(e);
  return t ? E1(t) : k1(e) ? b(e) !== "input" || F(e, "type") !== "hidden" : !1;
}
function ve(e, t = {}) {
  const n = U(e);
  return n.some((r) => ie(r, { allowEmpty: !1 })) || Yl(e) || !t.skipAriaLabel && W(e) || !t.skipRecursion && n.some((r) => A(r) && ve(r));
}
function Ae(e) {
  if (!R(e, "list"))
    return !1;
  const t = le(e, "list");
  return t[0] ? b(t[0]) === "datalist" : !1;
}
function _t(e, t) {
  return !e.parentNode || e.parentNode.children.length === 1 ? !1 : Array.from(e.parentNode.children).some(
    (n) => n !== e && n.matches(t)
  );
}
function at(e) {
  return x(fe(e)) !== "";
}
function De(e) {
  let t = !1;
  return Da(e) && e.hasAttribute("disabled") || F(e, "aria-disabled") === "true" ? t = !0 : e.parentElement && (t = De(e.parentElement)), t;
}
const Ql = ["input", "select", "textarea", "progress", "meter"];
function Zl(e) {
  return Ql.includes(b(e));
}
function sn(e) {
  if (e.nodeType === Node.DOCUMENT_NODE || ["style", "script", "noscript", "template"].includes(b(e)))
    return !1;
  ae(e) && (e = e.host);
  const t = y(e);
  if (!t)
    return !1;
  if (t.getPropertyValue("display") === "none" || ["hidden", "collapse"].includes(t.getPropertyValue("visibility")))
    return !0;
  const n = P(e);
  return n ? sn(n) : !1;
}
const Kl = (e, t) => {
  let n = P(e);
  for (; n && b(n) !== "html"; ) {
    if (A(n) && n.scrollTop && (t += n.scrollTop, t >= 0))
      return !1;
    n = P(n);
  }
  return !0;
};
function Nr(e, t) {
  const n = Ur(e);
  if (n.bottom < 0 && (Kl(e, n.bottom) || t.position === "absolute"))
    return !0;
  if (n.left === 0 && n.right === 0)
    return !1;
  if (window.getComputedStyle(document.body || document.documentElement).getPropertyValue("direction") === "ltr") {
    if (n.right <= 0)
      return !0;
  } else {
    const r = Math.max(
      document.documentElement.scrollWidth,
      Vr().width
    );
    if (n.left >= r)
      return !0;
  }
  return !1;
}
function Xl(e) {
  return ["style", "script", "noscript", "template"].includes(b(e));
}
function Jl(e) {
  return b(e) === "area" ? !1 : y(e).getPropertyValue("display") === "none";
}
function es(e) {
  const t = y(e);
  return ["hidden", "collapse"].includes(t.getPropertyValue("visibility"));
}
function ts(e) {
  return F(e, "aria-hidden") === "true";
}
function ns(e) {
  return e.getPropertyValue("opacity") === "0";
}
function rs(e, t) {
  const n = Le(e), r = parseInt(t.getPropertyValue("width")), a = parseInt(t.getPropertyValue("height"));
  return n !== null && (a === 0 || r === 0);
}
function as(e) {
  const t = parseInt(e.getPropertyValue("width"));
  return (parseInt(e.getPropertyValue("height")) < 2 || t < 2) && e.getPropertyValue("position") === "absolute" && e.getPropertyValue("overflow") === "hidden";
}
function is(e) {
  if (["fixed", "absolute"].includes(e.getPropertyValue("position"))) {
    const r = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, a = e.getPropertyValue("clip").match(r);
    if (a && a.length === 5) {
      const i = a.map((o) => parseInt(o));
      return i[3] - i[1] <= 0 && i[2] - i[4] <= 0;
    }
  }
  const t = /(\w+)\((\d+)/, n = e.getPropertyValue("clip-path").match(t);
  if (n) {
    const r = n[1], a = parseInt(n[2], 10);
    switch (r) {
      case "inset":
        return a >= 50;
      case "circle":
        return a === 0;
    }
  }
  return !1;
}
function Mr(e, t) {
  const n = e.closest("map");
  if (!n)
    return !0;
  const r = n.getAttribute("name");
  if (!r)
    return !0;
  const a = oe(n);
  if (!a || a.nodeType !== Node.DOCUMENT_NODE)
    return !0;
  const i = document.querySelectorAll('img[usemap="#' + r + '"]');
  return !i || !i.length ? !0 : Array.from(i).some((o) => t(o));
}
function B(e, t = !1) {
  if (e instanceof HTMLAreaElement && b(e) === "area")
    return !Mr(e, B);
  if (!it(e, { skipAncestors: !0, isAncestor: t }))
    return !1;
  if (A(e)) {
    const n = y(e);
    if (ns(n) || rs(e, n) || as(n) || is(n) || Nr(e, n))
      return !1;
  }
  return e.parentNode ? B(e.parentNode, !0) : !0;
}
function I(e, t = !1) {
  return ot(e, { skipAncestors: !0, isAncestor: t }) || A(e) && ts(e) ? !1 : e instanceof HTMLAreaElement && b(e) === "area" ? !Mr(e, I) : it(e, { skipAncestors: !0, isAncestor: t }) ? !e.parentNode || M(e) ? !0 : B(e.parentNode, !0) : !1;
}
function it(e, { isAncestor: t = !1, skipAncestors: n } = {}) {
  let r = e;
  for (; r; ) {
    if (A(e) && (Xl(e) || Jl(e) || es(e)))
      return !1;
    n ? r = null : (t = !0, r = r.parentNode);
  }
  return !0;
}
function os(e, t) {
  const n = k(e), r = k(t);
  return n.left >= r.right || n.right <= r.left || n.top >= r.bottom || n.bottom <= r.top ? !1 : Zr(e, t) > 0;
}
function ls(e, t) {
  if (t === void 0 && (t = F(e, "autocomplete")), !t)
    return !1;
  const n = b(e);
  if (!["textarea", "input", "select"].includes(n) || n === "input" && ["submit", "reset", "button", "hidden"].includes(F(e, "type")) || De(e))
    return !1;
  const r = E(e), a = j(e, "tabindex");
  if (r && a === -1) {
    const i = q(r);
    if ((i == null ? void 0 : i.type) !== "widget")
      return !1;
  }
  return !(a === -1 && !B(e) && !I(e));
}
function un(e) {
  const t = F(e, "contenteditable");
  if (t === "true" || t === "")
    return !0;
  if (t === "false")
    return !1;
  const n = S(e, "[contenteditable]");
  return n ? un(n) : !1;
}
function Lr(e) {
  return !A(e) || e.namespaceURI === "http://www.w3.org/2000/svg" ? !1 : x1(e);
}
const yt = {};
let vt;
function ss() {
  return vt || (vt = document.createElement("canvas").getContext("2d", { willReadFrequently: !0 })), vt;
}
function cn(e, t = 0.15, n = 3) {
  var r, a;
  const i = ss();
  if (!i)
    return !1;
  const o = A(e) ? e : null, l = o || e.parentElement;
  if (!l)
    return !1;
  const s = window.getComputedStyle(l).getPropertyValue("font-family");
  yt[s] || (yt[s] = {
    occurrences: 0,
    occurrencesAsIconLigature: 0
  });
  const u = yt[s];
  if (u.occurrences >= n) {
    if (u.occurrencesAsIconLigature / u.occurrences === 1)
      return !0;
    if (u.occurrencesAsIconLigature === 0)
      return !1;
  }
  u.occurrences++;
  let c = ((r = o ? o.textContent : e.nodeValue) == null ? void 0 : r.trim()) || "";
  if (o && !c) {
    const $ = ["::before", "::after"];
    for (const be of $) {
      const Fe = y(o, be), _e = (a = Fe == null ? void 0 : Fe.content) == null ? void 0 : a.trim().replace(/^['"`]|['"`]$/g, "");
      if (_e && _e !== "none") {
        if (Pl(_e))
          return u.occurrencesAsIconLigature++, !0;
        c = _e;
        break;
      }
    }
  }
  if (!c || !x(c) || Tr(c, { punctuations: !1 }))
    return !1;
  let g = 30, w = `${g}px ${s}`;
  const v = i.canvas;
  i.font = w;
  const N = c.charAt(0);
  let D = i.measureText(N).width || 1;
  if (D < 30) {
    const $ = 30 / D;
    D *= $, g *= $, w = `${g}px ${s}`;
  }
  v.width = D, v.height = g, i.font = w, i.textAlign = "left", i.textBaseline = "top", i.fillText(N, 0, 0);
  const T = new Uint32Array(
    i.getImageData(0, 0, D, g).data.buffer
  );
  if (!T.some(($) => $))
    return u.occurrencesAsIconLigature++, !0;
  i.clearRect(0, 0, D, g), i.fillText(c, 0, 0);
  const O = new Uint32Array(
    i.getImageData(0, 0, D, g).data.buffer
  ), se = T.reduce(($, be, Fe) => be === 0 && O[Fe] === 0 || be !== 0 && O[Fe] !== 0 ? $ : ++$, 0), gt = c.split("").reduce(($, be) => $ + i.measureText(be).width, 0), ft = i.measureText(c).width, wt = se / T.length, bt = 1 - ft / gt;
  return wt >= t && bt >= t ? (u.occurrencesAsIconLigature++, !0) : !1;
}
function us(e) {
  return cn(e) || A(e) && cs(e);
}
function cs(e) {
  for (const t of e.childNodes)
    if (!A(t) || b(t) !== "svg")
      return !1;
  return !0;
}
let Ct;
function Ce(e) {
  return _(e, "id") ? (Ct || (Ct = Object.keys(
    tl(["idref", "idref-list"])
  )), Ct.some(
    (t) => {
      var n;
      return (n = Ie(e, t)) == null ? void 0 : n.length;
    }
  )) : !1;
}
const ds = [
  "block",
  "list-item",
  "table",
  "flex",
  "grid",
  "inline-block"
], Gr = (e) => {
  const t = y(e).getPropertyValue("display");
  return ds.includes(t) || t.startsWith("table-");
}, ms = (e) => {
  let t = P(e);
  for (; t && A(t) && !Gr(t); )
    t = P(t);
  return t;
};
function qr(e, { noLengthCompare: t } = {}) {
  if (Gr(e))
    return !1;
  const n = ms(e);
  let r = "", a = "", i = 0;
  return n && Sr(n, (o) => {
    if (i === 2)
      return !1;
    if (o.nodeType === 3 && (r += o.nodeValue), !A(o))
      return;
    const l = b(e);
    if (o === e && (i = 1), ["br", "hr"].includes(l))
      i === 0 ? (r = "", a = "") : i = 2;
    else {
      if (o.style.display === "none" || o.style.overflow === "hidden" || !["", null, "none"].includes(o.style.float) || !["", null, "relative"].includes(o.style.position))
        return !1;
      if (V(o) === "widget")
        return a += o.textContent, !1;
    }
  }), r = x(r), t ? r.length !== 0 : (a = x(a), r.length > a.length);
}
function Sr(e, t) {
  t(e) !== !1 && U(e).forEach((n) => Sr(n, t));
}
function ps(e) {
  var t;
  if (!((t = e == null ? void 0 : e.ownerDocument) != null && t.createRange))
    return !0;
  const n = e.ownerDocument.createRange();
  return n.getClientRects ? (n.setStart(e, 0), n.setEnd(e, e.childNodes.length), n.getClientRects().length === 0) : !0;
}
function M(e) {
  if (A(e)) {
    if (hs(e))
      return !1;
    if (Pr(e))
      return !0;
  } else
    return !1;
  return j(e, "tabindex") !== null;
}
function hs(e) {
  var t;
  if (ot(e) || Da(e) && e.hasAttribute("disabled"))
    return !0;
  const n = e.closest("fieldset");
  return !!(n && n.hasAttribute("disabled") && ((t = e.closest("legend")) == null ? void 0 : t.closest("fieldset")) !== n || b(e) !== "area" && sn(e));
}
function ot(e, { skipAncestors: t, isAncestor: n } = {}) {
  if (A(e) && e.hasAttribute("inert"))
    return !0;
  if (!n) {
    const r = t1();
    if (r && !r.contains(e))
      return !0;
  }
  if (!t) {
    const r = P(e);
    if (r)
      return ot(r, { skipAncestors: t, isAncestor: !0 });
  }
  return !1;
}
function Pr(e) {
  var t;
  return !!((t = te(e)) != null && t.focusable);
}
function K(e) {
  return !A(e) || parseInt(F(e, "tabindex"), 10) <= -1 ? !1 : M(e);
}
function Br(e) {
  return p(e, "track").some((t) => (t.getAttribute("kind") || "").toLowerCase() === "captions");
}
function dn(e) {
  return !!Q(e, "controls");
}
function z(e, t = !1) {
  return t && (e = e.trim().toLowerCase()), e === "presentation" || e === "none";
}
function zr(e) {
  if (["iframe", "frame"].includes(b(e)) && (xr(e, "title") || an(e))) {
    const n = E(e);
    if (n && z(n))
      return !1;
  }
  const t = C(e);
  return !!t && z(t);
}
function _r(e) {
  return e.indexOf("doc-") === 0;
}
function Be(e, t = {}) {
  const n = q(e);
  return !(!n || !t.allowAbstract && n.type === "abstract");
}
const gs = (e, t, n) => {
  if (t === (n || dt(e)))
    return !1;
  const r = te(e);
  if (r && r.allowedRoles)
    return r.allowedRoles.includes(t);
}, fs = ["input", "select", "textarea"], ws = ["hidden", "range", "color", "checkbox", "radio", "image"];
function Hr(e) {
  const t = b(e);
  if (t === "option" || t === "select" && !e.options.length || t === "input" && ws.includes(F(e, "type")) || De(e) || ot(e))
    return !1;
  if (fs.includes(t)) {
    const s = y(e), u = parseInt(s.getPropertyValue("text-indent"), 10);
    if (u) {
      const c = k(e);
      if (!Pn(
        {
          top: c.top,
          bottom: c.bottom,
          left: c.left + u,
          right: c.right + u
        },
        e
      ))
        return !1;
    }
    return !0;
  }
  const n = S(e, "label");
  if (t === "label" || n) {
    const s = n || e, u = s.htmlFor;
    if (u) {
      const c = oe(s).getElementById(u);
      if (c && De(c))
        return !1;
    }
    return !p(e, 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea').some((c) => De(c));
  }
  const r = [];
  let a = e;
  for (; a; )
    a.id && r.push(
      ...Ie(a, "aria-labelledby") || []
    ), a = a.parentElement;
  if (r.length > 0 && r.every(De))
    return !1;
  const i = me(e);
  if (!i || !Se(i, { nonBmp: !1 }))
    return !1;
  const o = document.createRange();
  U(e).forEach((s) => {
    ie(s, { allowEmpty: !1 }) && o.selectNodeContents(s);
  });
  const l = o.getClientRects();
  for (let s = 0; s < l.length; s++)
    if (Pn(l[s], e))
      return !0;
  return !1;
}
function mn(e, t) {
  if (!B(e))
    return !1;
  const n = me(e, { noRecursion: !0 });
  if (Er(n, { nonBmp: !0 }))
    return !1;
  const r = y(e), a = parseFloat(r.getPropertyValue("font-size")), i = r.getPropertyValue("font-weight"), o = parseFloat(i) >= 700 || i === "bold", l = Math.ceil(a * 72) / 96, s = o && l < 14 || !o && l < 18, { expected: u, minThreshold: c, maxThreshold: g } = s ? t.contrastRatioNormal : t.contrastRatioLarge;
  if ($s(e, 0.25))
    return !1;
  const w = wr(e, [], 0.2), v = gl(e, w, 0.3), N = nn(e, 1e-3, 0.2);
  let D = null, T = null;
  if (N.length === 0)
    D = Oe(w, v);
  else if (v && w) {
    T = [...N, w].reduce(gr);
    const ft = Number(Oe(w, v)), wt = Number(Oe(w, T)), bt = Number(Oe(T, v));
    D = Math.max(ft, wt, bt);
  }
  const O = typeof D == "number" && D < u;
  if (typeof c == "number" && (typeof D != "number" || D < c) || typeof g == "number" && (typeof D != "number" || D > g))
    return !0;
  const se = Math.floor(Number(D) * 100) / 100 === 1, gt = n.length === 1;
  return v === null || w === null || se || gt && O ? (ee.clear(), !1) : O;
}
function Tt(e, t) {
  const {
    cssProperty: n,
    minValue: r,
    maxValue: a,
    normalValue: i = 0,
    noImportant: o,
    multiLineOnly: l
  } = t;
  if (!o && e.style.getPropertyPriority(n) !== "important" || l && !Xs(e))
    return !0;
  const s = e.style.getPropertyValue(n);
  if (["inherit", "unset", "revert", "revert-layer"].includes(s))
    return !0;
  const u = bs(e, n, i);
  if (typeof u == "number")
    return (typeof r != "number" || u >= r) && (typeof a != "number" || u <= a);
}
function bs(e, t, n) {
  const r = y(e), a = r.getPropertyValue(t);
  if (a === "normal")
    return n;
  const i = parseFloat(a), o = parseFloat(r.getPropertyValue("font-size")), l = Math.round(i / o * 100) / 100;
  return isNaN(l) ? a : l;
}
const As = 0.05;
function Ds(e, { minOffset: t = 24 } = {}) {
  const n = [];
  for (const r of oa(e, t))
    V(r) !== "widget" || !M(r) || Math.round(El(e, r) * 10) / 10 + As >= t || n.push(r);
  if (n.length === 0)
    return !0;
  if (n.some(K))
    return K(e) ? !1 : void 0;
}
const Gn = 0.05;
function ys(e, { minSize: t = 24 } = {}) {
  const n = k(e), r = Ht.bind(null, t), a = oa(e), i = vs(e, a), { fullyObscuringElms: o, partialObscuringElms: l } = Cs(
    e,
    a
  );
  if (o.length && !i.length)
    return !0;
  const s = K(e) ? !1 : void 0;
  if (!r(n) && !i.length)
    return s;
  const u = Rs(l), c = Ts(
    e,
    u,
    t
  );
  if (!(i.length && (o.length || !r(c || n))))
    return u.length !== 0 && c && !r(c) ? u.every(K) ? s : void 0 : !0;
}
function vs(e, t) {
  return t.filter(
    (n) => !Or(n, e) && jr(e, n)
  );
}
function Cs(e, t) {
  const n = [], r = [];
  for (const a of t)
    !jr(e, a) && os(e, a) && Is(a) !== "none" && (Or(e, a) ? n.push(a) : r.push(a));
  return { fullyObscuringElms: n, partialObscuringElms: r };
}
function Ts(e, t, n) {
  const r = k(e);
  if (t.length === 0)
    return null;
  const a = t.map((o) => k(o)), i = Wl(r, a);
  return Es(i, n);
}
function Es(e, t) {
  return e.reduce((n, r) => {
    const a = Ht(t, n), i = Ht(t, r);
    if (a !== i)
      return a ? n : r;
    const o = n.width * n.height, l = r.width * r.height;
    return o > l ? n : r;
  });
}
function Rs(e) {
  return e.filter(
    (t) => V(t) === "widget" && M(t)
  );
}
function Or(e, t) {
  const n = k(e), r = k(t);
  return n.top >= r.top && n.left >= r.left && n.bottom <= r.bottom && n.right <= r.right;
}
function Is(e) {
  return y(e).getPropertyValue("pointer-events");
}
function jr(e, t) {
  return e.contains(t) && !K(t);
}
function Ht(e, { width: t, height: n }) {
  return t + Gn >= e && n + Gn >= e;
}
function qn(e) {
  const t = S(e, "table"), n = t ? E(t) : null;
  return !!t && !!n && ["grid", "treegrid"].includes(n);
}
function xs(e, t) {
  if (!t && (t = Dn(e), !t))
    return;
  const n = Te(e);
  if (!n || !["col", "row"].includes(n))
    return;
  const r = n === "col", a = yn(e, t);
  if (!a)
    return;
  const i = r ? { x: 0, y: 1 } : { x: 1, y: 0 };
  let o, l = !1;
  do {
    if (a.x += i.x, a.y += i.y, o = t[a.y] ? t[a.y][a.x] : null, !o)
      continue;
    const s = ma(o, t);
    s === void 0 && (l = !0);
    const u = Te(o);
    if ((!u || r && u === "row" || !r && u === "col") && s != null && s.includes(e))
      return !0;
  } while (o);
  return l ? void 0 : !1;
}
function Et(e) {
  const t = S(e, "table"), n = t ? E(t) : null;
  return !!t && (!n || n === "table");
}
function Ot(e) {
  var t;
  if (!e || !e.children.length && !((t = e.textContent) != null && t.trim()))
    return !1;
  const n = F(e, "role");
  return Be(n) ? ["cell", "gridcell"].includes(n) : b(e) === "td";
}
function pn(e) {
  const t = F(e, "role");
  if (z(t) && !M(e))
    return !1;
  if (t === "grid" || t === "treegrid" || t === "table" || V(e, t) === "landmark" || // Table inside editable area is data table always since the table structure is crucial for table editing
  un(e))
    return !0;
  if (F(e, "datatable") === "0")
    return !1;
  if (e.getAttribute("summary") || e.tHead || e.tFoot || e.caption || e.querySelector("colgroup"))
    return !0;
  let n = !1, r = 0;
  if (Ge(e).some(
    (s) => et(s).some((u) => {
      if (b(u) === "th" || R(u, "scope") || R(u, "headers") || R(u, "abbr") || ["columnheader", "rowheader"].includes(
        F(u, "role")
      ) || u.children.length === 1 && b(u.children[0]) === "abbr")
        return !0;
      !n && (u.offsetWidth !== u.clientWidth || u.offsetHeight !== u.clientHeight) && (n = !0), ++r;
    })
  ))
    return !0;
  const a = Ge(e), i = et(a[Math.ceil(a.length / 2)]);
  if (
    // Table having only one row or column is layout table
    a.length < 2 || i.length === 1 && An(i[0]) === 1 || // Table having nested table is layout table
    e.getElementsByTagName("table").length
  )
    return !1;
  if (a.length >= 20 || i.length >= 5 || n)
    return !0;
  let o, l;
  return a.some((s) => {
    const u = y(s), c = u.getPropertyValue("background-color").trim();
    if (!o)
      o = c;
    else if (o !== c)
      return !0;
    const g = u.getPropertyValue("background-image").trim();
    if (!l)
      l = g;
    else if (l !== g)
      return !0;
  }) ? !0 : !(r < 10 || // Wide table (more than 95% of the document width) is layout table
  Ur(e).width > Vr().width * 0.95 || // Table containing advertisements elements is layout table
  e.querySelector("object, embed, iframe, applet"));
}
function jt(e) {
  return Te(e) !== null;
}
const Fs = "article, aside, main, nav, section";
function lt(e) {
  return e.hasAttribute("role") || !S(e, Fs);
}
function hn(e) {
  return e.filter(
    (t) => I(t) && (!["header", "footer"].includes(b(t)) || lt(t))
  ).length > 1;
}
function st(e) {
  const t = Cn("landmark");
  let n = P(e);
  const r = C(e);
  for (; n; ) {
    let a = E(n);
    if (!a && b(n) !== "form" && (a = dt(n)), a && t.includes(a) && !(a === "main" && r === "complementary"))
      return !1;
    n = P(n);
  }
  return !0;
}
function ks(e) {
  const t = b(e);
  if (t === "header" || t === "footer")
    return lt(e);
  if (t === "section" || t === "form")
    return !!G(e);
  const n = C(e);
  return n ? n === "region" || Cn("landmark").includes(n) : !1;
}
const Ws = () => {
  const e = document.documentElement, t = document.body;
  return {
    left: (e == null ? void 0 : e.scrollLeft) || (t == null ? void 0 : t.scrollLeft) || 0,
    top: (e == null ? void 0 : e.scrollTop) || (t == null ? void 0 : t.scrollTop) || 0
  };
};
function Ur(e) {
  const t = Ws(), n = k(e);
  return {
    top: n.top + t.top,
    right: n.right + t.left,
    bottom: n.bottom + t.top,
    left: n.left + t.left,
    width: n.right - n.left,
    height: n.bottom - n.top
  };
}
const Sn = (e, t) => {
  const n = e.getPropertyValue("overflow-" + t);
  return ["scroll", "auto"].includes(n);
};
function Le(e, t = 0) {
  if (!A(e))
    return null;
  const n = e.scrollWidth > e.clientWidth + t, r = e.scrollHeight > e.clientHeight + t;
  if (!(n || r))
    return null;
  const a = y(e), i = Sn(a, "x"), o = Sn(a, "y");
  return n && i || r && o ? {
    element: e,
    top: e.scrollTop,
    left: e.scrollLeft
  } : null;
}
function Vr() {
  const e = document.documentElement, t = document.body;
  return {
    width: window.innerWidth || (e == null ? void 0 : e.clientWidth) || (t == null ? void 0 : t.clientWidth),
    height: window.innerHeight || (e == null ? void 0 : e.clientHeight) || (t == null ? void 0 : t.clientHeight)
  };
}
function Pn(e, t) {
  const n = k(t), r = n.top, a = n.left, i = {
    top: r - t.scrollTop,
    bottom: r - t.scrollTop + t.scrollHeight,
    left: a - t.scrollLeft,
    right: a - t.scrollLeft + t.scrollWidth
  };
  if (e.left > i.right && e.left > n.right || e.top > i.bottom && e.top > n.bottom || e.right < i.left && e.right < n.left || e.bottom < i.top && e.bottom < n.top)
    return !1;
  const o = y(t);
  return e.left > n.right || e.top > n.bottom ? o.overflow === "scroll" || o.overflow === "auto" || t instanceof window.HTMLBodyElement || t instanceof window.HTMLHtmlElement : !0;
}
let Ke = !1;
const Ut = 200, Vt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap();
function ut(e) {
  return Ke || gn(), Vt.get(e);
}
function Bn(e) {
  return Ke || gn(), Xe.get(e);
}
function gn(e = document.body, t, n) {
  if (Ke && !n)
    return Ut;
  if (Ke = !0, !n) {
    const i = document.documentElement;
    Xe.set(i, [0]), t ?? (t = new xt()), zn(t, i), Le(i) && Rt.set(i, new xt(i));
  }
  const r = document.createTreeWalker(
    e,
    window.NodeFilter.SHOW_ELEMENT
  );
  let a = n ? r.nextNode() : r.currentNode;
  for (; a; ) {
    a.parentElement ? n = a.parentElement : a.parentNode && (n = ae(a.parentNode) ? a.parentNode.host : a.parentNode), n && Xe.set(a, Ms(a, n));
    const i = Ls(a, n || null), o = i ? Rt.get(i) : t;
    Le(a) && Rt.set(a, new xt(a));
    const l = k(a);
    l.width !== 0 && l.height !== 0 && B(a) && zn(o, a), W1(a) && a.shadowRoot && gn(a.shadowRoot, o, a), a = r.nextNode();
  }
  return Ut;
}
function Ns(e, t) {
  const n = y(e), r = n.getPropertyValue("z-index"), a = n.getPropertyValue("position");
  if (a === "fixed" || a === "sticky" || r !== "auto" && a !== "static" || n.getPropertyValue("opacity") !== "1" || (n.getPropertyValue("-webkit-transform") || n.getPropertyValue("-ms-transform") || n.getPropertyValue("transform") || "none") !== "none")
    return !0;
  const i = n.getPropertyValue("mix-blend-mode");
  if (i && i !== "normal")
    return !0;
  const o = n.getPropertyValue("filter");
  if (o && o !== "none")
    return !0;
  const l = n.getPropertyValue("perspective");
  if (l && l !== "none")
    return !0;
  const s = n.getPropertyValue("clip-path");
  if (s && s !== "none" || (n.getPropertyValue("-webkit-mask") || n.getPropertyValue("mask") || "none") !== "none" || (n.getPropertyValue("-webkit-mask-image") || n.getPropertyValue("mask-image") || "none") !== "none" || (n.getPropertyValue("-webkit-mask-border") || n.getPropertyValue("mask-border") || "none") !== "none" || n.getPropertyValue("isolation") === "isolate")
    return !0;
  const u = n.getPropertyValue("will-change");
  if (u === "transform" || u === "opacity" || n.getPropertyValue("-webkit-overflow-scrolling") === "touch")
    return !0;
  const c = n.getPropertyValue("contain");
  if (["layout", "paint", "strict", "content"].includes(c))
    return !0;
  if (r !== "auto" && t) {
    const g = y(t).getPropertyValue("display");
    if ([
      "flex",
      "inline-flex",
      "inline flex",
      "grid",
      "inline-grid",
      "inline grid"
    ].includes(g))
      return !0;
  }
  return !1;
}
function Ms(e, t) {
  const n = Xe.get(t).slice(), r = y(e), a = r.getPropertyValue("z-index"), i = r.getPropertyValue("float") !== "none", o = r.getPropertyValue("position") !== "static";
  if (o && !["auto", "0"].includes(a)) {
    for (; n.find((l) => l % 1 !== 0); ) {
      const l = n.findIndex((s) => s % 1 !== 0);
      n.splice(l, 1);
    }
    n[n.length - 1] = parseInt(a);
  }
  return Ns(e, t) ? n.push(0) : o ? n.push(0.5) : i && n.push(0.25), n;
}
function Ls(e, t) {
  const n = [e];
  let r = t, a = null;
  for (; r; ) {
    if (Le(r)) {
      a = r;
      break;
    }
    if (It.has(r)) {
      a = It.get(r);
      break;
    }
    n.push(r), r = r.parentElement || r.parentNode;
  }
  return n.forEach(
    (i) => It.set(i, a)
  ), a;
}
function zn(e, t) {
  Array.from(t.getClientRects()).forEach((n) => {
    Vt.has(t) || Vt.set(t, e);
    const r = e.getGridPositionOfRect(n);
    e.loopGridPosition(r, (a) => {
      a.includes(t) || a.push(t);
    });
  });
}
class xt {
  constructor(t) {
    Y(this, "cells"), Y(this, "container"), Y(this, "boundaries"), Y(this, "negativeIndex"), this.cells = [], this.container = t || null, this.boundaries = null, this.negativeIndex = /* @__PURE__ */ new WeakMap();
  }
  /**
   * Convert x or y coordinate from rect, to a position in the grid
   */
  toGridIndex(t) {
    return Math.floor(t / Ut);
  }
  /**
   * Return an array of nodes available at a particular grid coordinate
   */
  getCellFromPoint({ x: t, y: n }) {
    if (this.boundaries) {
      const r = this.toGridIndex(n), a = this.toGridIndex(t);
      if (vr({ y: r, x: a }, this.boundaries)) {
        const i = this.negativeIndex.get(this.cells) || 0, o = this.cells[r - i] ?? [], l = this.negativeIndex.get(o) || 0;
        return o[a - l] ?? [];
      }
    }
  }
  /**
   * Loop over all cells within the gridPosition rect
   */
  loopGridPosition(t, n) {
    const { left: r, right: a, top: i, bottom: o } = t;
    this.boundaries && (t = yl(this.boundaries, t)), this.boundaries = t, this.loopNegativeIndexMatrix(this.cells, i, o, (l) => {
      this.loopNegativeIndexMatrix(
        l,
        r,
        a,
        (s) => {
          n(s);
        }
      );
    });
  }
  /**
   * Scale the rect to the position within the grid
   */
  getGridPositionOfRect({
    top: t,
    right: n,
    bottom: r,
    left: a
  }, i = 0) {
    return t = this.toGridIndex(t - i), n = this.toGridIndex(n + i - 1), r = this.toGridIndex(r + i - 1), a = this.toGridIndex(a - i), new window.DOMRect(a, t, n - a, r - t);
  }
  // eslint-disable-next-line max-params
  loopNegativeIndexMatrix(t, n, r, a) {
    let i = this.negativeIndex.get(t) || 0;
    if (n < i) {
      for (let s = 0; s < i - n; s++)
        t.splice(0, 0, []);
      this.negativeIndex.set(t, n), i = n;
    }
    const o = n - i, l = r - i;
    for (let s = o; s <= l; s++)
      t[s] ?? (t[s] = []), a(t[s], s + i);
  }
}
function $r(e) {
  const t = e instanceof Document ? e.body : e, n = Yr(), r = [];
  if (A(t) && !t.children)
    return [];
  function a(i, o) {
    const l = n.get(i);
    o || (o = (l == null ? void 0 : l.frame) && t.contains(l.frame)), o && r.push(i), l != null && l.childDocuments && (l == null || l.childDocuments.forEach((s) => {
      a(s, o);
    }));
  }
  return a(document), r;
}
function Gs(e) {
  var t;
  return ((t = Yr().get(e)) == null ? void 0 : t.frame) || null;
}
function Yr() {
  const e = "frameMap";
  return ue.exist(e) || ue.set(e, () => {
    const t = /* @__PURE__ */ new WeakMap();
    function n(r, a) {
      const i = r.querySelectorAll("iframe"), o = [];
      i.forEach((s) => {
        s.contentDocument && (n(s.contentDocument, s), o.push(s.contentDocument));
      });
      const l = {};
      a && (l.frame = a), o.length && (l.childDocuments = o), t.set(r, l);
    }
    return n(document), t;
  }), ue.get(e);
}
function U(e) {
  var t, n, r;
  const a = Array.from(e.childNodes);
  if (A(e) && (t = e.shadowRoot) != null && t.childNodes.length && a.push(...(n = e.shadowRoot) == null ? void 0 : n.childNodes), $l(e)) {
    const i = (r = e == null ? void 0 : e.contentDocument) == null ? void 0 : r.children;
    i != null && i.length && a.push(...i);
  }
  return a.reduce((i, o) => {
    if (i.push(o), o instanceof HTMLSlotElement) {
      const l = o.assignedNodes({
        flatten: !0
      });
      l.length > 0 && i.push(...l);
    }
    return i;
  }, []);
}
function S(e, t, n = {}) {
  let r = null;
  const a = n.includeGivenElement ? e : e.parentElement;
  if (typeof t == "string")
    r = (a == null ? void 0 : a.closest(t)) || null;
  else
    for (r = a; r && !t(r); )
      r = r.parentElement;
  if (r)
    return r;
  const i = e.getRootNode();
  return ae(i) ? S(i.host, t, n) : null;
}
function P(e) {
  if (A(e) && e.assignedSlot)
    return P(e.assignedSlot);
  if (e.parentNode) {
    const t = e.parentNode;
    if (A(t))
      return t;
    if (ae(t) && t.host)
      return t.host;
  }
  return null;
}
function oe(e, t) {
  const n = e.getRootNode(t);
  return n === e ? document : ae(n) || n.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n : document;
}
function Qr(e) {
  const t = e instanceof Document ? e.body : e;
  return A(t) && !t.children ? [] : qs().filter((n) => {
    let r = !1, a = n;
    for (; !r && ae(a); )
      r = t.contains(a.host), r || (a = oe(a.host));
    return r;
  });
}
function qs() {
  const e = "shadowRoots";
  return ue.exist(e) || ue.set(e, () => {
    var t, n;
    const r = [];
    let a = [document.body], i;
    for (; i = a.shift(); )
      (t = i.children) != null && t.length && (a = [...Array.from(i.children), ...a]), i.shadowRoot && (r.push(i.shadowRoot), (n = i.shadowRoot.children) != null && n.length && (a = [
        ...Array.from(i.shadowRoot.children),
        ...a
      ]));
    return r;
  }), ue.get(e);
}
function fn(e, t) {
  if (e === t)
    return 0;
  const n = re(e), r = re(t);
  if (n === document.documentElement && r === document.documentElement)
    return e.compareDocumentPosition(t) & 4 ? -1 : 1;
  {
    let a = n === document.documentElement, i = r === document.documentElement;
    const o = a ? [e] : [n], l = i ? [t] : [r];
    let s = Nn(o), u = Nn(l);
    for (; !(a && i) && !o.includes(u) && !l.includes(s); ) {
      let g;
      a || (g = re(s), a = g === document.documentElement, a || (s = g, o.push(g))), i || (g = re(u), i = g === document.documentElement, i || (u = g, l.push(g)));
    }
    const c = s === u;
    return !c && o.includes(u) ? -1 : !c && l.includes(s) ? 1 : s.compareDocumentPosition(u) & 4 ? -1 : 1;
  }
}
function Zr(e, t) {
  var n;
  const r = Bn(e), a = Bn(t), i = Math.max(r.length, a.length);
  for (let T = 0; T < i; T++) {
    if (typeof a[T] > "u")
      return -1;
    if (typeof r[T] > "u" || a[T] > r[T])
      return 1;
    if (a[T] < r[T])
      return -1;
  }
  let o = e, l = t;
  if (o.getRootNode && o.getRootNode() !== l.getRootNode()) {
    const T = [];
    for (; o; )
      T.push({
        root: o.getRootNode(),
        node: o
      }), o = o.getRootNode().host;
    for (; l && !T.find((O) => O.root === l.getRootNode()); )
      l = l.getRootNode().host;
    if (o = (n = T.find((O) => O.root === l.getRootNode())) == null ? void 0 : n.node, o === l)
      return e.getRootNode() !== o.getRootNode() ? -1 : 1;
  }
  const {
    DOCUMENT_POSITION_FOLLOWING: s,
    DOCUMENT_POSITION_CONTAINS: u,
    DOCUMENT_POSITION_CONTAINED_BY: c
  } = window.Node, g = o.compareDocumentPosition(l), w = g && s ? 1 : -1, v = g & u || g & c, N = _n(e), D = _n(t);
  return N === D || v ? w : D - N;
}
function _n(e) {
  return y(e).getPropertyValue("display").indexOf("inline") !== -1 ? 2 : Kr(e) ? 1 : 0;
}
function Kr(e) {
  return e ? y(e).getPropertyValue("float") !== "none" ? !0 : Kr(e.parentElement) : !1;
}
const Ss = (e, t, n) => typeof e == "string" && e in Ps && t instanceof Document && Object.keys(n).length === 0, Ps = {
  "*": "*",
  table: "table",
  img: "img",
  "a[href], [role=link]": "a[href], [role=link]",
  '[id]:not([id=""])': '[id]:not([id=""])',
  "iframe, frame": "iframe, frame",
  "[role]": "[role]"
};
function p(e, t, n = {}) {
  var r, a;
  const i = tt.get(
    "selectorsCache",
    () => /* @__PURE__ */ new Map()
  ), o = (r = M1.get("ignoreSelectors")) == null ? void 0 : r.join(), l = Ss(t, e, n);
  if (l && i.has(e)) {
    const g = i.get(e);
    if (g && g[t])
      return g[t];
  }
  function s(g) {
    return (!n.excludeRoot || b(g) === "body") && (n.includeScreenReaderHidden || I(g));
  }
  const u = Bs(e, o), c = [];
  if (typeof t == "string")
    for (const g of u)
      A(g) && s(g) && g.matches(t) && c.push(g), ((a = Array.from(
        g == null ? void 0 : g.querySelectorAll(t)
      )) == null ? void 0 : a.filter(
        (w) => !Xr(w, o)
      )).forEach((w) => {
        (n.includeScreenReaderHidden || I(w)) && c.push(w);
      });
  else
    for (const g of u) {
      A(g) && s(g) && t(g) && c.push(g);
      let w = Array.from(g.children), v;
      for (; v = w.shift(); )
        o && v.matches(o) || (t(v) && (n.includeScreenReaderHidden || I(v)) && c.push(v), v.children.length && (w = [...Array.from(v.children), ...w]));
    }
  if (n.keepElementOrder && c.sort(fn), l)
    if (i.has(e)) {
      const g = i.get(e);
      g[t] = c;
    } else
      i.set(e, {
        [t]: c
      });
  return c;
}
function Bs(e, t) {
  const n = e instanceof Document ? e.body : e;
  return [
    n,
    ...Qr(n),
    ...$r(n).map((r) => r.body)
  ].filter((r) => !Xr(r, t));
}
function Xr(e, t) {
  return t && A(e) && e.closest(t) !== null;
}
function wn(e, t, n) {
  const r = {};
  let a = `[${e}]`;
  return typeof t == "string" && (a = `${t}[${e}]`), p((n == null ? void 0 : n.root) || document, a, {
    includeScreenReaderHidden: !0
  }).forEach((i) => {
    const o = R(i, e);
    n != null && n.disallowEmptyAttr && !o || typeof t == "function" && !t(i) || (r[o] ? r[o].push(i) : r[o] = [i]);
  }), r;
}
function re(e) {
  const t = e.getRootNode && e.getRootNode() || null;
  if (t) {
    if (ae(t))
      return t.host;
    if (t.nodeType === Node.DOCUMENT_NODE) {
      const n = Gs(t);
      if (n)
        return n;
    } else if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.parentElement)
      return t.parentElement;
  }
  return document.documentElement;
}
function bn({
  elements: e
} = {}) {
  const t = e || p(document, '[id]:not([id=""])', {
    includeScreenReaderHidden: !0
  }), n = /* @__PURE__ */ new Map();
  t.forEach((r) => {
    const a = re(r), i = n.get(a) || {}, o = _(r, "id");
    i[o] ? i[o].push(r) : i[o] = [r], n.set(a, i);
  });
  for (const [r, a] of n) {
    for (const i in a)
      a[i].length < 2 && delete a[i];
    Object.keys(a).length === 0 && n.delete(r);
  }
  return n;
}
const zs = /^\/\#/, _s = /^#[!/]/;
function Jr(e) {
  var t;
  const n = e.getAttribute("href");
  if (!n || n === "#")
    return !1;
  if (zs.test(n))
    return !0;
  const { hash: r, protocol: a, hostname: i, port: o, pathname: l } = e;
  if (_s.test(r))
    return !1;
  if (n.charAt(0) === "#")
    return !0;
  if (typeof ((t = window.location) == null ? void 0 : t.origin) != "string" || window.location.origin.indexOf("://") === -1)
    return null;
  const s = window.location.origin + window.location.pathname;
  let u;
  return i ? u = `${a}//${i}${o ? `:${o}` : ""}` : u = window.location.origin, l ? u += (l[0] !== "/" ? "/" : "") + l : u += window.location.pathname, u === s;
}
function ea(e, t) {
  let n = e.getAttribute(t);
  if (!n || t === "href" && !Jr(e))
    return null;
  n.includes("#") && (n = decodeURIComponent(n.substring(n.indexOf("#") + 1)));
  const r = document.getElementById(n);
  if (r)
    return r;
  const a = document.getElementsByName(n);
  return a.length ? a[0] : null;
}
function le(e, t) {
  try {
    const n = oe(e);
    return rn(e, t).reduce(
      (r, a) => {
        const i = n.getElementById(a);
        return i && r.push(i), r;
      },
      []
    );
  } catch {
    throw new TypeError("Cannot resolve id references for non-DOM nodes");
  }
}
function Ie(e, t) {
  const n = _(e, "id");
  if (!n)
    return null;
  let r = "";
  if (t === "for")
    r = "idref";
  else {
    const o = Ee(t);
    o != null && o.type && (r = o.type);
  }
  let a = "";
  switch (r) {
    case "idref":
      a = `[${t}="${de(n)}"]`;
      break;
    case "idref-list":
      a = `[${t}~="${de(n)}"]`;
      break;
    default:
      return null;
  }
  const i = oe(e);
  return Array.from(i.querySelectorAll(a));
}
function ta(e) {
  const t = [];
  return e ? (y(e).getPropertyValue("overflow") === "hidden" && t.push(e), t.concat(
    ta(e.parentElement)
  )) : t;
}
function Hs(e, t) {
  if (!e.hasAttribute(t))
    return;
  const n = b(e);
  let r = e;
  (!["a", "area"].includes(n) || e instanceof SVGElement && e.ownerSVGElement) && (r = document.createElement("a"), r.href = F(e, t));
  const a = ["https:", "ftps:"].includes(r.protocol) ? r.protocol.replace(/s:$/, ":") : r.protocol, i = /^\//.test(r.pathname) ? r.pathname : `/${r.pathname}`, { pathname: o, filename: l } = js(i);
  return {
    protocol: a,
    hostname: r.hostname,
    port: Os(r.port),
    pathname: /\/$/.test(o) ? o : `${o}/`,
    search: Us(r.search),
    hash: Vs(r.hash),
    filename: l
  };
}
function Os(e) {
  return [
    "443",
    // default `https` port
    "80"
  ].includes(e) ? "" : e;
}
function js(e) {
  const t = e.split("/").pop();
  return !t || t.indexOf(".") === -1 ? {
    pathname: e,
    filename: ""
  } : {
    // remove `filename` from `pathname`
    pathname: e.replace(t, ""),
    // ignore filename when index.*
    filename: /index./.test(t) ? "" : t
  };
}
function Us(e) {
  const t = {};
  if (!e || !e.length)
    return t;
  const n = e.substring(1).split("&");
  if (!n || !n.length)
    return t;
  for (let r = 0; r < n.length; r++) {
    const a = n[r], [i, o = ""] = a.split("=");
    t[decodeURIComponent(i)] = o;
  }
  return t;
}
function Vs(e) {
  if (!e)
    return "";
  const t = /#!?\/?/g, n = e.match(t);
  if (!n)
    return "";
  const [r] = n;
  return r === "#" ? "" : e;
}
function Je(e) {
  const t = U(e);
  if (A(e)) {
    const n = pa(e);
    n.length && t.push(...n);
  }
  return t;
}
function Hn(e) {
  const t = /^([0-9.]+)([a-z]+)$/i, [, n = "", r = ""] = e.match(t) || [];
  return {
    value: parseFloat(n),
    unit: r.toLowerCase()
  };
}
function On(e, t) {
  const n = y(e, t);
  if (n.getPropertyValue("content") === "none" || n.getPropertyValue("display") === "none" || n.getPropertyValue("visibility") === "hidden" || n.getPropertyValue("position") === "position" || Me(n).alpha === 0 && n.getPropertyValue("background-image") === "none")
    return 0;
  const r = Hn(n.getPropertyValue("width")), a = Hn(n.getPropertyValue("height"));
  return r.unit !== "px" || a.unit !== "px" ? r.value === 0 || a.value === 0 ? 0 : 1 / 0 : r.value * a.value;
}
function $s(e, t) {
  const n = k(e), r = n.width * n.height * t;
  do {
    const a = On(e, ":before"), i = On(e, ":after");
    if (a + i > r)
      return e;
  } while (e = e.parentElement);
}
function na(e, t, n = !1) {
  const r = yr(t), a = e.getCellFromPoint(r) || [], i = Math.floor(r.x), o = Math.floor(r.y);
  let l = a.filter((u) => Array.from(u.getClientRects()).some((c) => {
    const g = c.left, w = c.top;
    return i < Math.floor(g + c.width) && i >= Math.floor(g) && o < Math.floor(w + c.height) && o >= Math.floor(w);
  }));
  const s = e.container;
  if (s) {
    const u = ut(s), c = k(s);
    l = na(u, c, !0).concat(l);
  }
  return n || (l = St(l, Zr).concat(document.documentElement).filter((u, c, g) => g.indexOf(u) === c)), l;
}
function ra(e) {
  const t = ["[tabindex]", ...I1("focusable")].join(
    ","
  ), n = p(e, t);
  return e.matches(t) && n.unshift(e), n.filter((r) => {
    const a = M(r), i = j(r, "tabindex");
    return i ? a && i >= 0 : a;
  });
}
function aa(e) {
  const t = [], n = k(e), r = ta(e);
  return U(e).forEach((a) => {
    if (!ie(a) || x(a.nodeValue) === "")
      return;
    const i = Ys(a);
    Qs(i, n) || t.push(...Zs(i, r));
  }), t.length ? t : [n];
}
function Ys(e) {
  const t = document.createRange();
  return t.selectNodeContents(e), Array.from(t.getClientRects());
}
function Qs(e, t) {
  return e.some((n) => {
    const r = yr(n);
    return !vr(r, t);
  });
}
function Zs(e, t) {
  const n = [];
  return e.forEach((r) => {
    if (r.width < 1 || r.height < 1)
      return;
    const a = t.reduce(
      (i, o) => i && Dr(i, k(o)),
      r
    );
    a && n.push(a);
  }), n;
}
function Ks(e) {
  const t = ut(e);
  return t ? aa(e).map((n) => na(t, n)) : [];
}
function Xs(e, t = 2) {
  const n = e.ownerDocument.createRange();
  n.setStart(e, 0), n.setEnd(e, e.childNodes.length);
  let r = 0, a = 0;
  for (const i of n.getClientRects())
    if (!(i.height <= t))
      if (r > i.top + t)
        r = Math.max(r, i.bottom);
      else if (a === 0)
        r = i.bottom, a++;
      else
        return !0;
  return !1;
}
let Ue;
function ia(e) {
  return e.href ? (Ue === void 0 && (Ue = Js()), Ue === null ? !0 : e.compareDocumentPosition(Ue) === e.DOCUMENT_POSITION_FOLLOWING) : !1;
}
function Js() {
  let e;
  return window.location.origin ? e = [
    ...document.querySelectorAll('a[href]:not([href^="javascript:"])')
  ].find((t) => !Jr(t)) : e = [
    ...document.querySelectorAll(
      'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])'
    )
  ][0], e || null;
}
function oa(e, t = 0) {
  var n;
  const r = ut(e);
  if (!((n = r == null ? void 0 : r.cells) != null && n.length))
    return [];
  const a = k(e), i = $t(e), o = r.getGridPositionOfRect(a, t), l = [];
  return r.loopGridPosition(o, (s) => {
    for (const u of s)
      u && u !== e && !s.includes(u) && i === $t(u) && s.push(u);
  }), l;
}
const $t = (e) => e ? y(e).getPropertyValue("position") === "fixed" ? !0 : $t(e.parentElement) : !1;
function e1(e) {
  return K(e) && !Pr(e);
}
function k(e) {
  const t = tt.get("get-bounding-client-rect", () => /* @__PURE__ */ new Map());
  if (t.has(e))
    return t.get(e);
  const n = e.getBoundingClientRect();
  return t.set(e, n), n;
}
function t1() {
  const e = Array.from(document.querySelectorAll("dialog[open]")).filter(
    (n) => {
      const r = k(n);
      return document.elementsFromPoint(r.left + 1, r.top + 1).includes(n) && B(n);
    }
  );
  return e.length ? e.find((n) => {
    const r = k(n);
    return document.elementsFromPoint(r.left - 10, r.top - 10).includes(n);
  }) || (e.find((n) => {
    const { vNode: r, rect: a } = n1(n) ?? {};
    return !r || !a ? !1 : !document.elementsFromPoint(a.left + 1, a.top + 1).includes(r);
  }) ?? null) : null;
}
function n1(e) {
  const t = ut(document.documentElement), n = new window.DOMRect(
    0,
    0,
    window.innerWidth,
    window.innerHeight
  );
  if (t)
    for (let r = 0; r < t.cells.length; r++) {
      const a = t.cells[r];
      if (a)
        for (let i = 0; i < a.length; i++) {
          const o = a[i];
          if (o)
            for (let l = 0; l < o.length; l++) {
              const s = o[l], u = k(s), c = Dr(u, n);
              if (
                // html is always returned from
                // elementsFromPoint
                s.nodeName !== "HTML" && s !== e && window.getComputedStyle(s).getPropertyValue("pointer-events") !== "none" && // ensure the element is visible in
                // the current viewport for
                // elementsFromPoint so we don't have
                // to scroll
                c
              )
                return { vNode: s, rect: c };
            }
        }
    }
}
function Yt(e) {
  if (C(e) === "heading") {
    const t = j(e, "aria-level"), [, n] = b(e).match(/h([1-6])/) || [];
    if (n && !t)
      return parseInt(n, 10);
    if (!t || t < 1)
      return n ? parseInt(n, 10) : 2;
    if (t)
      return t;
  }
  return null;
}
function la(e) {
  let t;
  const n = r1(e.currentSrc);
  return n ? n.length === 1 ? t = Math.abs(e.duration - n[0]) : t = Math.abs(n[1] - n[0]) : t = Math.abs(e.duration - (e.currentTime || 0)), t;
}
function r1(e) {
  const t = e.match(/#t=(.*)/);
  return t ? t[1].split(",").map((n) => {
    if (n.indexOf(":") !== -1) {
      const r = n.split(":");
      let a, i = 0, o = 1;
      for (; a = r.pop(); )
        i += o * parseInt(a, 10), o *= 60;
      return i;
    }
    return parseFloat(n);
  }) : null;
}
function sa(e) {
  var t;
  return ((t = e == null ? void 0 : e.getAttribute("content")) == null ? void 0 : t.trim().split(/[;,\s]/)) || null;
}
function ua(e) {
  const t = sa(e);
  return !t || !t[0].match(/^[0-9.]+$/) ? null : parseFloat(t[0]);
}
function a1(e, t) {
  return t.map((n) => `[${e}="${n}"]`).join(",");
}
function H(e) {
  return typeof e == "string" ? `[role="${e}"]` : `[role="${e.join('"], [role="')}"]`;
}
function i1(e) {
  var t;
  const n = " >>> ", r = ["frame", "iframe"], a = ["html", "head", "body"], i = [];
  let o = e, l = !1, s = re(e), u = ae(o.getRootNode && o.getRootNode());
  do {
    for (; o && !(o.nodeType === Node.DOCUMENT_NODE || o.nodeType === Node.DOCUMENT_FRAGMENT_NODE); ) {
      const c = de(b(o)), g = A(o) && _(o, "id"), w = g && !/\s/.test(g) ? de(g) : null, v = w && s.querySelectorAll("#" + w).length === 1, N = a.includes(c);
      let D = "";
      if (v)
        D = `${r.includes(c) ? c : ""}#${w}`;
      else if (N)
        D = c;
      else if (A(o)) {
        const T = (
          // for SVG elements `className` is deprecated
          !(o instanceof SVGElement) && (t = o.className) != null && t.trim && o.className.trim() && o.parentNode ? "." + o1(o.classList) : ""
        );
        if (T && !_t(o, T))
          D = c + T;
        else if (!_t(o, c))
          D = c;
        else {
          let O = 1, se = o.previousSibling;
          for (; se; )
            A(se) && ++O, se = se.previousSibling;
          D = `${c}:nth-child(${O})`;
        }
      }
      if (D && l && (D = `:host(${D})`, l = !1), Bl(D) && i.push(D), v || N)
        break;
      o = o.parentNode || null;
    }
    if (s === document.documentElement)
      break;
    o = s, l = u, s = re(o), u = ae(o.getRootNode && o.getRootNode()), i.push(n);
  } while (o);
  return i.reverse().reduce((c, g, w) => (g === n ? w > 0 && (c += n) : (w > 0 && !c.endsWith(n) && (c += " > "), c += g), c), "");
}
function o1(e) {
  return Array.from(e).reduce((t, n) => {
    const r = de(n);
    return t ? `${t}.${r}` : r;
  }, "");
}
function l1(e) {
  const t = " >>> ", n = [];
  let r = e, a = re(e);
  do {
    for (; r && !(r.nodeType === Node.DOCUMENT_NODE || r.nodeType === Node.DOCUMENT_FRAGMENT_NODE); ) {
      const i = de(b(r)), o = A(r) && _(r, "id"), l = o && !/\s/.test(o) ? de(o) : null, s = l && a.querySelectorAll("#" + l).length === 1, u = i === "html";
      let c = "";
      if (s)
        c = `/*[@id="${l}"]`;
      else if (u)
        c = i;
      else if (A(r))
        if (!_t(r, i))
          c = i;
        else {
          let g = 1, w = r.previousElementSibling;
          for (; w; )
            b(w) === i && ++g, w = w.previousElementSibling;
          c = `${i}[${g}]`;
        }
      if (c && n.push(c), s || u)
        break;
      r = r.parentNode || null;
    }
    if (a === document.documentElement)
      break;
    r = a, a = re(r), n.push(t);
  } while (r);
  return "/" + n.reverse().reduce((i, o, l) => (o === t ? l > 0 && (i += t) : (i.endsWith(t) ? i = i.replace(
    new RegExp(t + "$"),
    t + "/"
  ) : l > 0 && (i += "/"), i += o), i), "");
}
function et(e) {
  return Array.from(
    e.cells || e.querySelectorAll(
      "th, td, " + H(["cell", "columnheader", "gridcell", "rowheader"])
    )
  );
}
function An(e) {
  return e.colSpan || j(e, "colspan") || 1;
}
function ca(e, t = 0) {
  const n = e.rowSpan || j(e, "rowspan") || 1;
  return n === 0 ? t : n;
}
function Ge(e) {
  return Array.from(
    e.rows || e.querySelectorAll('tr, [role="row"]')
  );
}
function ze(e) {
  const t = [], n = Ge(e);
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    t[r] = t[r] || [];
    const i = et(a);
    for (const o of i) {
      const l = An(o), s = ca(o, n.length);
      let u = 0;
      for (let c = 0; c < l; ++c)
        for (let g = r; g < s + r; ++g) {
          for (t[g] || (t[g] = []); t[g][u]; )
            ++u;
          t[g][u] = o;
        }
    }
  }
  return t;
}
function Dn(e) {
  const t = e.closest("table");
  return t ? ze(t) : void 0;
}
function yn(e, t) {
  if (!t && (t = Dn(e), !t))
    return null;
  for (let n = 0; n < t.length; n++)
    if (t[n]) {
      const r = t[n].indexOf(e);
      if (r !== -1)
        return {
          x: r,
          y: n
        };
    }
  return null;
}
function da(e) {
  return Ge(e).reduce((t, n) => (t.push(...et(n)), t), []);
}
function Te(e) {
  const t = F(e, "scope") || F(e, "role");
  switch (t) {
    case "colgroup":
    case "rowgroup":
      return t;
    case "col":
    case "columnheader":
      return "col";
    case "row":
    case "rowheader":
      return "row";
    case "auto":
    default:
      const n = e.closest("table"), r = n ? ze(n) : [], a = yn(e, r);
      if (a) {
        if (r[a.y].every((i) => !Ot(i)))
          return "col";
        if (r.every((i) => !Ot(i[a.x])))
          return "row";
      }
  }
  return null;
}
function jn(e, t, n) {
  const r = yn(e, t);
  if (!r)
    return [];
  const a = n === "row", i = r.y + ca(e) - 1, o = r.x + An(e) - 1, l = a ? r.y : 0, s = a ? 0 : r.x, u = [];
  for (let c = i; c >= l; c--)
    for (let g = o; g >= s; g--) {
      const w = t[c][g];
      !w || Te(w) !== n || u.push(w);
    }
  return u.reverse();
}
function ma(e, t) {
  if (!t && (t = Dn(e), !t))
    return [];
  if (e.hasAttribute("headers")) {
    if (R(e, "headers") === "")
      return;
    const n = le(e, "headers");
    if (n.length)
      return n;
  }
  return [
    ...jn(e, t, "row"),
    ...jn(e, t, "col")
  ];
}
function pa(e) {
  return e.hasAttribute("aria-owns") ? le(e, "aria-owns") : [];
}
function s1(e) {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = Ie(n, "aria-owns");
    r != null && r.length && t.push(...r), n = n.parentElement;
  }
  return t;
}
function G(e, t = {}) {
  return t = u1(e, t), c1(e, t) || d1(e, t) ? "" : [
    ga,
    ha,
    b1,
    p1,
    fe,
    m1,
    ct
  ].reduce((n, r) => (t.startNode === e && (n = x(n)), n !== "" ? n : r(e, t)), "");
}
G.alreadyProcessed = (e, t) => (t.processed = t.processed || [], t.processed.includes(e) ? !0 : (t.processed.push(e), !1));
const u1 = (e, t) => (t.startNode || (t.startNode = e), A(e) && t.inLabelledbyContext && t.includeHidden === void 0 && (t.includeHidden = !I(e)), t), c1 = (e, t) => (
  // If the parent isn't ignored, the text node should not be either
  !A(e) || // If the target of aria-labelledby is hidden, ignore all descendents
  t.includeHidden ? !1 : !I(e)
), d1 = (e, t) => t.ignoreLigatures && A(e) ? cn(e) : !1, m1 = (e) => ie(e) && e.nodeValue ? e.nodeValue : "";
function ha(e) {
  return A(e) && e.getAttribute("aria-label") || "";
}
function ga(e, t = {}) {
  return !A(e) || t.inLabelledbyContext || t.inControlContext || !e.hasAttribute("aria-labelledby") ? "" : le(e, "aria-labelledby").reduce((n, r) => {
    const a = G(r, {
      // Prevent the infinite reference loop:
      inLabelledbyContext: !0,
      startNode: t.startNode || r,
      ...t
    });
    return n ? n + " " + a : a;
  }, "");
}
const fa = {
  nativeTextboxValue: (e) => {
    const t = b(e);
    return (t === "textarea" || t === "input" && ![
      "button",
      "checkbox",
      "color",
      "file",
      "hidden",
      "image",
      "password",
      "radio",
      "reset",
      "submit"
    ].includes(F(e, "type"))) && e.value || "";
  },
  nativeSelectValue: (e) => {
    if (b(e) !== "select")
      return "";
    const t = Array.from(e.querySelectorAll("option")), n = t.filter((r) => r.selected);
    return n.length || n.push(t[0]), n.map((r) => me(r)).join(" ") || "";
  },
  ariaTextboxValue: (e) => E(e) !== "textbox" ? "" : sn(e) ? e.textContent ?? "" : me(e, { screenReader: !0 }),
  ariaListboxValue: (e, t) => {
    if (E(e) !== "listbox")
      return "";
    const n = Je(e).filter(
      (r) => A(r) && C(r) === "option" && F(r, "aria-selected") === "true"
    );
    return n.length === 0 ? "" : G(n[0], t);
  },
  ariaComboboxValue: (e, t) => {
    if (E(e) !== "combobox")
      return "";
    const n = Je(e).filter(
      (r) => A(r) && C(r) === "listbox"
    );
    return n.length === 0 ? "" : fa.ariaListboxValue(n[0], t);
  },
  ariaRangeValue: (e) => {
    const t = ["progressbar", "scrollbar", "slider", "spinbutton"], n = E(e) ?? "";
    if (!t.includes(n) || !e.hasAttribute("aria-valuenow"))
      return "";
    const r = Number(e.getAttribute("aria-valuenow"));
    return isNaN(r) ? "0" : String(r);
  }
};
function p1(e, t = {}) {
  if (!A(e))
    return "";
  const n = C(e) ?? "";
  return (
    // For the targeted node, the accessible name is never the value:
    t.startNode === e || // Only elements with a certain role can return their value
    // For `combobox`, `listbox` and `progressbar` form control roles generating accessible name from their value is unsupported
    !["textbox", "scrollbar", "slider", "spinbutton"].includes(n) ? "" : Object.values(fa).reduce(
      (r, a) => r || a(e, t),
      ""
    )
  );
}
function ge(e, t = {}) {
  var n;
  if (t.inControlContext || t.inLabelledbyContext || G.alreadyProcessed(e, t))
    return "";
  t.startNode || (t.startNode = e);
  let r = null;
  if (b(e) === "label")
    r = [e];
  else if (Zl(e)) {
    r = Ie(e, "for") || [];
    const i = (n = e.parentElement) == null ? void 0 : n.closest("label");
    i && (r.push(i), r.sort(fn));
  }
  const a = { inControlContext: !0, ...t };
  return (r == null ? void 0 : r.map((i) => G(i, a)).filter((i) => i !== "").join(" ")) || "";
}
const h1 = (e, t) => {
  var n;
  const r = C(e) ?? "", a = r ? q(r) : null;
  return (n = a == null ? void 0 : a.accessibleNameFrom) != null && n.includes("contents") ? !0 : t.strict ? !1 : !a || z(r);
};
function fe(e, t = {}) {
  var n;
  if (!A(e))
    return "";
  t.startNode = t.startNode || e;
  const r = te(e);
  return G.alreadyProcessed(e, t) || (n = r == null ? void 0 : r.contentTypes) != null && n.includes("embedded") || !t.subtreeDescendant && !h1(e, t) ? "" : (t.strict || (t.subtreeDescendant = !t.inControlContext && !t.inLabelledbyContext), Je(e).reduce((a, i) => {
    let o = G(i, t);
    return o ? (F1(i, "phrasing") || (o[0] !== " " && (o += " "), a && a[a.length - 1] !== " " && (o = " " + o)), a + o) : a;
  }, ""));
}
const g1 = ["iframe"];
function ct(e) {
  return !A(e) || !e.hasAttribute("title") || !g1.includes(b(e)) && z(C(e) || "") ? "" : R(e, "title");
}
const Ve = (e, t) => {
  e = e.toLowerCase();
  const n = [e, b(t)].join(","), r = t.querySelector(n);
  return !r || b(r) !== e ? "" : G(r);
}, f1 = [
  "svgTitleText",
  "altText",
  "titleText"
], Un = {
  /** Returns the value of a DOM node */
  valueText: (e) => e instanceof HTMLInputElement ? e.value : "",
  /** Returns default value of a button */
  buttonDefaultText: (e) => {
    if (e instanceof HTMLButtonElement)
      switch (e.type) {
        case "submit":
          return "Submit";
        case "reset":
          return "Reset";
        default:
          return "";
      }
    return "";
  },
  /** Returns caption text of an HTML table element */
  tableCaptionText: Ve.bind(null, "caption"),
  /** Returns figcaption text of an HTML figure element */
  figureText: Ve.bind(null, "figcaption"),
  /** Returns figcaption text of an HTML figure element */
  svgTitleText: Ve.bind(null, "title"),
  /** Returns legend text of an HTML fieldset element */
  fieldsetLegendText: Ve.bind(null, "legend"),
  /** Returns the alt text */
  altText: (e) => e.getAttribute("alt") || "",
  /** Returns summary text for an HTML table element */
  tableSummaryText: (e) => e.getAttribute("summary") || "",
  /** Returns the title text */
  titleText: ct,
  /** Returns accessible text of the subtree */
  subtreeText: fe,
  /** Returns accessible text for an implicit and/or explicit HTML label element */
  labelText: ge,
  /** Returns a single space */
  singleSpace: () => " ",
  /** Returns the placeholder text */
  placeholderText: (e) => e.getAttribute("placeholder") || ""
};
function w1(e, t = !1) {
  return e.reduce(
    (n, r) => {
      if (r in Un)
        (!t || !f1.includes(r)) && n.push(
          Un[r]
        );
      else
        throw new Error(`missing native text method ${r}`);
      return n;
    },
    []
  );
}
function b1(e, t) {
  if (!A(e) || z(C(e) || ""))
    return "";
  const n = te(e);
  return (n != null && n.namingMethods ? w1(
    n == null ? void 0 : n.namingMethods,
    t.ignoreNonVisibleText
  ) : []).reduce((r, a) => r || a(e, t), "");
}
const A1 = (e) => `sr:${e.screenReader || ""}:nr:${e.noRecursion || ""}`;
function me(e, t = {}) {
  const n = tt.get("visible-text-cache", () => /* @__PURE__ */ new Map()), r = A1(t);
  if (n.has(e)) {
    const l = n.get(e);
    if (l[r])
      return l[r];
  }
  const a = t.screenReader ? I(e) : B(e), i = Array.from(e.childNodes).map((l) => {
    const { nodeValue: s } = l;
    if (ie(l)) {
      if (s && a)
        return s;
    } else if (!t.noRecursion)
      return me(l, { screenReader: t.screenReader });
  }).join(""), o = x(i);
  return n.set(e, { [r]: o }), o;
}
function D1(e, t) {
  if (!Lr(e))
    return [];
  const n = b(e);
  let r = dt(e);
  !r && n === "header" && (r = "banner"), !r && n === "footer" && (r = "contentinfo");
  const a = y1(e), i = (o) => {
    var l;
    return t != null && t.allowImplicit && o === r ? !0 : _r(o) && V(e, o) !== r && !((l = q(o, e)) != null && l.superclassRole.includes(r || "")) ? !1 : gs(e, o);
  };
  return a.filter((o) => !i(o));
}
function y1(e) {
  return rn(e, "role").filter(
    (t) => Be(t.toLowerCase())
  );
}
function E(e, t = {}) {
  if (!A(e))
    return null;
  const n = F(e, "role");
  return (t.allowFallback ? he(n) : [n]).find((r) => !t.dpub && _r(r) ? !1 : Be(r, t)) || null;
}
function dt(e) {
  if (!A(e))
    return null;
  const t = te(e);
  return (t == null ? void 0 : t.implicitRole) || null;
}
function C(e, t = {}) {
  function n(l) {
    if (!A(l))
      return null;
    const s = E(l, t);
    return s && (!z(s) || !r(l)) ? s : a(l);
  }
  function r(l) {
    return vn(l) || M(l);
  }
  function a(l) {
    const s = dt(l);
    return i(l) || s || null;
  }
  function i(l) {
    const s = l.parentElement;
    if (!s)
      return null;
    const u = te(l);
    if (!(u != null && u.inheritsPresentationChain) || !u.inheritsPresentationChain.includes(b(s)))
      return null;
    const c = E(s, t);
    return c && z(c) && !r(s) ? c : c ? null : i(s);
  }
  const o = n(e);
  return o !== null && t.noPresentational && z(o) ? null : o;
}
const Qt = {
  type: "abstract",
  superclassRole: [],
  supportedAttrs: [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-dropeffect",
    "aria-errormessage",
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ]
}, Zt = {
  alert: {
    type: "live",
    superclassRole: ["section"],
    implicitAttrs: {
      "aria-live": "assertive",
      "aria-atomic": "true"
    },
    accessibleNameFrom: ["author"]
  },
  alertdialog: {
    type: "window",
    superclassRole: ["alert", "dialog"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  application: {
    type: "structure",
    superclassRole: ["structure"],
    supportedAttrs: ["aria-activedescendant"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  article: {
    type: "structure",
    superclassRole: ["document"],
    supportedAttrs: ["aria-posinset", "aria-setsize"],
    accessibleNameFrom: ["author"]
  },
  banner: {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  button: {
    type: "widget",
    superclassRole: ["command"],
    supportedAttrs: ["aria-expanded", "aria-pressed"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0
  },
  cell: {
    type: "structure",
    superclassRole: ["section"],
    requiredContextRole: ["row"],
    supportedAttrs: [
      "aria-colindex",
      "aria-colspan",
      "aria-rowindex",
      "aria-rowspan"
    ],
    accessibleNameFrom: ["contents", "author"]
  },
  checkbox: {
    type: "widget",
    superclassRole: ["input"],
    requiredAttrs: ["aria-checked"],
    supportedAttrs: ["aria-readonly"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0,
    visualContent: !0
  },
  columnheader: {
    type: "structure",
    superclassRole: ["cell", "gridcell", "sectionhead"],
    requiredContextRole: ["row"],
    supportedAttrs: ["aria-sort"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  combobox: {
    variants: {
      hasAriaExpanded: {
        selector: (e) => F(e, "aria-expanded") === "true",
        requiredOwnedElements: ["textbox", "listbox", "tree", "grid", "dialog"]
      }
    },
    type: "widget",
    superclassRole: ["select"],
    requiredOwnedElements: ["textbox"],
    requiredAttrs: ["aria-controls", "aria-expanded"],
    supportedAttrs: ["aria-autocomplete", "aria-readonly", "aria-required"],
    implicitAttrs: {
      "aria-haspopup": "listbox"
    },
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  command: {
    type: "abstract",
    superclassRole: ["widget"],
    accessibleNameFrom: ["author"]
  },
  complementary: {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  composite: {
    type: "abstract",
    superclassRole: ["widget"],
    supportedAttrs: ["aria-activedescendant"],
    accessibleNameFrom: ["author"]
  },
  contentinfo: {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  definition: {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  dialog: {
    type: "window",
    superclassRole: ["window"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  directory: {
    type: "structure",
    superclassRole: ["list"],
    accessibleNameFrom: ["author"]
  },
  document: {
    type: "structure",
    superclassRole: ["structure"],
    supportedAttrs: ["aria-expanded"],
    accessibleNameFrom: ["author"]
  },
  feed: {
    type: "structure",
    superclassRole: ["list"],
    requiredOwnedElements: ["article"],
    accessibleNameFrom: ["author"]
  },
  figure: {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  form: {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  grid: {
    type: "widget",
    superclassRole: ["composite", "table"],
    requiredOwnedElements: ["row", "rowgroup"],
    supportedAttrs: ["aria-level", "aria-multiselectable", "aria-readonly"],
    accessibleNameFrom: ["author"]
  },
  gridcell: {
    type: "widget",
    superclassRole: ["cell", "widget"],
    requiredContextRole: ["row"],
    supportedAttrs: ["aria-readonly", "aria-required", "aria-selected"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  group: {
    type: "structure",
    superclassRole: ["section"],
    supportedAttrs: ["aria-activedescendant"],
    accessibleNameFrom: ["author"]
  },
  heading: {
    type: "structure",
    superclassRole: ["sectionhead"],
    requiredAttrs: ["aria-level"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  img: {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0,
    visualContent: !0
  },
  input: {
    type: "abstract",
    superclassRole: ["widget"],
    accessibleNameFrom: ["author"]
  },
  landmark: {
    type: "abstract",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  link: {
    type: "widget",
    superclassRole: ["command"],
    supportedAttrs: ["aria-expanded"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  list: {
    type: "structure",
    superclassRole: ["section"],
    requiredOwnedElements: ["group", "listitem"],
    accessibleNameFrom: ["author"]
  },
  listbox: {
    type: "widget",
    superclassRole: ["select"],
    requiredOwnedElements: ["option"],
    supportedAttrs: ["aria-multiselectable", "aria-readonly", "aria-required"],
    implicitAttrs: {
      "aria-orientation": "vertical"
    },
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  listitem: {
    type: "structure",
    superclassRole: ["section"],
    requiredContextRole: ["group", "list"],
    supportedAttrs: ["aria-level", "aria-posinset", "aria-setsize"],
    accessibleNameFrom: ["author"]
  },
  log: {
    type: "live",
    superclassRole: ["section"],
    implicitAttrs: {
      "aria-live": "polite"
    },
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  main: {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  marquee: {
    type: "live",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  math: {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"],
    childrenPresentational: !0
  },
  menu: {
    type: "widget",
    superclassRole: ["select"],
    requiredOwnedElements: [
      "group",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio"
    ],
    implicitAttrs: {
      "aria-orientation": "vertical"
    },
    accessibleNameFrom: ["author"]
  },
  menubar: {
    type: "widget",
    superclassRole: ["menu"],
    requiredOwnedElements: [
      "group",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio"
    ],
    implicitAttrs: {
      "aria-orientation": "horizontal"
    },
    accessibleNameFrom: ["author"]
  },
  menuitem: {
    type: "widget",
    superclassRole: ["command"],
    requiredContextRole: ["menu", "menubar", "group"],
    supportedAttrs: ["aria-posinset", "aria-setsize"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  menuitemcheckbox: {
    type: "widget",
    superclassRole: ["checkbox", "menuitem"],
    requiredContextRole: ["menu", "menubar"],
    implicitAttrs: {
      "aria-checked": "false"
    },
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0,
    visualContent: !0
  },
  menuitemradio: {
    type: "widget",
    superclassRole: ["menuitemcheckbox", "radio"],
    requiredContextRole: ["menu", "menubar", "group"],
    implicitAttrs: {
      "aria-checked": "false"
    },
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0,
    visualContent: !0
  },
  navigation: {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  none: {
    type: "structure",
    superclassRole: ["structure"]
  },
  note: {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  option: {
    type: "widget",
    superclassRole: ["input"],
    requiredContextRole: ["group", "listbox"],
    requiredAttrs: ["aria-selected"],
    supportedAttrs: ["aria-checked", "aria-posinset", "aria-setsize"],
    implicitAttrs: {
      "aria-selected": "false"
    },
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0
  },
  presentation: {
    type: "structure",
    superclassRole: ["structure"]
  },
  progressbar: {
    type: "widget",
    superclassRole: ["range"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0,
    visualContent: !0
  },
  radio: {
    type: "widget",
    superclassRole: ["input"],
    requiredAttrs: ["aria-checked"],
    supportedAttrs: ["aria-posinset", "aria-setsize"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0,
    visualContent: !0
  },
  radiogroup: {
    type: "widget",
    superclassRole: ["select"],
    requiredOwnedElements: ["radio"],
    supportedAttrs: ["aria-readonly", "aria-required"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  range: {
    type: "abstract",
    superclassRole: ["widget"],
    supportedAttrs: [
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext"
    ],
    accessibleNameFrom: ["author"]
  },
  region: {
    type: "landmark",
    superclassRole: ["landmark"],
    supportedAttrs: ["aria-expanded"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  row: {
    type: "structure",
    superclassRole: ["group", "widget"],
    requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredOwnedElements: ["cell", "columnheader", "gridcell", "rowheader"],
    supportedAttrs: [
      "aria-colindex",
      "aria-level",
      "aria-rowindex",
      "aria-selected"
    ],
    accessibleNameFrom: ["contents", "author"]
  },
  rowgroup: {
    type: "structure",
    superclassRole: ["structure"],
    requiredContextRole: ["grid", "table", "treegrid"],
    requiredOwnedElements: ["row"],
    accessibleNameFrom: ["contents", "author"]
  },
  rowheader: {
    type: "structure",
    superclassRole: ["cell", "gridcell", "sectionhead"],
    requiredContextRole: ["row"],
    supportedAttrs: ["aria-sort"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  scrollbar: {
    type: "widget",
    superclassRole: ["range"],
    requiredAttrs: [
      "aria-controls",
      "aria-orientation",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow"
    ],
    implicitAttrs: {
      "aria-orientation": "vertical",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": Vn
    },
    accessibleNameFrom: ["author"],
    childrenPresentational: !0,
    visualContent: !0
  },
  search: {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  searchbox: {
    type: "widget",
    superclassRole: ["textbox"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  section: {
    type: "abstract",
    superclassRole: ["structure"],
    supportedAttrs: ["aria-expanded"]
  },
  sectionhead: {
    type: "abstract",
    superclassRole: ["structure"],
    supportedAttrs: ["aria-expanded"],
    accessibleNameFrom: ["contents", "author"]
  },
  select: {
    type: "abstract",
    superclassRole: ["composite", "group"],
    supportedAttrs: ["aria-orientation"],
    accessibleNameFrom: ["author"]
  },
  separator: {
    variants: {
      focusable: {
        selector: (e) => M(e),
        type: "widget",
        superclassRole: ["widget"],
        requiredAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
        supportedAttrs: ["aria-orientation", "aria-valuetext"]
      }
    },
    type: "structure",
    superclassRole: ["structure"],
    supportedAttrs: ["aria-orientation"],
    implicitAttrs: {
      "aria-orientation": "horizontal",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    },
    accessibleNameFrom: ["author"],
    childrenPresentational: !0
  },
  slider: {
    type: "widget",
    superclassRole: ["input", "range"],
    requiredAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
    supportedAttrs: ["aria-orientation", "aria-readonly"],
    implicitAttrs: {
      "aria-orientation": "horizontal",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": Vn
    },
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0,
    visualContent: !0
  },
  spinbutton: {
    type: "widget",
    superclassRole: ["composite", "input", "range"],
    requiredAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
    supportedAttrs: ["aria-readonly", "aria-required"],
    implicitAttrs: {
      // TODO update if required; currently WAI standard read:
      // Default for aria-valuemin is that there is no minimum value.
      // Default for aria-valuemax is that there is no maximum value.
      // Default for aria-valuenow is 0.
      //'aria-valuemin': ...,
      //'aria-valuemax': ...,
      "aria-valuenow": "0"
    },
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0,
    visualContent: !0
  },
  status: {
    type: "live",
    superclassRole: ["section"],
    implicitAttrs: {
      "aria-live": "polite",
      "aria-atomic": "true"
    },
    accessibleNameFrom: ["author"]
  },
  structure: {
    type: "abstract",
    superclassRole: ["roletype"]
  },
  switch: {
    type: "widget",
    superclassRole: ["checkbox"],
    requiredAttrs: ["aria-checked"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0
  },
  tab: {
    type: "widget",
    superclassRole: ["sectionhead", "widget"],
    requiredContextRole: ["tablist"],
    supportedAttrs: ["aria-posinset", "aria-selected", "aria-setsize"],
    implicitAttrs: {
      "aria-selected": "false"
    },
    accessibleNameFrom: ["contents", "author"],
    childrenPresentational: !0
  },
  table: {
    type: "structure",
    superclassRole: ["section"],
    requiredOwnedElements: ["rowgroup", "row"],
    supportedAttrs: ["aria-colcount", "aria-rowcount"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  tablist: {
    type: "widget",
    superclassRole: ["composite"],
    requiredOwnedElements: ["tab"],
    supportedAttrs: ["aria-level", "aria-multiselectable", "aria-orientation"],
    implicitAttrs: {
      "aria-orientation": "horizontal"
    },
    accessibleNameFrom: ["author"]
  },
  tabpanel: {
    type: "widget",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  term: {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  textbox: {
    type: "widget",
    superclassRole: ["input"],
    supportedAttrs: [
      "aria-activedescendant",
      "aria-autocomplete",
      "aria-multiline",
      "aria-placeholder",
      "aria-readonly",
      "aria-required"
    ],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0,
    visualContent: !0
  },
  timer: {
    type: "live",
    superclassRole: ["status"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  toolbar: {
    type: "structure",
    superclassRole: ["group"],
    supportedAttrs: ["aria-orientation"],
    implicitAttrs: {
      "aria-orientation": "horizontal"
    },
    accessibleNameFrom: ["author"]
  },
  tooltip: {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  tree: {
    type: "widget",
    superclassRole: ["select"],
    requiredOwnedElements: ["group", "treeitem"],
    supportedAttrs: ["aria-multiselectable", "aria-required"],
    implicitAttrs: {
      "aria-orientation": "vertical"
    },
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  treegrid: {
    type: "widget",
    superclassRole: ["grid", "tree"],
    requiredOwnedElements: ["rowgroup", "row"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  treeitem: {
    type: "widget",
    superclassRole: ["listitem", "option"],
    requiredContextRole: ["group", "tree"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  widget: {
    type: "abstract",
    superclassRole: ["roletype"]
  },
  window: {
    type: "abstract",
    superclassRole: ["roletype"],
    supportedAttrs: ["aria-expanded", "aria-modal"],
    accessibleNameFrom: ["author"]
  }
}, v1 = {
  "doc-abstract": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-acknowledgments": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-afterword": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-appendix": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-backlink": {
    type: "widget",
    superclassRole: ["link"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  "doc-biblioentry": {
    type: "structure",
    superclassRole: ["listitem"],
    requiredContextRole: ["doc-bibliography"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  "doc-bibliography": {
    type: "landmark",
    superclassRole: ["landmark"],
    requiredOwnedElements: ["doc-biblioentry"],
    accessibleNameFrom: ["author"]
  },
  "doc-biblioref": {
    type: "widget",
    superclassRole: ["link"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  "doc-chapter": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-colophon": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-conclusion": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-cover": {
    type: "structure",
    superclassRole: ["img"],
    accessibleNameFrom: ["author"]
  },
  "doc-credit": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-credits": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-dedication": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-endnote": {
    type: "structure",
    superclassRole: ["listitem"],
    requiredContextRole: ["doc-endnotes"],
    accessibleNameFrom: ["author"]
  },
  "doc-endnotes": {
    type: "landmark",
    superclassRole: ["landmark"],
    requiredOwnedElements: ["doc-endnote"],
    accessibleNameFrom: ["author"]
  },
  "doc-epigraph": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-epilogue": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-errata": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-example": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-footnote": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-foreword": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-glossary": {
    type: "landmark",
    superclassRole: ["landmark"],
    requiredOwnedElements: ["term", "definition"],
    accessibleNameFrom: ["author"]
  },
  "doc-glossref": {
    type: "widget",
    superclassRole: ["link"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  "doc-index": {
    type: "landmark",
    superclassRole: ["navigation"],
    accessibleNameFrom: ["author"]
  },
  "doc-introduction": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-noteref": {
    type: "widget",
    superclassRole: ["link"],
    accessibleNameFrom: ["contents", "author"],
    accessibleNameRequired: !0
  },
  "doc-notice": {
    type: "structure",
    superclassRole: ["note"],
    accessibleNameFrom: ["author"]
  },
  "doc-pagebreak": {
    variants: {
      focusable: {
        selector: M,
        type: "widget"
      }
    },
    type: "structure",
    superclassRole: ["separator"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0
  },
  "doc-pagelist": {
    type: "landmark",
    superclassRole: ["navigation"],
    accessibleNameFrom: ["author"]
  },
  "doc-part": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  "doc-preface": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-prologue": {
    type: "landmark",
    superclassRole: ["landmark"],
    accessibleNameFrom: ["author"]
  },
  "doc-pullquote": {
    type: "structure",
    superclassRole: ["none"],
    accessibleNameFrom: ["author"]
  },
  "doc-qna": {
    type: "structure",
    superclassRole: ["section"],
    accessibleNameFrom: ["author"]
  },
  "doc-subtitle": {
    type: "structure",
    superclassRole: ["sectionhead"],
    accessibleNameFrom: ["author"]
  },
  "doc-tip": {
    type: "structure",
    superclassRole: ["note"],
    accessibleNameFrom: ["author"]
  },
  "doc-toc": {
    type: "landmark",
    superclassRole: ["navigation"],
    accessibleNameFrom: ["author"]
  }
}, C1 = {
  "graphics-document": {
    type: "structure",
    superclassRole: ["document"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0
  },
  "graphics-object": {
    type: "structure",
    superclassRole: ["group"],
    accessibleNameFrom: ["contents", "author"]
  },
  "graphics-symbol": {
    type: "structure",
    superclassRole: ["img"],
    accessibleNameFrom: ["author"],
    accessibleNameRequired: !0,
    childrenPresentational: !0
  }
};
function Vn(e) {
  const t = parseInt(e.getAttribute("aria-valuemin") || "0"), n = parseInt(e.getAttribute("aria-valuemin") || "100");
  return Math.floor((n - t) / 2).toString();
}
function wa() {
  return Qt.supportedAttrs ? [...Qt.supportedAttrs] : [];
}
function vn(e) {
  return A(e) && wa().some(
    (t) => e.hasAttribute(t)
  );
}
function T1(e, t) {
  const n = Ee(t);
  if (!n)
    return;
  if (n.deprecated)
    return !1;
  const r = x(R(e, t));
  if (n.allowEmpty && !r)
    return !0;
  switch (n.type) {
    case "boolean":
    case "boolean-undefined":
    case "tristate":
    case "token":
      const a = n.type === "token" ? n.values : el[n.type];
      return a == null ? void 0 : a.includes(r.toLowerCase());
    case "token-list":
      const i = he(r);
      return i.length > 0 && i.every(
        (s) => n.values !== void 0 && n.values.includes(s)
      );
    case "idref":
      try {
        const s = oe(e);
        return !!(r && s.getElementById(r));
      } catch {
        throw new TypeError("Cannot resolve id references for partial DOM");
      }
    case "idref-list":
      return le(e, t).some((s) => !!s);
    case "integer":
      const o = n.minValue ? n.minValue : -1 / 0;
      return /^[-+]?[0-9]+$/.test(r) && parseInt(r) >= o;
    case "number":
      const l = r.match(/^[-+]?([0-9]*)\.?([0-9]*)$/);
      return !!(l && (l[1] || l[2]));
    case "string":
      return r !== "";
    default:
      return !1;
  }
}
function q(e, t) {
  const n = Zt[e] || v1[e] || C1[e];
  if (!n || n.deprecated)
    return null;
  const { variants: r, ...a } = n;
  if (!t || !r)
    return a;
  let i = null;
  for (const o in r) {
    const { selector: l, ...s } = r[o];
    if (typeof l == "string" ? t.matches(l) : l(t)) {
      i = s;
      break;
    }
  }
  return i ? {
    ...a,
    ...i
  } : a;
}
function ba(e, t) {
  var n, r, a, i;
  if (!t && (t = C(e, { dpub: !0, allowAbstract: !0 }) || void 0, !t))
    return null;
  const o = q(t, e);
  if (!o)
    return null;
  const l = [t], s = [...o.superclassRole];
  let u;
  for (; u = s.pop(); ) {
    if (l.includes(u))
      continue;
    l.push(u);
    const c = u === "roletype" ? Qt : q(u, e);
    c && (s.push(...c.superclassRole), (n = c.requiredAttrs) != null && n.length && ((r = o.requiredAttrs) != null && r.length ? o.requiredAttrs.push(...c.requiredAttrs) : o.requiredAttrs = c.requiredAttrs), (a = c.supportedAttrs) != null && a.length && ((i = o.supportedAttrs) != null && i.length ? o.supportedAttrs.push(...c.supportedAttrs) : o.supportedAttrs = c.supportedAttrs));
  }
  return o.requiredAttrs && (o.requiredAttrs = qt(o.requiredAttrs)), o.supportedAttrs && (o.supportedAttrs = qt(o.supportedAttrs)), o;
}
function V(e, t) {
  var n;
  return !t && (t = C(e, { dpub: !0, allowAbstract: !0 }) || void 0, !t) ? null : ((n = q(t, e)) == null ? void 0 : n.type) || null;
}
function Aa(e, t) {
  const n = C(e) ?? "";
  if (!n)
    return !1;
  const r = q(n);
  return (Array.isArray(t) ? t : [t]).some(
    (a) => {
      var i;
      return (i = r == null ? void 0 : r.accessibleNameFrom) == null ? void 0 : i.includes(a);
    }
  );
}
function Cn(e) {
  return Object.keys(Zt).filter((t) => Zt[t].type === e);
}
function E1(e) {
  var t;
  return !!((t = q(e)) != null && t.visualContent);
}
const X = {
  a: {
    variants: {
      href: {
        selector: "[href]",
        implicitRole: "link",
        allowedRoles: [
          "button",
          "checkbox",
          "menuitem",
          "menuitemcheckbox",
          "menuitemradio",
          "option",
          "radio",
          "switch",
          "tab",
          "treeitem",
          "doc-backlink",
          "doc-biblioref",
          "doc-glossref",
          "doc-noteref"
        ],
        contentTypes: ["flow", "phrasing", "interactive"],
        namingMethods: ["subtreeText"],
        focusable: !0
      }
    },
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  abbr: {
    contentTypes: ["flow", "phrasing"]
  },
  address: {
    implicitRole: "group",
    contentTypes: ["flow"]
  },
  area: {
    variants: {
      href: {
        selector: "[href]",
        implicitRole: "link",
        allowedRoles: ["link"],
        focusable: !0
      }
    },
    implicitRole: "generic",
    allowedRoles: ["button", "link", "generic"],
    contentTypes: ["flow", "phrasing"],
    namingMethods: ["altText"]
  },
  article: {
    implicitRole: "article",
    allowedRoles: [
      "application",
      "article",
      "document",
      "feed",
      "main",
      "none",
      "presentation",
      "region"
    ],
    contentTypes: ["flow", "sectioning"],
    allowedShadowDom: !0
  },
  aside: {
    variants: {
      hasSectioningParent: {
        selector: (e) => !!kt(e) && !Ye(e),
        implicitRole: "generic"
      }
    },
    implicitRole: "complementary",
    allowedRoles: [
      "complementary",
      "feed",
      "none",
      "note",
      "presentation",
      "region",
      "search",
      "doc-dedication",
      "doc-example",
      "doc-footnote",
      "doc-pullquote",
      "doc-tip"
    ],
    contentTypes: ["flow", "sectioning"],
    allowedShadowDom: !0
  },
  audio: {
    variants: {
      controls: {
        selector: "[controls]",
        contentTypes: ["flow", "phrasing", "embedded", "interactive"]
      }
    },
    allowedRoles: ["application"],
    contentTypes: ["flow", "phrasing", "embedded"],
    visualContent: !0,
    hiddenText: !0
  },
  b: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  base: {
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["metadata"]
  },
  bdi: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  bdo: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  blockquote: {
    implicitRole: "blockquote",
    contentTypes: ["flow"],
    allowedShadowDom: !0
  },
  body: {
    implicitRole: "generic",
    allowedRoles: ["generic"],
    allowedShadowDom: !0
  },
  br: {
    allowedRoles: ["presentation", "none"],
    allowedAttrs: ["aria-hidden"],
    contentTypes: ["flow", "phrasing"],
    namingMethods: ["titleText", "singleSpace"]
  },
  button: {
    implicitRole: "button",
    contentTypes: ["flow", "phrasing", "interactive"],
    allowedRoles: [
      "button",
      "checkbox",
      "link",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "option",
      "radio",
      "switch",
      "tab"
    ],
    allowedDisabledAttr: !0,
    // 5.4 button Element
    namingMethods: ["subtreeText"],
    focusable: !0,
    visualContent: !0
  },
  canvas: {
    contentTypes: ["flow", "phrasing", "embedded"],
    visualContent: !0
  },
  caption: {
    implicitRole: "caption",
    allowedRoles: ["caption"]
  },
  cite: {
    contentTypes: ["flow", "phrasing"]
  },
  code: {
    implicitRole: "code",
    contentTypes: ["flow", "phrasing"]
  },
  col: {
    allowedRoles: null,
    allowedAttrs: null
  },
  colgroup: {
    allowedRoles: null,
    allowedAttrs: null
  },
  data: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  datalist: {
    implicitRole: "listbox",
    implicitAttrs: {
      // Note: even though the value of aria-multiselectable is based
      // on the attributes, we don't currently need to know the
      // precise value. however, this allows us to make the attribute
      // future proof in case we ever do need to know it
      "aria-multiselectable": "false"
    },
    allowedRoles: ["listbox"],
    allowedAttrs: ["aria-multiselectable"],
    contentTypes: ["flow", "phrasing"]
  },
  dd: {
    implicitRole: "definition",
    allowedRoles: null,
    // dts and dds can be wrapped in divs and the div will pass through the presentation role
    inheritsPresentationChain: ["dl", "div"]
  },
  del: {
    implicitRole: "deletion",
    contentTypes: ["flow", "phrasing"]
  },
  details: {
    variants: {
      hasSummary: {
        selector: (e) => !!e.querySelector("summary"),
        focusable: !0
      }
    },
    implicitRole: "group",
    allowedRoles: ["group"],
    contentTypes: ["flow", "interactive"]
  },
  dfn: {
    implicitRole: "term",
    contentTypes: ["flow", "phrasing"]
  },
  dialog: {
    implicitRole: "dialog",
    allowedRoles: ["dialog", "alertdialog"],
    contentTypes: ["flow"]
  },
  div: {
    variants: {
      dlChild: {
        selector: (e) => !!e.parentElement && b(e.parentElement) === "dl",
        allowedRoles: ["generic", "none", "presentation"]
      }
    },
    implicitRole: "generic",
    contentTypes: ["flow"],
    inheritsPresentationChain: ["dl"],
    allowedShadowDom: !0
  },
  dl: {
    allowedRoles: ["group", "list", "none", "presentation"],
    contentTypes: ["flow"]
  },
  dt: {
    implicitRole: "term",
    allowedRoles: ["term", "listitem"],
    // dts and dds can be wrapped in divs and the div will pass through the presentation role
    inheritsPresentationChain: ["dl", "div"]
  },
  em: {
    implicitRole: "emphasis",
    contentTypes: ["flow", "phrasing"]
  },
  embed: {
    implicitRole: "group",
    allowedRoles: [
      "application",
      "document",
      "img",
      "group",
      "none",
      "presentation"
    ],
    contentTypes: ["flow", "phrasing", "embedded", "interactive"]
  },
  fieldset: {
    implicitRole: "group",
    allowedRoles: ["group", "none", "presentation", "radiogroup"],
    allowedDisabledAttr: !0,
    contentTypes: ["flow"],
    // 5.5 fieldset and legend Elements
    namingMethods: ["fieldsetLegendText"]
  },
  figcaption: {
    allowedRoles: ["group", "none", "presentation"]
  },
  figure: {
    variants: {
      hasFigcaption: {
        selector: (e) => !!e.querySelector("figcaption"),
        allowedRoles: ["figure"]
      }
    },
    implicitRole: "figure",
    contentTypes: ["flow"],
    // 5.9 figure and figcaption Elements
    namingMethods: ["figureText", "titleText"]
  },
  footer: {
    variants: {
      hasSectioningParent: {
        selector: (e) => !!kt(e, !0),
        implicitRole: "generic",
        allowedRoles: [
          "generic",
          "group",
          "none",
          "presentation",
          "doc-footnote"
        ]
      }
    },
    implicitRole: "contentinfo",
    contentTypes: ["flow"],
    allowedRoles: [
      "contentinfo",
      "group",
      "none",
      "presentation",
      "doc-footnote"
    ],
    allowedShadowDom: !0
  },
  form: {
    implicitRole: "form",
    contentTypes: ["flow"],
    allowedRoles: ["form", "search", "none", "presentation"]
  },
  h1: {
    implicitRole: "heading",
    implicitAttrs: {
      "aria-level": "1"
    },
    allowedRoles: ["heading", "none", "presentation", "tab", "doc-subtitle"],
    contentTypes: ["flow", "heading"],
    allowedShadowDom: !0
  },
  h2: {
    implicitRole: "heading",
    implicitAttrs: {
      "aria-level": "2"
    },
    allowedRoles: ["heading", "none", "presentation", "tab", "doc-subtitle"],
    contentTypes: ["flow", "heading"],
    allowedShadowDom: !0
  },
  h3: {
    implicitRole: "heading",
    implicitAttrs: {
      "aria-level": "3"
    },
    allowedRoles: ["heading", "none", "presentation", "tab", "doc-subtitle"],
    contentTypes: ["flow", "heading"],
    allowedShadowDom: !0
  },
  h4: {
    implicitRole: "heading",
    implicitAttrs: {
      "aria-level": "4"
    },
    allowedRoles: ["heading", "none", "presentation", "tab", "doc-subtitle"],
    contentTypes: ["flow", "heading"],
    allowedShadowDom: !0
  },
  h5: {
    implicitRole: "heading",
    implicitAttrs: {
      "aria-level": "5"
    },
    allowedRoles: ["heading", "none", "presentation", "tab", "doc-subtitle"],
    contentTypes: ["flow", "heading"],
    allowedShadowDom: !0
  },
  h6: {
    implicitRole: "heading",
    implicitAttrs: {
      "aria-level": "6"
    },
    allowedRoles: ["heading", "none", "presentation", "tab", "doc-subtitle"],
    contentTypes: ["flow", "heading"],
    allowedShadowDom: !0
  },
  head: {
    allowedRoles: null,
    allowedAttrs: null,
    hiddenText: !0
  },
  header: {
    variants: {
      hasSectioningParent: {
        selector: (e) => !!kt(e, !0),
        implicitRole: "generic",
        allowedRoles: [
          "generic",
          "group",
          "none",
          "presentation",
          "doc-footnote"
        ]
      }
    },
    implicitRole: "banner",
    contentTypes: ["flow"],
    allowedRoles: ["banner", "group", "none", "presentation", "doc-footnote"],
    allowedShadowDom: !0
  },
  hgroup: {
    implicitRole: "generic",
    contentTypes: ["flow", "heading"]
  },
  hr: {
    implicitRole: "separator",
    allowedRoles: ["none", "presentation", "doc-pagebreak"],
    contentTypes: ["flow"],
    namingMethods: ["titleText", "singleSpace"]
  },
  html: {
    implicitRole: "document",
    allowedRoles: null,
    allowedAttrs: null
  },
  i: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  iframe: {
    allowedRoles: ["application", "document", "img", "none", "presentation"],
    contentTypes: ["flow", "phrasing", "embedded", "interactive"],
    visualContent: !0,
    hiddenText: !0
  },
  img: {
    variants: {
      nonEmptyAlt: {
        selector: (e) => !!R(e, "alt"),
        implicitRole: "img",
        allowedRoles: [
          "button",
          "checkbox",
          "img",
          "link",
          "menuitem",
          "menuitemcheckbox",
          "menuitemradio",
          "option",
          "progressbar",
          "radio",
          "scrollbar",
          "separator",
          "slider",
          "switch",
          "tab",
          "treeitem",
          "doc-cover"
        ]
      },
      emptyAlt: {
        selector: (e) => _l(e, "alt"),
        implicitRole: "presentation",
        allowedRoles: ["presentation"],
        allowedAttrs: ["aria-hidden"]
      },
      usemap: {
        selector: "[usemap]",
        contentTypes: ["flow", "phrasing", "embedded", "interactive"]
      }
    },
    implicitRole: "img",
    allowedRoles: ["img"],
    allowedAttrs: ["aria-hidden"],
    // TODO if required remove `phrasing`, because browsers
    // insert a space between an img's accessible name and other
    // elements' accessible names
    contentTypes: ["flow", "phrasing", "embedded"],
    // 5.10 img Element
    namingMethods: ["altText"],
    visualContent: !0
  },
  input: {
    variants: {
      button: {
        selector: '[type="button"]',
        implicitRole: "button",
        allowedRoles: [
          "button",
          "checkbox",
          "combobox",
          "link",
          "menuitem",
          "menuitemcheckbox",
          "menuitemradio",
          "option",
          "radio",
          "switch",
          "tab"
        ]
      },
      buttonType: {
        selector: Wt(["submit", "reset"]),
        implicitRole: "button",
        allowedRoles: ["button"],
        namingMethods: ["valueText", "titleText", "buttonDefaultText"]
      },
      checkboxAriaPressed: {
        selector: '[type="checkbox"][aria-pressed]',
        implicitRole: "checkbox",
        implicitAttrs: {
          "aria-checked": "false"
        },
        allowedRoles: ["button", "menuitemcheckbox", "option", "switch"]
      },
      checkboxNoAriaPressed: {
        selector: '[type="checkbox"]:not([aria-pressed])',
        implicitRole: "checkbox",
        implicitAttrs: {
          "aria-checked": "false"
        },
        allowedRoles: ["menuitemcheckbox", "option", "switch"]
      },
      hidden: {
        selector: '[type="hidden"]',
        allowedRoles: null,
        allowedAttrs: null,
        contentTypes: ["flow", "phrasing"],
        focusable: !1
      },
      image: {
        selector: '[type="image"]',
        implicitRole: "button",
        allowedRoles: [
          "button",
          "link",
          "menuitem",
          "menuitemcheckbox",
          "menuitemradio",
          "radio",
          "switch"
        ],
        // 5.3 input type="image"
        namingMethods: [
          "altText",
          "valueText",
          "labelText",
          "titleText",
          "buttonDefaultText"
        ]
      },
      number: {
        selector: '[type="number"]',
        implicitRole: "spinbutton"
      },
      radio: {
        selector: '[type="radio"]',
        implicitRole: "radio",
        implicitAttrs: {
          "aria-checked": "false",
          // TODO calculate setsize and posinset values
          "aria-setsize": "1",
          "aria-posinset": "1"
        },
        allowedRoles: ["radio", "menuitemradio"]
      },
      range: {
        selector: '[type="range"]',
        implicitRole: "slider",
        allowedRoles: ["slider"]
      },
      // TODO after updating standard, merge email, tel, text and url, if the differ only in `selector`
      email: {
        selector: (e) => e.matches('[type="email"]') && !Ae(e),
        implicitRole: "textbox",
        allowedRoles: ["textbox"]
      },
      search: {
        selector: (e) => e.matches('[type="search"]') && !Ae(e),
        implicitRole: "searchbox",
        allowedRoles: ["searchbox"]
      },
      tel: {
        selector: (e) => e.matches('[type="tel"]') && !Ae(e),
        implicitRole: "textbox",
        allowedRoles: ["textbox", "spinbutton"]
      },
      url: {
        selector: (e) => e.matches('[type="url"]') && !Ae(e),
        implicitRole: "textbox",
        allowedRoles: ["textbox"]
      },
      hasDatalist: {
        selector: (e) => e.matches(
          Wt(["text", "search", "tel", "url", "email"])
        ) && Ae(e),
        implicitRole: "combobox",
        allowedRoles: ["combobox"],
        disallowedAttrs: ["aria-haspopup"]
      },
      noRoles: {
        selector: Wt([
          "color",
          "file",
          "password",
          "date",
          "datetime-local",
          "month",
          "week",
          "time"
        ]),
        allowedRoles: null
      },
      text: {
        selector: (e) => e.matches('[type="text"], :not([type])') && !Ae(e)
      }
    },
    // input type=text or with a missing or invalid type, with no datalist
    implicitRole: "textbox",
    allowedRoles: ["textbox", "combobox", "searchbox", "spinbutton"],
    allowedDisabledAttr: !0,
    contentTypes: ["flow", "phrasing", "interactive"],
    // 5.1 input type="text", input type="password", input type="search", input type="tel", input type="url"
    // 5.7 Other Form Elements
    namingMethods: ["labelText", "placeholderText"],
    focusable: !0,
    visualContent: !0
  },
  ins: {
    implicitRole: "insertion",
    contentTypes: ["flow", "phrasing"]
  },
  kbd: {
    contentTypes: ["flow", "phrasing"]
  },
  label: {
    contentTypes: ["flow", "phrasing", "interactive"]
  },
  legend: {},
  li: {
    implicitRole: "listitem",
    implicitAttrs: {
      // TODO calculate setsize and posinset values
      "aria-setsize": "1",
      "aria-posinset": "1"
    },
    allowedRoles: [
      "listitem",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "option",
      "none",
      "presentation",
      "radio",
      "separator",
      "tab",
      "treeitem"
      // Deprecated DPub roles
      // 'doc-biblioentry',
      // 'doc-endnote',
    ],
    inheritsPresentationChain: ["ol", "ul"]
  },
  link: {
    variants: {
      allowedInBody: {
        // TODO check if rel has "body-ok" values @see https://html.spec.whatwg.org/multipage/links.html#body-ok
        selector: "[rel], [itemprop]",
        contentTypes: ["metadata", "flow", "phrasing"]
      }
    },
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["metadata"]
  },
  main: {
    implicitRole: "main",
    allowedRoles: ["main"],
    contentTypes: ["flow"],
    allowedShadowDom: !0
  },
  map: {
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["flow", "phrasing"]
  },
  mark: {
    implicitRole: "mark",
    contentTypes: ["flow", "phrasing"]
  },
  math: {
    implicitRole: "math",
    allowedRoles: ["math"],
    contentTypes: ["phrasing", "flow", "embedded"],
    visualContent: !0
  },
  menu: {
    implicitRole: "list",
    contentTypes: ["flow"],
    allowedRoles: [
      "group",
      "list",
      "listbox",
      "menu",
      "menubar",
      "none",
      "presentation",
      "radiogroup",
      "tablist",
      "toolbar",
      "tree"
      // Deprecated roles
      // 'directory',
    ]
  },
  meta: {
    variants: {
      itemprop: {
        selector: "[itemprop]",
        contentTypes: ["metadata", "flow", "phrasing"]
      }
    },
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["metadata"]
  },
  meter: {
    implicitRole: "meter",
    allowedRoles: ["meter"],
    disallowedAttrs: ["aria-valuemax", "aria-valuemin"],
    contentTypes: ["flow", "phrasing"],
    visualContent: !0
  },
  nav: {
    implicitRole: "navigation",
    allowedRoles: [
      "menu",
      "menubar",
      "navigation",
      "none",
      "presentation",
      "tablist",
      "doc-index",
      "doc-pagelist",
      "doc-toc"
    ],
    contentTypes: ["flow", "sectioning"],
    allowedShadowDom: !0
  },
  noscript: {
    contentTypes: ["metadata", "flow", "phrasing"],
    allowedRoles: null,
    allowedAttrs: null,
    hiddenText: !0
  },
  object: {
    variants: {
      usemap: {
        selector: "[usemap]",
        contentTypes: ["flow", "phrasing", "embedded", "interactive"]
      }
    },
    allowedRoles: ["application", "document", "img"],
    contentTypes: ["flow", "phrasing", "embedded"],
    visualContent: !0,
    hiddenText: !0
  },
  ol: {
    implicitRole: "list",
    contentTypes: ["flow"],
    allowedRoles: [
      "group",
      "list",
      "listbox",
      "menu",
      "menubar",
      "none",
      "presentation",
      "radiogroup",
      "tablist",
      "toolbar",
      "tree"
      // Deprecated role
      // 'directory',
    ]
  },
  optgroup: {
    implicitRole: "group",
    allowedRoles: ["group"],
    allowedDisabledAttr: !0
  },
  option: {
    implicitRole: "option",
    implicitAttrs: {
      "aria-selected": "false"
    },
    allowedRoles: ["option"],
    disallowedAttrs: ["aria-selected"],
    allowedDisabledAttr: !0
  },
  output: {
    implicitRole: "status",
    contentTypes: ["flow", "phrasing"],
    // 5.6 output Element
    namingMethods: ["subtreeText"]
  },
  p: {
    implicitRole: "paragraph",
    contentTypes: ["flow"],
    allowedShadowDom: !0
  },
  param: {
    allowedRoles: null,
    allowedAttrs: null
  },
  picture: {
    allowedRoles: null,
    allowedAttrs: ["aria-hidden"],
    // TODO if required remove `embedded`, because browsers do not hide text inside the picture element
    contentTypes: ["flow", "phrasing", "embedded"]
  },
  pre: {
    implicitRole: "generic",
    contentTypes: ["flow"]
  },
  progress: {
    implicitRole: "progressbar",
    implicitAttrs: {
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": "0"
    },
    allowedRoles: ["progressbar"],
    disallowedAttrs: ["aria-valuemax"],
    contentTypes: ["flow", "phrasing"],
    visualContent: !0
  },
  q: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  rp: {},
  rt: {},
  ruby: {
    contentTypes: ["flow", "phrasing"]
  },
  s: {
    implicitRole: "deletion",
    contentTypes: ["flow", "phrasing"]
  },
  samp: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  script: {
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["metadata", "flow", "phrasing"],
    hiddenText: !0
  },
  section: {
    variants: {
      hasAriaLabel: {
        selector: Ye,
        implicitRole: "region",
        allowedRoles: [
          "alert",
          "alertdialog",
          "application",
          "banner",
          "complementary",
          "contentinfo",
          "dialog",
          "document",
          "feed",
          "group",
          "log",
          "main",
          "marquee",
          "navigation",
          "none",
          "note",
          "presentation",
          "region",
          "search",
          "status",
          "tabpanel",
          "doc-abstract",
          "doc-acknowledgments",
          "doc-afterword",
          "doc-appendix",
          "doc-bibliography",
          "doc-chapter",
          "doc-colophon",
          "doc-conclusion",
          "doc-credit",
          "doc-credits",
          "doc-dedication",
          "doc-endnotes",
          "doc-epigraph",
          "doc-epilogue",
          "doc-errata",
          "doc-example",
          "doc-foreword",
          "doc-glossary",
          "doc-index",
          "doc-introduction",
          "doc-notice",
          "doc-pagelist",
          "doc-part",
          "doc-preface",
          "doc-prologue",
          "doc-pullquote",
          "doc-qna",
          "doc-toc"
        ]
      }
    },
    allowedRoles: [
      "alert",
      "alertdialog",
      "application",
      "banner",
      "complementary",
      "contentinfo",
      "dialog",
      "document",
      "feed",
      "group",
      "log",
      "main",
      "marquee",
      "navigation",
      "none",
      "note",
      "presentation",
      "search",
      "status",
      "tabpanel",
      "doc-abstract",
      "doc-acknowledgments",
      "doc-afterword",
      "doc-appendix",
      "doc-bibliography",
      "doc-chapter",
      "doc-colophon",
      "doc-conclusion",
      "doc-credit",
      "doc-credits",
      "doc-dedication",
      "doc-endnotes",
      "doc-epigraph",
      "doc-epilogue",
      "doc-errata",
      "doc-example",
      "doc-foreword",
      "doc-glossary",
      "doc-index",
      "doc-introduction",
      "doc-notice",
      "doc-pagelist",
      "doc-part",
      "doc-preface",
      "doc-prologue",
      "doc-pullquote",
      "doc-qna",
      "doc-toc"
    ],
    contentTypes: ["flow", "sectioning"],
    allowedShadowDom: !0
  },
  select: {
    variants: {
      combobox: {
        selector: (e) => {
          const t = j(e, "size");
          return !e.hasAttribute("multiple") && (!t || t <= 1);
        },
        implicitRole: "combobox",
        allowedRoles: ["combobox", "menu"],
        disallowedAttrs: ["aria-multiselectable"]
      },
      listbox: {
        selector: (e) => e.hasAttribute("multiple") || (j(e, "size") || 0) > 1,
        implicitRole: "listbox",
        allowedRoles: ["listbox"],
        disallowedAttrs: ["aria-multiselectable"]
      },
      hasAriaLabel: {
        selector: Ye,
        implicitRole: "region"
      }
    },
    implicitRole: "generic",
    implicitAttrs: {
      "aria-valuenow": ""
    },
    allowedDisabledAttr: !0,
    contentTypes: ["flow", "phrasing", "interactive"],
    // 5.7 Other form elements
    namingMethods: ["labelText"],
    focusable: !0,
    visualContent: !0
  },
  slot: {
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["flow", "phrasing"]
  },
  small: {
    implicitRole: "generic",
    allowedRoles: null,
    contentTypes: ["flow", "phrasing"]
  },
  source: {
    allowedRoles: null,
    allowedAttrs: null
  },
  span: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"],
    allowedShadowDom: !0
  },
  strong: {
    implicitRole: "strong",
    contentTypes: ["flow", "phrasing"]
  },
  style: {
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["metadata"],
    hiddenText: !0
  },
  sub: {
    implicitRole: "subscript",
    contentTypes: ["flow", "phrasing"]
  },
  summary: {
    allowedRoles: null,
    // 5.8 summary Element
    namingMethods: ["subtreeText"],
    focusable: !0
  },
  sup: {
    implicitRole: "superscript",
    contentTypes: ["flow", "phrasing"]
  },
  svg: {
    implicitRole: "graphics-document",
    contentTypes: ["flow", "phrasing", "embedded"],
    namingMethods: ["svgTitleText"],
    visualContent: !0
  },
  table: {
    implicitRole: "table",
    contentTypes: ["flow"],
    // 5.11 table Element
    namingMethods: ["tableCaptionText", "tableSummaryText"]
  },
  tbody: {
    implicitRole: "rowgroup",
    inheritsPresentationChain: ["table"]
  },
  td: {
    variants: {
      inTable: {
        selector: Et,
        implicitRole: "cell",
        allowedRoles: ["cell"]
      },
      inGrid: {
        selector: qn,
        implicitRole: "gridcell",
        allowedRoles: ["gridcell"]
      }
    },
    inheritsPresentationChain: ["tr"]
  },
  template: {
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["metadata", "flow", "phrasing"],
    hiddenText: !0
  },
  textarea: {
    implicitRole: "textbox",
    implicitAttrs: {
      "aria-multiline": "true"
    },
    allowedRoles: ["textbox"],
    allowedDisabledAttr: !0,
    contentTypes: ["flow", "phrasing", "interactive"],
    // 5.1 textarea
    namingMethods: ["labelText", "placeholderText"],
    focusable: !0,
    visualContent: !0
  },
  tfoot: {
    implicitRole: "rowgroup",
    inheritsPresentationChain: ["table"]
  },
  // TODO continue
  th: {
    variants: {
      nonHeaderInTable: {
        selector: (e) => e instanceof HTMLTableCellElement && !jt(e) && Et(e),
        implicitRole: "cell",
        allowedRoles: ["columnheader", "rowheader", "cell"]
      },
      nonHeaderInGrid: {
        selector: (e) => e instanceof HTMLTableCellElement && !jt(e) && qn(e),
        implicitRole: "gridcell",
        allowedRoles: ["columnheader", "rowheader", "gridcell"]
      },
      colHeader: {
        selector: (e) => {
          const t = e instanceof HTMLTableCellElement ? Te(e) : null;
          return !!t && ["col", "colgroup"].includes(t);
        },
        implicitRole: "columnheader",
        allowedRoles: ["columnheader"]
      },
      rowHeader: {
        selector: (e) => {
          const t = e instanceof HTMLTableCellElement ? Te(e) : null;
          return !!t && ["row", "rowgroup"].includes(t);
        },
        implicitRole: "rowheader",
        allowedRoles: ["rowheader"]
      }
    },
    inheritsPresentationChain: ["tr"]
  },
  thead: {
    implicitRole: "rowgroup",
    inheritsPresentationChain: ["table"]
  },
  time: {
    implicitRole: "time",
    contentTypes: ["flow", "phrasing"]
  },
  title: {
    allowedRoles: null,
    allowedAttrs: null,
    contentTypes: ["metadata"],
    hiddenText: !0
  },
  tr: {
    variants: {
      inTable: {
        selector: Et,
        allowedRoles: ["row"]
      }
    },
    implicitRole: "row",
    inheritsPresentationChain: ["thead", "tbody", "tfoot", "table"]
  },
  track: {
    allowedRoles: null,
    allowedAttrs: null
  },
  u: {
    implicitRole: "generic",
    contentTypes: ["flow", "phrasing"]
  },
  ul: {
    implicitRole: "list",
    contentTypes: ["flow"],
    allowedRoles: [
      "group",
      "list",
      "listbox",
      "menu",
      "menubar",
      "none",
      "presentation",
      "radiogroup",
      "tablist",
      "toolbar",
      "tree"
      // Deprecated
      // 'directory',
    ]
  },
  var: {
    contentTypes: ["flow", "phrasing"]
  },
  video: {
    variants: {
      controls: {
        selector: "[controls]",
        contentTypes: ["flow", "phrasing", "embedded", "interactive"]
      }
    },
    allowedRoles: ["application"],
    contentTypes: ["flow", "phrasing", "embedded"],
    visualContent: !0,
    hiddenText: !0
  },
  wbr: {
    allowedRoles: ["presentation", "none"],
    allowedAttrs: ["aria-hidden"],
    contentTypes: ["flow", "phrasing"]
  }
};
let Ft = "";
function kt(e, t = !1) {
  return Ft || (Ft = // Implicit sectioning elements
  R1("sectioning").map((n) => `${n}:not([role])`).join(", ") + ", " + // Explicit sectioning elements
  a1("role", [
    "article",
    "complementary",
    "navigation",
    "region"
  ])), e.closest(
    Ft + (t ? ', main:not([role]), [role="main"]' : "")
  );
}
function R1(e) {
  return Object.keys(X).filter((t) => {
    const n = { ...X[t] };
    return n.contentTypes ? n.contentTypes.includes(e) : !1;
  });
}
function Wt(e) {
  return e.map((t) => `[type="${t}"]`).join(",");
}
function te(e, t = {}) {
  const n = b(e), r = X[n];
  if (r) {
    if (!r.variants || t.skipMergingVariant)
      return r;
  } else
    return null;
  const { variants: a, ...i } = r;
  let o = null;
  for (const l in a) {
    const { selector: s, ...u } = a[l];
    if (typeof s == "string" ? e.matches(s) : s(e)) {
      o = u;
      break;
    }
  }
  return o ? {
    ...i,
    ...o
  } : i;
}
function I1(e) {
  return Object.keys(X).filter((t) => {
    var n;
    if (X[t][e] !== void 0)
      return !0;
    if (X[t].variants) {
      const r = (n = X[t]) == null ? void 0 : n.variants;
      for (const a in r)
        if (r[a][e] !== void 0)
          return !0;
    }
    return !1;
  });
}
function x1(e) {
  const t = b(e);
  return !!X[t];
}
function F1(e, t) {
  var n, r;
  return A(e) ? !!((r = (n = te(e)) == null ? void 0 : n.contentTypes) != null && r.includes(t)) : ie(e, { allowEmpty: !0 }) ? t === "phrasing" : !1;
}
function k1(e) {
  var t;
  return !!((t = te(e)) != null && t.visualContent);
}
function Da(e) {
  var t;
  return !!((t = X[b(e) || ""]) != null && t.allowedDisabledAttr);
}
function W1(e) {
  var t;
  return !!((t = X[b(e) || ""]) != null && t.allowedShadowDom);
}
function ya() {
  return /[\u0000-\uFFFF]/g;
}
function va() {
  return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
}
function Ca() {
  return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&£¢¥§€()*+,\-.\/:;<=>?@\[\]^_`{|}~±]/g;
}
function Ta() {
  return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
}
function N1() {
  let e = {};
  return {
    get(t) {
      return e[t];
    },
    set(t, n) {
      e[t] = n;
    },
    reset() {
      e = {};
    }
  };
}
const M1 = N1();
function L1(e) {
  const t = e ? e.getAttribute("content") : null;
  return !e || !t ? null : t.split(/[;,]/).reduce((n, r) => {
    const a = r.trim();
    if (!a)
      return n;
    const [i, o] = a.split("=");
    if (!i || !o)
      return n;
    const l = i.toLowerCase().trim();
    let s = o.toLowerCase().trim();
    return l === "maximum-scale" && s === "yes" && (s = "1"), l === "maximum-scale" && parseFloat(s) < 0 || (n[l] = s), n;
  }, {});
}
function G1(e, t = 80) {
  var n;
  const r = e.outerHTML, a = e.innerHTML || "";
  if (!e.childElementCount || a.length < t)
    return r;
  const i = e.lastElementChild;
  return r.replace(
    a,
    `...${(n = i == null ? void 0 : i.outerHTML) == null ? void 0 : n.replace(
      i.innerHTML,
      ""
    )}`
  );
}
function q1(e) {
  const t = [e.id, e.xpath];
  return e.group && t.push(e.group), String(S1(t.join("-")));
}
function S1(e, t = 0) {
  let n = 3735928559 ^ t, r = 1103547991 ^ t;
  for (let a = 0, i; a < e.length; a++)
    i = e.charCodeAt(a), n = Math.imul(n ^ i, 2654435761), r = Math.imul(r ^ i, 1597334677);
  return n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), 4294967296 * (2097151 & r) + (n >>> 0);
}
var f = /* @__PURE__ */ ((e) => (e.violation = "violation", e.inapplicable = "inapplicable", e.incomplete = "incomplete", e))(f || {});
function $n({
  element: e,
  type: t = "violation",
  variant: n,
  id: r,
  group: a
}) {
  const i = i1(e), o = l1(e), l = q1({ id: r, xpath: o, group: a }), s = {
    element: e,
    selector: i,
    type: t,
    xpath: o,
    fingerprint: l
  };
  return n && (s.variant = n), s.snippet = e instanceof Element ? G1(e) : "", s;
}
function Kt(e) {
  let t = [];
  return {
    add: (n, r, a) => {
      t.push(
        $n({
          element: n,
          type: r,
          variant: a,
          id: e.id,
          group: e.group
        })
      );
    },
    set: (n, r, a) => {
      t = n.map(
        (i) => $n({
          element: i,
          type: r,
          variant: a,
          id: e.id,
          group: e.group
        })
      );
    },
    get: () => t,
    getCount: () => t.length,
    getCountOfType: (n) => t.filter(({ type: r }) => r === n).length
  };
}
function P1(e) {
  const t = /* @__PURE__ */ new Map();
  let n = 0;
  return {
    add: (r, a, i) => {
      t.has(a) || t.set(
        a,
        Kt({ ...e, group: a })
      );
      const o = t.get(a);
      o && o.add(r, i), n++;
    },
    set: (r, a, i) => {
      t.has(a) || t.set(
        a,
        Kt({ ...e, group: a })
      );
      const o = t.get(a);
      o && o.set(r, i), n += r.length;
    },
    get: () => Array.from(t.entries()).reduce(
      (r, [a, i]) => ({ ...r, [a]: i.get() }),
      {}
    ),
    getCount: () => n,
    getCountOfType: (r) => Array.from(t.values()).reduce(
      (a, i) => a + i.getCountOfType(r),
      0
    )
  };
}
function B1(e, t, n) {
  const r = {
    reviewed: 0,
    passed: 0,
    violation: 0,
    inapplicable: 0,
    incomplete: 0
  };
  return {
    addReviewed: (a = 1) => {
      r.reviewed += a;
    },
    setReviewed: (a) => {
      r.reviewed = a;
    },
    get: () => {
      const a = e.getCount() + t.getCount();
      if (a > r.reviewed) {
        const i = new z1(
          `[${n.id}] use addReviewed or setReviewed method of count store, or check why there are more issues than reviewed elements: { issuesCount: ${a}, "count.reviewed": ${r.reviewed} }`
        );
        console.error(i);
      }
      r.passed = r.reviewed - a;
      for (const i in f)
        r[i] = e.getCountOfType(
          f[i]
        ) + t.getCountOfType(
          f[i]
        );
      return r;
    }
  };
}
class z1 extends Error {
  constructor() {
    super(...arguments), Y(this, "name", "StoreCountMismatchError");
  }
}
const Ea = {};
for (const e of Object.values(mr))
  Ea[e.key] = e;
var h = /* @__PURE__ */ ((e) => (e.A = "A", e.AA = "AA", e.AAA = "AAA", e.BestPractice = "Best Practice", e.Experimental = "Experimental", e))(h || {});
function m(e) {
  const { analyze: t, id: n, outputType: r, actIds: a } = e, i = Ea[n];
  if (!i)
    throw new Error(`Can't find the rule descriptor for id ${e.id}`);
  return {
    description: i.description,
    display: i.display,
    errorMessage: i.errorMessage,
    id: n,
    actIds: a,
    level: i.level,
    outputType: r,
    recommendation: i.recommendation,
    references: i.references,
    severity: i.severity,
    uwId: i.id,
    analyze: function(o, l) {
      const s = Kt({ id: n }), u = P1({ id: n }), c = B1(s, u, { id: n });
      return t({ issues: s, count: c, issuesGroup: u, ruleSpecificOptions: o }, l), {
        count: c.get(),
        issues: s.get(),
        issuesGroup: u.get()
      };
    }
  };
}
m({
  id: "accesskeys",
  uwId: 42,
  severity: 10,
  level: h.BestPractice,
  outputType: "group",
  description: "All accesskey attribute values in a document must be unique. Put another way, accesskeys must not be repeated to prevent unexpected effects for keyboard users.",
  analyze(e) {
    const t = wn("accesskey");
    Object.keys(t).forEach((n) => {
      const r = t[n];
      e.count.addReviewed(r.length), r.length > 1 && r.forEach((a) => {
        e.issuesGroup.add(a, n);
      });
    });
  }
});
m({
  id: "area-alt",
  actIds: ["c487ae"],
  errorHandle: {},
  analyze(e) {
    const t = p(document, "map area[href]", {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      W(n, {
        altAttrNames: ["alt", "title"]
      }) || e.issues.add(
        n,
        f.violation,
        n.hasAttribute("alt") ? "emptyAlt" : "missingAlt"
      );
    });
  }
});
m({
  id: "aria-allowed-attr",
  uwId: 144,
  actIds: ["5c01ea"],
  severity: 1,
  level: h.A,
  description: "Not all ARIA role-attribute combinations are valid. This Rule checks that each role is supplied with allowed attributes.",
  analyze(e) {
    const t = pr().map((r) => `[${r}]`).join(","), n = p(document, t).filter(
      (r) => r.getAttributeNames().length > 0
    );
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = C(r), i = r.getAttributeNames();
      j1(r, a, i) ? !a && !Lr(r) && !M(r) ? e.issues.add(r, f.incomplete) : e.issues.add(r) : U1(r, a, i) && (x(fe(r, { subtreeDescendant: !0 })) !== "" ? e.issues.add(r, f.incomplete) : e.issues.add(r));
    });
  }
});
const _1 = [
  "aria-posinset",
  "aria-setsize",
  "aria-expanded",
  "aria-level"
], H1 = ["applet", "input"], O1 = ["aria-label", "aria-labelledby"];
function j1(e, t, n) {
  let r = [];
  if (!t || !Be(t))
    r = wa();
  else {
    const a = ba(e, t);
    a != null && a.supportedAttrs && r.push(...a.supportedAttrs), a != null && a.requiredAttrs && r.push(...a.requiredAttrs);
  }
  return r = qt(r), n.some((a) => {
    if (Ee(a)) {
      if (!r.includes(a) || _1.includes(a) && V1(e, t))
        return !0;
    } else
      return !1;
    return !1;
  });
}
function U1(e, t, n) {
  var r;
  if (n.some((i) => O1.includes(i))) {
    if (H1.includes(b(e)))
      return !1;
  } else
    return !1;
  const a = t ? q(t) : null;
  return !((r = a == null ? void 0 : a.accessibleNameFrom) != null && r.includes("author"));
}
function V1(e, t) {
  if (t === "row" && e.parentElement) {
    const n = e.parentElement.closest(
      "table, " + H(["treegrid", "table", "grid"])
    ), r = n ? C(n) : null;
    if (r && ["table", "grid"].includes(r))
      return !0;
  }
  return !1;
}
m({
  id: "aria-allowed-role",
  uwId: 145,
  severity: 1,
  level: h.BestPractice,
  description: "Values assigned to WAI-ARIA role attributes must be valid. This means values must be spelled correctly, correspond to existing ARIA role values, and must not be abstract roles in order to correctly expose the purpose of the element.",
  analyze(e) {
    p(document, "[role]", {
      includeScreenReaderHidden: !0
    }).forEach((t) => {
      E(t, { dpub: !0, allowFallback: !0 }) !== null && (e.count.addReviewed(), D1(t, { allowImplicit: !0 }).length && (I(t) ? e.issues.add(t) : e.issues.add(t, f.incomplete)));
    });
  }
});
m({
  id: "aria-command-name",
  uwId: 146,
  actIds: ["97a4e1", "m6b1q3"],
  severity: 1,
  level: h.A,
  description: "ARIA command elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",
  analyze(e) {
    const t = H(["link", "button", "menuitem"]), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      ce(r) ? W(r, {
        altAttrNames: ["title"],
        checkTextContent: !0
      }) || e.issues.add(r) : e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "aria-dialog-name",
  uwId: 147,
  severity: 1,
  level: h.BestPractice,
  description: "ARIA dialog elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",
  analyze(e) {
    const t = H(["dialog", "alertdialog"]), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      ce(r) ? W(r, {
        altAttrNames: ["title"]
      }) || e.issues.add(r) : e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "aria-hidden-body",
  uwId: 58,
  severity: 1,
  level: h.A,
  description: "Document content is not accessible to assistive technology if aria-hidden=true is present on the document body” would be more user friendly.",
  analyze(e) {
    e.count.addReviewed(), document.body.getAttribute("aria-hidden") === "true" && e.issues.add(document.body);
  }
});
m({
  id: "aria-hidden-focus",
  uwId: 59,
  actIds: ["6cfa84"],
  severity: 4,
  level: h.A,
  description: "This rule checks aria-hidden elements do not contain focusable elements.",
  analyze(e) {
    const t = '[aria-hidden="true"]', n = p(document, t, {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(n.length), n.forEach((r) => {
      !S(r, t) && ra(r).length && e.issues.add(r);
    });
  }
});
m({
  id: "aria-input-field-name",
  uwId: 84,
  actIds: ["e086e5"],
  severity: 1,
  level: h.A,
  description: "Ensures every ARIA input field has an accessible name.",
  analyze(e) {
    const t = H([
      "combobox",
      "listbox",
      "searchbox",
      "slider",
      "spinbutton",
      "textbox"
    ]), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      ce(r) ? (rt(r) || nt(r) || !W(r, {
        altAttrNames: ["title"],
        furtherChecker: (a) => !!ge(a)
      })) && e.issues.add(r) : e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "aria-meter-name",
  uwId: 85,
  severity: 1,
  level: h.A,
  description: "ARIA meter elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",
  analyze(e) {
    const t = H(["meter"]), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      W(r, {
        altAttrNames: ["title"]
      }) || e.issues.add(r);
    });
  }
});
m({
  id: "aria-progressbar-name",
  uwId: 86,
  severity: 1,
  level: h.A,
  description: "ARIA progressbar elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",
  analyze(e) {
    const t = H("progressbar"), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      ce(r) ? W(r, {
        altAttrNames: ["title"]
      }) || e.issues.add(r) : e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "aria-required-attr",
  uwId: 87,
  actIds: ["4e8ab6"],
  severity: 1,
  level: h.A,
  description: "ARIA widget roles must have appropriate attributes describing the state or properties of the widget.",
  analyze(e) {
    const t = p(document, "[role]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      var r;
      const a = E(n);
      if (!a) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      const { implicitRole: i, implicitAttrs: o } = te(n) || {};
      if (a === i) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      const l = ((r = ba(n, a)) == null ? void 0 : r.requiredAttrs) || [];
      if (!l.length)
        return;
      const s = $1(a, o);
      l.some(
        (u) => !s.includes(u) && !n.getAttribute(u)
      ) && e.issues.add(n);
    });
  }
});
function $1(e, t) {
  var n;
  const r = /* @__PURE__ */ new Set();
  t && Object.keys(t).forEach(
    r.add,
    r
  );
  const a = ((n = q(e)) == null ? void 0 : n.implicitAttrs) || {};
  return a && Object.keys(a).forEach(
    r.add,
    r
  ), Array.from(r);
}
const Y1 = [
  "doc-bibliography",
  "doc-endnotes",
  "grid",
  "list",
  "listbox",
  "menu",
  "menubar",
  "table",
  "tablist",
  "tree",
  "treegrid",
  "rowgroup"
];
m({
  id: "aria-required-children",
  uwId: 88,
  actIds: ["bc4a75"],
  severity: 1,
  level: h.A,
  description: "Some ARIA parent role values applied to elements must contain specific child elements and role values to perform intended accessibility function.",
  analyze(e) {
    const t = p(document, '[role]:not([aria-busy="true"])');
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (F(n, "aria-busy") === "true")
        return;
      const r = E(n), a = r ? q(r, n) : null;
      if (!r || !(a != null && a.requiredOwnedElements))
        return;
      const i = a.requiredOwnedElements, o = Q1(n, i);
      o.some(
        (l) => l && i.includes(l)
      ) || (Y1.includes(r) && !at(n) && !o.length && !pa(n).length ? e.issues.add(n, f.incomplete) : e.issues.add(n));
    });
  }
});
function Q1(e, t) {
  const n = /* @__PURE__ */ new Set(), r = Je(e);
  for (const a of r) {
    if (!A(a))
      continue;
    const i = C(a, { noPresentational: !0 }), o = vn(a) || M(a);
    !i && !o || i && ["group", "rowgroup"].includes(i) && t.includes(i) ? r.push(...U(a)) : i && n.add(i);
  }
  return Array.from(n);
}
const Z1 = ["listitem", "treeitem"];
m({
  id: "aria-required-parent",
  uwId: 89,
  actIds: ["ff89c9"],
  severity: 1,
  level: h.A,
  description: "Certain ARIA roles must be contained by particular parent roles in order to perform the intended accessibility functions.",
  analyze(e) {
    const t = p(document, "[role]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      K1(n) || e.issues.add(n);
    });
  }
});
function K1(e) {
  const t = E(e), n = t ? q(t) : null;
  if (!(n != null && n.requiredContextRole))
    return !0;
  let r = [...n.requiredContextRole];
  const a = r.includes("group");
  let i = !1, o = [e], l;
  for (; l = o.shift(); ) {
    const s = i ? E(l) : t;
    let u = i ? l : P(l);
    for (; u; ) {
      const c = C(u, { noPresentational: !0 });
      if (!c || c === "generic")
        u = P(u);
      else if (c === "group" && a)
        s && Z1.includes(s) && r.push(s), r = r.filter((g) => g !== "group"), u = P(u);
      else if (r.includes(c)) {
        r = [];
        break;
      } else
        break;
    }
    if (!r.length)
      return !0;
    i || (i = !0, o = s1(e));
  }
  return !1;
}
const X1 = [
  "button",
  "img",
  "checkbox",
  "radio",
  "combobox",
  "menuitemcheckbox",
  "menuitemradio"
];
m({
  id: "aria-roledescription",
  uwId: 90,
  severity: 1,
  level: h.A,
  description: "Ensures that the aria-roledescription attribute is only used on elements with an implicit or explicit role values.",
  analyze(e) {
    const t = p(document, "[aria-roledescription]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = C(n);
      r && X1.includes(r) || (r === "generic" || r === "presentation" || r === "none" ? e.issues.add(n) : e.issues.add(n, f.incomplete));
    });
  }
});
m({
  id: "aria-roles",
  uwId: 91,
  actIds: ["674b10"],
  severity: 1,
  level: h.A,
  description: "Values assigned to ARIA role values must be valid. Role values must be spelled correctly, correspond to existing ARIA role values, and must not be abstract roles to correctly expose the purpose of the element.",
  analyze(e) {
    const t = p(document, "[role]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      var r, a;
      const i = (r = n.getAttribute("role")) == null ? void 0 : r.trim();
      if (!i) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      const o = he(i), l = o.every(
        (c) => !Be(c, { allowAbstract: !0 })
      ), s = o.some(
        (c) => V(n, c) === "abstract"
      );
      if (l || s) {
        e.issues.add(n);
        return;
      }
      const u = E(n, {
        dpub: !0,
        allowFallback: !0
      });
      u && (a = q(u)) != null && a.deprecated && e.issues.add(n);
    });
  }
});
m({
  id: "aria-text",
  uwId: 92,
  severity: 1,
  level: h.BestPractice,
  description: 'Elements with role="text" must not have focusable descendants.',
  analyze(e) {
    const t = p(document, "[role=text]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = U(n);
      if (!r.length)
        return e.issues.add(n, f.incomplete);
      Ra(r) && e.issues.add(n);
    });
  }
});
function Ra(e) {
  if (!e)
    return !1;
  for (const t of e)
    if (A(t) && (V(t) === "widget" && M(t) || Ra(U(t))))
      return !0;
  return !1;
}
m({
  id: "aria-toggle-field-name",
  uwId: 93,
  actIds: ["e086e5"],
  severity: 1,
  level: h.A,
  description: "Ensures every ARIA toggle field has an accessible name.",
  analyze(e) {
    const t = H([
      "checkbox",
      "menu",
      "menuitemcheckbox",
      "menuitemradio",
      "radio",
      "radiogroup",
      "switch",
      "option"
    ]), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      ce(r) ? (rt(r) || nt(r) || !W(r, {
        altAttrNames: ["title"],
        checkTextContent: !0,
        furtherChecker: (a) => !!ge(a)
      })) && e.issues.add(r) : e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "aria-tooltip-name",
  uwId: 94,
  severity: 1,
  level: h.A,
  description: "ARIA tooltip elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",
  analyze(e) {
    const t = H("tooltip"), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      ce(r) ? W(r, {
        altAttrNames: ["title"],
        checkTextContent: !0
      }) || e.issues.add(r) : e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "aria-treeitem-name",
  uwId: 95,
  severity: 1,
  level: h.BestPractice,
  description: "ARIA treeitem elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",
  analyze(e) {
    const t = H("treeitem"), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      ce(r) ? W(r, {
        altAttrNames: ["title"],
        checkTextContent: !0
      }) || e.issues.add(r) : e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "aria-valid-attr",
  uwId: 96,
  actIds: ["5f99a7"],
  severity: 1,
  level: h.A,
  description: "ARIA attributes starting with aria-must have valid names. Referring to a misspelled attribute or to one that does not exist will result in an invalid attribute and thus failure of this rule.",
  analyze(e) {
    const t = p(document, (n) => n.getAttributeNames().some(on));
    e.count.setReviewed(t.length), t.forEach((n) => {
      J1(n) && e.issues.add(n);
    });
  }
});
function J1(e) {
  return e.getAttributeNames().some((t) => on(t) && !Ee(t));
}
const eu = [
  "aria-current",
  "aria-describedby",
  "aria-labelledby"
];
m({
  id: "aria-valid-attr-value",
  actIds: ["6a7281"],
  analyze(e) {
    const t = pr().map((r) => `[${r}]`).join(","), n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = r.getAttributeNames();
      let i = !1, o = 0;
      for (; o < a.length && !i; ) {
        const l = a[o];
        ++o, on(l) && !tu(r, l) && (l === "aria-errormessage" ? nu(e, r) || (i = !0) : l === "aria-checked" && r.getAttribute("aria-checked") === "" ? (e.issues.add(r, f.inapplicable), i = !0) : Ol(r, l) ? l === "aria-level" && (ru(e, r) || (i = !0)) : (eu.includes(l) ? e.issues.add(r, f.incomplete) : e.issues.add(r), i = !0));
      }
    });
  }
});
function tu(e, t) {
  switch (t) {
    case "aria-controls":
      return e.getAttribute("aria-expanded") === "false" || e.getAttribute("aria-selected") === "false";
    case "aria-owns":
      return e.getAttribute("aria-expanded") === "false";
    default:
      return !1;
  }
}
function nu(e, t) {
  var n, r;
  const a = (n = t.getAttribute("aria-errormessage")) == null ? void 0 : n.trim();
  if (a) {
    if (a.includes(" "))
      return e.issues.add(t), !1;
  } else
    return (r = Ee("aria-errormessage")) != null && r.allowEmpty ? !0 : (e.issues.add(t), !1);
  try {
    const i = le(
      t,
      "aria-errormessage"
    )[0];
    if (i) {
      if (!I(i) || !(i.getAttribute("role") === "alert" || i.getAttribute("aria-live") === "assertive" || i.getAttribute("aria-live") === "polite" || he(t.getAttribute("aria-describedby") || "").indexOf(
        a
      ) > -1))
        return e.issues.add(t), !1;
    } else
      return e.issues.add(t, f.incomplete), !1;
  } catch {
    return e.issues.add(t, f.incomplete), !1;
  } finally {
    return !0;
  }
}
function ru(e, t) {
  const n = t.getAttribute("aria-level") || "";
  return parseInt(n, 10) > 6 ? (e.issues.add(t, f.incomplete), !1) : !0;
}
m({
  id: "audio-caption",
  uwId: 97,
  actIds: ["e7aa44", "2eb176", "afb423"],
  severity: 1,
  level: h.A,
  description: 'The track element must be present for each HTML5 audio element, with kind="captions" set as a property. Captions are text—synchronized with the audio file—of the dialog, narration, and any important auditory information, for the benefit of deaf users.',
  analyze(e) {
    const t = p(document, "audio", {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!I(n) || !B(n) || !(Q(n, "autoplay") || dn(n))) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      Br(n) || e.issues.add(n, f.incomplete);
    });
  }
});
m({
  id: "autocomplete-valid",
  uwId: 98,
  actIds: ["73f2c2"],
  severity: 1,
  level: h.AA,
  description: "The purpose for each common input field that collects an individual's personal data is programmatically defined based on the list of 53 Input Purposes for User Interface Components. The autocomplete attribute values must be valid and correctly applied for screen readers to function correctly.",
  analyze(e) {
    const t = p(document, "[autocomplete]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = F(n, "autocomplete");
      !ls(n, r) || r === "off" ? e.issues.add(n, f.inapplicable) : jl(n, r) || e.issues.add(n);
    });
  }
});
m({
  id: "avoid-inline-spacing",
  uwId: 99,
  actIds: ["24afc2", "78fd32", "9e45ec"],
  severity: 1,
  level: h.AA,
  description: "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets.",
  analyze(e) {
    const t = {
      "letter-spacing": {
        cssProperty: "letter-spacing",
        minValue: 0.12
      },
      "word-spacing": {
        cssProperty: "word-spacing",
        minValue: 0.16
      },
      "line-height": {
        multiLineOnly: !0,
        cssProperty: "line-height",
        minValue: 1.5,
        normalValue: 1
      }
    }, n = p(document, "[style]");
    e.count.setReviewed(n.length), n.forEach((r) => {
      typeof CSS < "u" && au(r, [
        "letter-spacing",
        "word-spacing",
        "line-height"
      ]) || !(Tt(
        r,
        t["letter-spacing"]
      ) && Tt(r, t["word-spacing"]) && Tt(r, t["line-height"])) && e.issues.add(r);
    });
  }
});
const au = (e, t) => t.every(
  (n) => CSS == null ? void 0 : CSS.supports(n, e.style.getPropertyValue(n))
);
m({
  id: "blink",
  uwId: 74,
  severity: 10,
  level: h.A,
  description: "This rule requires that no blink elements are present. Flashing text can be difficult to read and blinking objects can be difficult to activate. The associated automated check finds the presence of all blink elements so that they can be removed.",
  analyze(e) {
    const t = "blink", n = p(document, t, {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(n.length), n.forEach((r) => {
      S(r, t) || e.issues.add(r);
    });
  }
});
m({
  id: "bold",
  uwId: 142,
  severity: 1,
  level: h.A,
  description: "The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.",
  analyze(e) {
    const t = "b", n = p(document, t, {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(n.length), n.forEach((r) => {
      S(r, t) || e.issues.add(r);
    });
  }
});
m({
  id: "button-name",
  uwId: 36,
  actIds: ["97a4e1"],
  severity: 10,
  level: h.A,
  description: "Buttons must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",
  analyze(e) {
    const t = "button", n = p(document.body, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      Pe(r) && !W(r, {
        altAttrNames: ["title"],
        checkPresentationRole: !0,
        checkTextContent: !0
      }) && e.issues.add(r);
    });
  }
});
m({
  id: "bypass",
  uwId: 100,
  actIds: ["cf77f2", "3e12e1", "b40fd1", "ye5d6e", "047fe0"],
  severity: 1,
  level: h.A,
  description: "Each page must have a main landmark to provide a mechanism to bypass repeated blocks of content or interface elements (like header and navigation) and quickly arrive at the main content.",
  analyze(e) {
    const t = "a[href]", n = ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]", r = "main, [role=main]", a = p(document, t), i = p(document, n), o = p(document, r);
    e.count.setReviewed(a.length + i.length + o.length), !(a.some((l) => /^#[^/!]/.test(R(l, "href"))) || i.length || o.length <= 1) && e.issues.add(document.body);
  }
});
m({
  id: "color-contrast",
  uwId: 43,
  actIds: ["afw4f7"],
  severity: 7,
  level: h.AA,
  description: "All text elements must have sufficient contrast between text in the foreground and background colors behind it in accordance with WCAG 2 AA contrast ratio thresholds.",
  analyze(e) {
    const t = {
      contrastRatioNormal: {
        expected: 4.5
      },
      contrastRatioLarge: {
        expected: 3
      }
    }, n = p(document, "*");
    e.count.setReviewed(n.length), n.forEach((r) => {
      Hr(r) && mn(r, t) && e.issues.add(r);
    });
  }
});
m({
  id: "color-contrast-enhanced",
  uwId: 101,
  actIds: ["09o5cg"],
  severity: 1,
  level: h.AAA,
  description: "All text elements must have sufficient contrast between text in the foreground and background colors behind it in accordance with WCAG 2 AAA contrast ratio thresholds.",
  analyze(e) {
    const t = {
      contrastRatioNormal: {
        expected: 7,
        minThreshold: 4.5
      },
      contrastRatioLarge: {
        expected: 4.5,
        minThreshold: 3
      }
    }, n = p(document, "*");
    e.count.setReviewed(n.length), n.forEach((r) => {
      Hr(r) && mn(r, t) && e.issues.add(r);
    });
  }
});
const Yn = 2, iu = /orientation:\s*(landscape|portrait)/i, ou = /(rotate|rotateZ|rotate3d|matrix|matrix3d)\([^)]+\)/gi;
m({
  id: "css-orientation-lock",
  uwId: 102,
  actIds: ["b33eff"],
  severity: 1,
  level: h.Experimental,
  description: "The screen orientation (e.g. portrait or landscape) of mobile applications should not be locked in one mode. Users should be able to change the orientation of their device between portrait and landscape with the page adjusting accordingly in order to remain understandable. Also, when opening a page, it should display in the user’s current orientation.",
  analyze(e) {
    const t = document.documentElement;
    e.count.addReviewed();
    const n = bl();
    for (const { cssRules: r } of n)
      for (const a of r)
        if (lu(a) && su(a)) {
          e.issues.add(t);
          return;
        }
  }
});
function lu(e) {
  return e instanceof CSSMediaRule && iu.test(e.cssText);
}
function su({ cssRules: e }) {
  for (const t of e) {
    if (!(t instanceof CSSStyleRule))
      continue;
    const { selectorText: n, style: r } = t;
    if (!n || r.length <= 0)
      continue;
    const a = r.transform || !1;
    if (!a)
      continue;
    const i = uu(a);
    if (!(!i || // When degree is a multiple of 180, it is not considered an orientation lock
    Math.abs(i - 180) % 180 <= Yn) && Math.abs(i - 90) % 90 <= Yn)
      return !0;
  }
  return !1;
}
function uu(e) {
  const t = e.match(ou);
  return t ? Math.abs(
    t.reduce((n, r) => {
      const [a, i] = r.replace(")", "").split("("), o = cu(a, i);
      return o && (n += o), n;
    }, 0)
  ) : 0;
}
function cu(e, t) {
  switch (e) {
    case "rotate":
    case "rotateZ":
      return Ln(t);
    case "rotate3d":
      const [, , n, r] = t.split(",").map((a) => a.trim());
      return parseInt(n) === 0 ? null : Ln(r);
    case "matrix":
    case "matrix3d":
      return Tl(t);
    default:
      return null;
  }
}
const du = [
  "a",
  "input",
  "button",
  "select",
  "textarea",
  "link"
];
m({
  id: "custom-focusable-elements",
  uwId: 17,
  severity: 10,
  level: h.A,
  description: "Custom focusable elements need to have tabindex attribute with zero or a positive number value, so the elements are accessible by keyboard.",
  analyze(e) {
    const t = p(document, '*[role="link"], *[role="button"], *[role="checkbox"], *[onclick]');
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = j(n, "tabindex"), a = r === null || r < 0;
      !du.includes(b(n)) && a && e.issues.add(n);
    });
  }
});
m({
  id: "definition-list",
  uwId: 103,
  severity: 1,
  level: h.A,
  description: "Definition lists (dl) must contain only properly-ordered dt and dd groups, div, script, or template elements.",
  analyze(e) {
    const t = p(document, "dl");
    e.count.setReviewed(t.length), t.forEach((n) => {
      R(n, "role") === "" && (mu(n) || !pu(n)) && e.issues.add(n);
    });
  }
});
function mu(e) {
  const t = Array.from(e.children);
  if (!t.length)
    return !1;
  let n = !1, r = !1, a;
  for (const i of t) {
    if (a = b(i), a === "dt" && (n = !0), n && a === "dd")
      return !1;
    a === "dd" && (r = !0);
  }
  return n || r;
}
function pu(e) {
  const t = ["definition", "term", "list"], n = U(e).reduce(
    (r, a) => b(a) === "div" && E(a) === null ? r.concat(Array.from(a.childNodes)) : r.concat(a),
    []
  );
  for (const r of n)
    if (A(r) && I(r)) {
      const a = b(r), i = E(r);
      if ((a !== "dt" && a !== "dd" || i) && !t.includes(i))
        return !1;
    } else if (ie(r, { allowEmpty: !1 }))
      return !1;
  return !0;
}
m({
  id: "dlitem",
  uwId: 104,
  severity: 1,
  level: h.A,
  description: "Definition list items (dt and/or dd) must be wrapped in parent dl elements to be valid. This enables screen reader users to understand the proper hierarchy of information in the list.",
  analyze(e) {
    const t = p(document, "dt, dd");
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (R(n, "role") !== "")
        return;
      let r = P(n), a = r == null ? void 0 : r.nodeName.toLowerCase(), i = r ? E(r, { allowAbstract: !1 }) : null;
      r && a === "div" && (i === null || z(i)) && (r = P(r), a = r == null ? void 0 : r.nodeName.toLowerCase(), i = r ? E(r, { allowAbstract: !1 }) : null), // Unlike with UL|OL+LI, DT|DD must be in a DL
      !(a === "dl" && (!i || i === "list" || z(i))) && e.issues.add(n);
    });
  }
});
m({
  id: "document-title",
  uwId: 25,
  actIds: ["2779a5"],
  severity: 7,
  level: h.A,
  description: "The HTML document must have a title element to provide users with an overview of its content, and when present, it must not be empty.",
  analyze(e, t = document) {
    if (!(t instanceof Document))
      throw new Error(
        "Only HTML document can be provided as a root element for 'document-title' rule check"
      );
    const n = t.documentElement;
    e.count.addReviewed(), Re(n) ? e.issues.add(n, f.inapplicable) : x(t.title) || e.issues.add(t.querySelector("title") || n);
  }
});
m({
  id: "duplicate-id",
  uwId: 41,
  actIds: ["3ea0c8"],
  severity: 1,
  level: h.A,
  outputType: "group",
  description: "The value assigned to an ID attribute must be unique to prevent the second instance from being overlooked by assistive technology. Put another way; ID attributes may not be used more than once in the same document to differentiate each element from another.",
  analyze(e) {
    const t = p(document, '[id]:not([id=""])', {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length);
    const n = bn({ elements: t });
    for (const [, r] of n)
      for (const a in r) {
        const i = r[a].some(M);
        r[a].forEach((o) => {
          _(o, "id") && !Ce(o) && !i ? e.issuesGroup.add(o, a) : e.issuesGroup.add(o, a, f.inapplicable);
          const l = t.indexOf(o);
          l > -1 && t.splice(l, 1);
        });
      }
    t.forEach((r) => {
      (!R(r, "id") || Ce(r) || M(r)) && e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "duplicate-id-active",
  uwId: 105,
  actIds: ["3ea0c8"],
  severity: 1,
  level: h.A,
  outputType: "group",
  description: "The value assigned to active ID attributes on focusable elements must be unique to prevent the second instance from being overlooked by assistive technology.",
  analyze(e) {
    const t = p(document, '[id]:not([id=""])', {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length);
    const n = bn({ elements: t });
    for (const [, r] of n)
      for (const a in r) {
        const i = r[a].some(M);
        r[a].forEach((o) => {
          _(o, "id") && !Ce(o) && i ? e.issuesGroup.add(o, a) : e.issuesGroup.add(o, a, f.inapplicable);
          const l = t.indexOf(o);
          l > -1 && t.splice(l, 1);
        });
      }
    t.forEach((r) => {
      (!R(r, "id") || Ce(r) || !M(r)) && e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "duplicate-id-aria",
  uwId: 106,
  actIds: ["3ea0c8"],
  severity: 1,
  level: h.A,
  outputType: "group",
  description: "The value assigned to an id attribute used in ARIA or in form labels must be unique to prevent the second instance from being overlooked by assistive technology.",
  analyze(e) {
    const t = p(document, '[id]:not([id=""])', {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length);
    const n = bn({ elements: t });
    for (const [, r] of n)
      for (const a in r)
        r[a].forEach((i) => {
          _(i, "id") && Ce(i) ? e.issuesGroup.add(i, a) : e.issuesGroup.add(i, a, f.inapplicable);
          const o = t.indexOf(i);
          o > -1 && t.splice(o, 1);
        });
    t.forEach((r) => {
      (!R(r, "id") || !Ce(r)) && e.issues.add(r, f.inapplicable);
    });
  }
});
m({
  id: "empty-heading",
  uwId: 32,
  actIds: ["ffd0e9"],
  severity: 5,
  level: h.BestPractice,
  description: "When at least one heading element (marked by <h1> through <h6>) is present, it is a best practice to ensure it contains content.",
  analyze(e) {
    p(document, 'h1, h2, h3, h4, h5, h6, [role~="heading"]').forEach((t) => {
      C(t) === "heading" && (e.count.addReviewed(), W(t, {
        altAttrNames: ["title"],
        checkTextContent: !0
      }) || e.issues.add(t));
    });
  }
});
m({
  id: "empty-table-header",
  uwId: 11,
  severity: 1,
  level: h.BestPractice,
  description: "Table header elements should have visible text. Ensure that the table header can be used by screen reader users. If the element is not a header, marking it up with a `td` is more appropriate.",
  analyze(e) {
    const t = "th:not([role]), " + H(["rowheader", "columnheader"]), n = p(
      document,
      t
    );
    e.count.setReviewed(n.length), n.forEach((r) => {
      at(r) || e.issues.add(r);
    });
  }
});
m({
  id: "fieldset-legend",
  uwId: 12,
  severity: 10,
  level: h.A,
  description: "The fieldset element represents a set of form controls (or other content) grouped together, optionally with a caption. The caption is given by the first legend element that is a child of the fieldset element, if any. The remainder of the descendants form the group.",
  analyze(e) {
    const t = p(document, "fieldset");
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = Array.from(n.children).filter(
        (a) => b(a) === "legend"
      );
      (r.length === 0 || r.length > 1) && e.issues.add(n);
    });
  }
});
m({
  id: "focus-order-semantics",
  uwId: 107,
  severity: 1,
  level: h.BestPractice,
  description: "User input elements must have appropriate roles, whether native HTML or a custom widget, to convey to screen reader users their meaning when landed on and given focus.",
  analyze(e) {
    const t = "div, h1, h2, h3, h4, h5, h6, [role=heading], p, span", n = p(document, (r) => r.matches(t) && e1(r));
    e.count.setReviewed(n.length), n.forEach((r) => {
      hu(r) || wu(r) || e.issues.add(r);
    });
  }
});
function hu(e) {
  return C(e) === null ? !1 : V(e) === "widget";
}
const gu = {
  article: !0,
  aside: !0,
  nav: !0,
  section: !0
}, fu = {
  application: !0,
  banner: !1,
  complementary: !0,
  contentinfo: !0,
  form: !0,
  main: !0,
  navigation: !0,
  region: !0,
  search: !1
};
function wu(e) {
  const t = b(e);
  if (gu[t])
    return !0;
  const n = E(e);
  return n && fu[n] || !1;
}
m({
  id: "form-field-multiple-labels",
  uwId: 108,
  severity: 1,
  level: h.A,
  description: "Ensures form field does not have multiple labels.",
  analyze(e, t = document) {
    const n = p(t, "input, select, textarea");
    e.count.setReviewed(n.length), n.forEach((r) => {
      if (!Ir(r))
        return;
      let a = r.parentElement;
      const i = (Ie(r, "for") || []).filter(
        (o) => it(o)
      );
      for (; a; )
        b(a) === "label" && !i.find((o) => o == a) && A(a) && i.push(a), a = a.parentElement;
      if (i.length > 1) {
        const o = i.filter(
          (l) => I(l)
        );
        if (o.length > 1) {
          e.issues.add(r, f.incomplete);
          return;
        }
        (le(r, "aria-labelledby") || []).includes(o[0]) || e.issues.add(r, f.incomplete);
      }
    });
  }
});
m({
  id: "frame-focusable-content",
  uwId: 109,
  actIds: ["akn7bn"],
  severity: 1,
  level: h.A,
  description: '<frame> and <iframe> elements with focusable content must not have tabindex="-1".',
  analyze(e) {
    const t = p(document, "iframe, frame");
    e.count.setReviewed(t.length), t.forEach((n) => {
      const { width: r, height: a } = k(n);
      if (r === 0 || a === 0)
        return;
      const i = U(n);
      i.length && i.some((o) => Ia(o)) && !K(n) && e.issues.add(n);
    });
  }
});
function Ia(e) {
  if (K(e))
    return !0;
  const t = U(e);
  return t == null ? void 0 : t.some((n) => Ia(n));
}
m({
  id: "frame-title",
  uwId: 23,
  actIds: ["cae760"],
  severity: 7,
  level: h.A,
  description: "All frame or iframe elements in the document must have a title that is not empty to describe their contents to screen reader users.",
  analyze(e) {
    const t = p(document, "frame, iframe");
    e.count.setReviewed(t.length), t.forEach((n) => {
      W(n, {
        altAttrNames: ["title"],
        checkPresentationRole: !0
      }) || e.issues.add(n);
    });
  }
});
m({
  id: "frame-title-unique",
  uwId: 24,
  actIds: ["4b1c6c"],
  severity: 7,
  level: h.A,
  outputType: "group",
  description: "All frame or iframe elements in the document must have a unique title to describe their contents to screen reader users.",
  analyze(e) {
    const t = wn(
      "title",
      "frame, iframe"
    );
    Object.keys(t).forEach((n) => {
      const r = t[n];
      e.count.addReviewed(r.length), r.length > 1 && r.forEach((a) => {
        e.issuesGroup.add(a, n);
      });
    });
  }
});
m({
  id: "heading-order",
  uwId: 33,
  severity: 5,
  level: h.BestPractice,
  description: "Headings must be in a valid logical order, meaning h1 through h6 element tags must appear in a sequentially-descending order.",
  analyze(e) {
    const t = p(document, 'h1, h2, h3, h4, h5, h6, [role~="heading"]');
    e.count.setReviewed(t.length), t.sort(fn), e.issues.set(bu(t));
  }
});
function bu(e) {
  const t = [];
  if (e.length > 0) {
    let n = 0, r = n + 1;
    for (; n < e.length && r < e.length; ) {
      const a = e[n], i = e[r], o = Yt(
        a
      ), l = Yt(i);
      o == null || l == null || l - o <= 1 ? (n++, r = n + 1) : l - o > 1 && (t.push(i), r++);
    }
  }
  return t;
}
m({
  id: "hidden-content",
  uwId: 110,
  severity: 1,
  level: h.Experimental,
  description: "Informs users about hidden content that cannot be analyzed for accessibility violations.",
  analyze(e) {
    const t = p(document, "*:not(script, head, title, noscript, style, template)", {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!ve(n))
        return;
      const r = y(n);
      if (r.getPropertyValue("display") === "none") {
        e.issues.add(n, f.incomplete);
        return;
      } else if (r.getPropertyValue("visibility") === "hidden") {
        const a = P(n), i = a && A(a) && y(a);
        (!i || i.getPropertyValue("visibility") !== "hidden") && e.issues.add(n, f.incomplete);
      }
    });
  }
});
m({
  id: "html-has-lang",
  uwId: 37,
  actIds: ["b5c3f8"],
  severity: 5,
  level: h.A,
  description: "The HTML document element must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default.",
  analyze(e) {
    const t = document.documentElement;
    if (e.count.addReviewed(), Re(t) || Wr(t)) {
      e.issues.add(t, f.inapplicable);
      return;
    }
    const n = R(t, "lang"), r = R(t, "xml:lang");
    (!n && !r || // Edge case: in HTML5 document xml:lang has a value and lang does not
    kr(t) && !n && r) && e.issues.add(t);
  }
});
m({
  id: "html-lang-valid",
  uwId: 38,
  actIds: ["bf051a"],
  severity: 1,
  level: h.A,
  description: "The HTML document must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default.",
  analyze(e) {
    const t = document.documentElement;
    e.count.addReviewed(), Re(t) ? e.issues.add(t, f.inapplicable) : Fr(t) || e.issues.add(t);
  }
});
m({
  id: "html-xml-lang-mismatch",
  uwId: 39,
  actIds: ["5b7ae0"],
  severity: 4,
  level: h.A,
  description: "The HTML document must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default. The xml:lang attribute value, if included on the html element, must duplicate the value of the lang exactly.",
  analyze(e) {
    const t = document.documentElement;
    e.count.addReviewed();
    const n = R(t, "xml:lang");
    if (Re(t) || Wr(t) || Vl(t) || !n) {
      e.issues.add(t, f.inapplicable);
      return;
    }
    const r = R(t, "lang");
    r && n && Pt(r) !== Pt(n) && e.issues.add(t);
  }
});
m({
  id: "identical-links-same-purpose",
  uwId: 30,
  actIds: ["b20e66"],
  severity: 1,
  level: h.AAA,
  outputType: "group",
  description: "Ensure that links with the same accessible name serve a similar purpose.",
  analyze(e, t = document) {
    const n = p(t, 'a[href], area[href], [role="link"]', {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(n.length);
    const r = [];
    n.forEach((a) => {
      const i = C(a);
      if (i && i !== "link") {
        e.issuesGroup.add(
          a,
          "incorrect role attribute",
          f.inapplicable
        );
        return;
      }
      const o = x(
        Se(G(a))
      ).toLowerCase();
      if (!o) {
        e.issuesGroup.add(
          a,
          "missed accessible text",
          f.inapplicable
        );
        return;
      }
      const l = Hs(
        a,
        "href"
      ), s = r.find(
        (u) => o === u.accessibleText || Xt(l, u.urlProps)
      );
      if (!s) {
        r.push({
          elements: [a],
          accessibleText: o,
          urlProps: l
        });
        return;
      }
      if (s.usedIssueType) {
        e.issuesGroup.add(
          a,
          o,
          s.usedIssueType
        );
        return;
      }
      o !== s.accessibleText ? s.usedIssueType = f.inapplicable : Xt(l, s.urlProps) || (s.usedIssueType = f.incomplete), s.usedIssueType ? (e.issuesGroup.add(
        a,
        o,
        s.usedIssueType
      ), s.elements.forEach(
        (u) => e.issuesGroup.add(
          u,
          o,
          s.usedIssueType
        )
      )) : s.elements.push(a);
    });
  }
});
function Xt(e, t) {
  if (!e || !t || typeof e != "object" || typeof t != "object")
    return !1;
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertyNames(t);
  return n.length !== r.length ? !1 : n.every((a) => {
    const i = a in e ? e[a] : void 0, o = a in t ? t[a] : void 0;
    return typeof i != typeof o ? !1 : typeof i == "object" || typeof o == "object" ? Xt(i, o) : i === o;
  });
}
m({
  id: "image-alt",
  actIds: ["23a2a8"],
  errorHandle: {},
  analyze(e, t = document.body) {
    const n = p(t, "img");
    e.count.setReviewed(n.length), n.forEach((r) => {
      var a;
      Pe(r) && !((a = e.ruleSpecificOptions) != null && a.emptyAltAsPresentationalRole) && !W(r, {
        altAttrNames: ["title", "alt"],
        checkPresentationRole: !0
      }) && e.issues.add(
        r,
        f.violation,
        r.hasAttribute("alt") ? "emptyAlt" : "missingAlt"
      );
    });
  }
});
const Au = 255;
m({
  id: "image-alt-long",
  uwId: 4,
  severity: 2,
  level: h.A,
  description: "Images must have short accessible name",
  analyze(e, t = document) {
    const n = p(t, "img");
    e.count.setReviewed(n.length), n.forEach((r) => {
      R(r, "alt").length > Au && e.issues.add(r);
    });
  }
});
m({
  id: "image-alt-suspicious",
  uwId: 7,
  severity: 1,
  level: h.A,
  description: "Images must don't have suspicious alt text like: image, icon, graphic, drawing, painting, artwork",
  analyze(e, t = document) {
    const n = p(t, "img[alt]");
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = R(r, "alt");
      (a.startsWith("graphic of") || a.startsWith("bullet") || a.startsWith("image of") || Du.includes(a) || yu(a)) && e.issues.add(r);
    });
  }
});
const Du = [
  "photo",
  "photograph",
  "drawing",
  "painting",
  "artwork",
  "logo",
  "bullet",
  "button",
  "arrow",
  "more",
  "spacer",
  "blank",
  "chart",
  "table",
  "diagram",
  "graph",
  "*"
], yu = (e) => e.endsWith("image") || e.endsWith("graphic") || e.endsWith("icon") || e.endsWith(".gif") || e.endsWith(".jpg") || e.endsWith(".jpeg") || e.endsWith(".png") || e.endsWith(".svg");
m({
  id: "image-link-without-text",
  uwId: 29,
  severity: 8,
  level: h.A,
  description: "Image links must have an accessible text",
  analyze(e, t = document) {
    const n = p(document, 'a > img, a > *[role="img"], *[role="link"] > img, *[role="link"] > *[role="img"]');
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = vu(r);
      a && !G(a) && e.issues.add(a);
    });
  }
});
function vu(e) {
  let t = e;
  for (; t && b(t) !== "a" && R(t, "role") !== "link"; )
    t = t.parentElement;
  return t;
}
m({
  id: "image-redundant-alt",
  uwId: 2,
  severity: 1,
  level: h.BestPractice,
  description: "When button and link text repeats in an alt attribute value, screen reader users hear the same information twice, which renders the alt text meaningless and confusing.",
  analyze(e, t = document) {
    p(t, "img").forEach((n) => {
      var r;
      if (zr(n) || (r = e.ruleSpecificOptions) != null && r.emptyAltAsPresentationalRole)
        return;
      e.count.addReviewed();
      const a = S(n, "button, [role=button], a[href], p, li, td, th");
      if (!a)
        return;
      const i = me(a, { screenReader: !0 });
      i !== "" && i.toLowerCase() === G(n).toLowerCase() && e.issues.add(n);
    });
  }
});
m({
  id: "image-same-alt",
  uwId: 3,
  severity: 1,
  level: h.A,
  description: "Images must have unique alt text for different src",
  outputType: "group",
  analyze(e, t) {
    const n = wn(
      "alt",
      "img",
      { root: t }
    );
    Object.keys(n).forEach((r) => {
      const a = n[r];
      e.count.addReviewed(a.length), a.length > 1 && a.filter(
        (i, o) => !a.some((l, s) => s !== o && i.src == l.src)
      ).forEach((i) => e.issuesGroup.add(i, r));
    });
  }
});
m({
  id: "input-button-name",
  uwId: 35,
  actIds: ["97a4e1"],
  severity: 10,
  level: h.A,
  description: "The input-button-name rule separates functionality from the button-name rule to ensure that input buttons have discernible text; advise relevant to input button names was incorrect for button elements.",
  analyze(e) {
    const t = p(document, 'input[type="button"], input[type="submit"], input[type="reset"]');
    e.count.setReviewed(t.length), t.forEach((n) => {
      Pe(n) && !W(n, {
        altAttrNames: ["title", "value"],
        checkPresentationRole: !0,
        furtherChecker: Cu
      }) && e.issues.add(n);
    });
  }
});
function Cu(e) {
  return ["submit", "reset"].includes(F(e, "type")) ? e.getAttribute("value") === null : !1;
}
m({
  id: "input-image-alt",
  actIds: ["59796f"],
  errorHandle: {},
  analyze(e) {
    const t = p(document, 'input[type="image"]');
    e.count.setReviewed(t.length), t.forEach((n) => {
      Pe(n) && !W(n, {
        altAttrNames: ["title", "alt"]
      }) && e.issues.add(
        n,
        f.violation,
        n.hasAttribute("alt") ? "emptyAlt" : "missingAlt"
      );
    });
  }
});
m({
  id: "invalid-id",
  uwId: 45,
  severity: 5,
  level: h.A,
  description: "When specified on HTML elements, the id attribute value must be unique amongst all the IDs in the element's tree and must contain at least one character. The value must not contain any ASCII whitespace.",
  analyze(e) {
    const t = p(document, "[id]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = _(n, "id");
      (!(r != null && r.trim()) || /\s/.test(r)) && e.issues.add(n);
    });
  }
});
m({
  id: "italic",
  uwId: 148,
  severity: 1,
  level: h.A,
  description: "The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.",
  analyze(e) {
    const t = "i", n = p(document, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      !S(r, t) && !us(r) && e.issues.add(r);
    });
  }
});
m({
  id: "label",
  uwId: 111,
  actIds: ["e086e5"],
  severity: 1,
  level: h.A,
  description: "Each form element must have a programmatically associated label element.",
  analyze(e, t = document) {
    const n = p(t, "input, textarea");
    e.count.setReviewed(n.length), n.forEach((r) => {
      Ir(r) && !W(r, {
        altAttrNames: ["title", "placeholder"],
        checkPresentationRole: !0,
        furtherChecker: (a) => !!ge(a) || rt(a) || nt(a)
      }) && e.issues.add(r);
    });
  }
});
const Qn = (e) => x(Se(e)).toLowerCase(), Tu = (e, t) => {
  const n = Qn(t), r = Qn(e);
  return !n || !r ? !1 : n.includes(r);
};
m({
  id: "label-content-name-mismatch",
  uwId: 81,
  actIds: ["2ee8b8"],
  severity: 1,
  level: h.Experimental,
  description: "Interactive elements labeled through their content must have their visible label as part of their accessible name",
  analyze(e, t = document) {
    const n = p(t, (r) => ce(r));
    e.count.setReviewed(n.length), n.forEach((r) => {
      if (V(r) !== "widget") {
        e.issues.add(r, f.inapplicable);
        return;
      }
      if (cn(r))
        return;
      const a = fe(r, {
        subtreeDescendant: !0,
        ignoreLigatures: !0,
        ignoreNonVisibleText: !0
      });
      if (a && Sl(a))
        return;
      if (!x(a) || !Aa(r, "contents")) {
        e.issues.add(r, f.inapplicable);
        return;
      }
      const i = G(r, {
        ignoreLigatures: !0
      });
      console.log(a, i), i && !Tu(a, i) && e.issues.add(r);
    });
  }
});
m({
  id: "label-title-only",
  uwId: 34,
  severity: 10,
  level: h.BestPractice,
  description: "Form <input> elements may be given a title using the title or aria-describedby attributes (but not both). These attributes are used to provide additional information such as a hint.",
  analyze(e, t = document) {
    const n = p(t, "input,select,textarea");
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = ct(r), i = le(r, "aria-describedby").filter(
        (o) => it(o) && me(o)
      ).length > 0;
      (!(ge(r) || W(r)) || a && i) && e.issues.add(r);
    });
  }
});
m({
  id: "landmark-banner-is-top-level",
  uwId: 113,
  severity: 1,
  level: h.BestPractice,
  description: "Banner landmark must not be contained in another landmark.",
  analyze(e) {
    const t = p(document, "header:not([role]), [role=banner]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      lt(n) && (st(n) || e.issues.add(n));
    });
  }
});
m({
  id: "landmark-complementary-is-top-level",
  uwId: 114,
  severity: 1,
  level: h.BestPractice,
  description: "Ensures the complementary landmark or aside is at top level",
  analyze(e) {
    const t = p(document, "aside:not([role]), [role=complementary]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      st(n) || e.issues.add(n);
    });
  }
});
m({
  id: "landmark-contentinfo-is-top-level",
  uwId: 115,
  severity: 1,
  level: h.BestPractice,
  description: "Contentinfo landmark must be at top level.",
  analyze(e) {
    const t = p(document, "footer:not([role]), [role=contentinfo]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      lt(n) && (st(n) || e.issues.add(n));
    });
  }
});
m({
  id: "landmark-main-is-top-level",
  uwId: 116,
  severity: 1,
  level: h.BestPractice,
  description: 'It is a best practice to ensure the main landmark is not contained within another landmark. All content should be contained within distinct regions such as the header (role="banner"), content (role="main"), and footer (role="contentinfo").',
  analyze(e) {
    const t = p(document, "main:not([role]), [role=main]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      st(n) || e.issues.add(n);
    });
  }
});
m({
  id: "landmark-no-duplicate-banner",
  uwId: 117,
  severity: 1,
  level: h.BestPractice,
  description: "Ensures the page has at most one banner landmark.",
  analyze(e) {
    const t = p(document, "header:not([role]), [role=banner]");
    e.count.setReviewed(t.length), hn(t) && e.issues.set(t);
  }
});
m({
  id: "landmark-no-duplicate-contentinfo",
  uwId: 118,
  severity: 1,
  level: h.BestPractice,
  description: "Ensures the page has at most one contentinfo landmark.",
  analyze(e) {
    const t = p(document, "footer:not([role]), [role=contentinfo]");
    e.count.setReviewed(t.length), hn(t) && e.issues.set(t);
  }
});
m({
  id: "landmark-no-duplicate-main",
  uwId: 119,
  severity: 1,
  level: h.BestPractice,
  description: "It is a best practice to ensure that there is only one main landmark to navigate to the primary content of the page and that if the page contains iframe elements, each should either contain no landmarks, or just a single landmark.",
  analyze(e) {
    const t = p(document, "main:not([role]), [role='main']");
    e.count.setReviewed(t.length), hn(t) && e.issues.set(t);
  }
});
m({
  id: "landmark-one-main",
  uwId: 120,
  severity: 1,
  level: h.BestPractice,
  description: "It is a best practice to ensure that there is only one main landmark to navigate to the primary content of the page and that if the page contains iframe elements, each should either contain no landmarks, or just a single landmark.",
  analyze(e) {
    const t = p(document, 'main:not([role]), [role="main"]'), n = [document, ...$r(document)];
    e.count.setReviewed(n.length), n.forEach((r) => {
      t.some((a) => r.contains(a)) || e.issues.add(r.body);
    });
  }
});
m({
  id: "landmark-unique",
  uwId: 121,
  severity: 1,
  level: h.BestPractice,
  outputType: "group",
  description: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination.",
  analyze(e) {
    const t = H([
      "banner",
      "complementary",
      "contentinfo",
      "main",
      "navigation",
      "region",
      "search",
      "form"
    ]) + ", form, footer, header, aside, main, nav, section", n = p(document, t);
    e.count.setReviewed(n.length);
    const r = Eu(
      n.filter(
        (a) => ks(a) && I(a)
      )
    );
    Object.keys(r).forEach((a) => {
      e.issuesGroup.set(r[a], a);
    });
  }
});
function Eu(e) {
  const t = /* @__PURE__ */ new Map();
  e.forEach((r) => {
    const a = C(r), i = G(r).toLowerCase(), o = t.get(i);
    if (!o) {
      t.set(i, /* @__PURE__ */ new Map([[a, [r]]]));
      return;
    }
    const l = o.get(a);
    l ? (l.push(r), o.set(a, l), t.set(i, o)) : (o.set(a, [r]), t.set(i, o));
  });
  const n = {};
  return t.forEach((r, a) => {
    r.forEach((i) => {
      i.length > 1 && (n[a] = n[a] || [], n[a].push(...i));
    });
  }), n;
}
const Ru = [
  "here",
  "click here",
  "download",
  "download now",
  "click",
  "click this",
  "this",
  "link",
  "more",
  "please click here",
  "continue reading"
];
m({
  id: "link-ambiguous-text",
  uwId: 47,
  severity: 1,
  level: h.BestPractice,
  description: "Links must have not an ambiguous text",
  analyze(e, t = document) {
    const n = p(t, 'a, *[role="link"]');
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = G(r);
      a && Ru.includes(a) && e.issues.add(r);
    });
  }
});
m({
  id: "link-in-text-block",
  uwId: 122,
  severity: 1,
  level: h.A,
  description: "Ensures users who cannot distinguish between colors can tell when text is a link by verifying the link has either a distinct style that does not rely on color or has a contrast difference of greater than 3:1 (which alerts you that manual testing is required).",
  analyze(e, t = document) {
    const n = {
      contrastRatioNormal: {
        expected: 3
      },
      contrastRatioLarge: {
        expected: 3
      }
    }, r = "a[href], [role=link]", a = p(
      t,
      (i) => i.matches(r)
    );
    e.count.setReviewed(a.length), a.forEach((i) => {
      const o = C(i);
      o && o === "link" && qr(i) && at(i) && B(i) && mn(i, n) && e.issues.add(i);
    });
  }
});
m({
  id: "link-name",
  uwId: 27,
  actIds: ["c487ae"],
  severity: 7,
  level: h.A,
  description: "Link text and alternate text for images, when used as links, must be discernible by a screen reader, must not have a duplicate label, and must be focusable.",
  analyze(e, t = document) {
    const n = p(t, 'a[href], [role="link"]');
    e.count.setReviewed(n.length), n.forEach((r) => {
      W(r, {
        altAttrNames: ["title"],
        checkTextContent: !0
      }) || e.issues.add(r);
    });
  }
});
const Iu = ["new tab", "new window"];
m({
  id: "link-no-mention-target-blank",
  uwId: 44,
  severity: 1,
  level: h.AAA,
  description: "Ensure that every a[target=_blank] links should mention in accessible text that the link opens in new tab",
  analyze(e, t = document) {
    const n = p(t, 'a[target="_blank"]');
    e.count.setReviewed(n.length), n.forEach((r) => {
      zl(r, Iu) || e.issues.add(r);
    });
  }
});
m({
  id: "link-refer-to-image",
  uwId: 28,
  severity: 5,
  level: h.A,
  description: "The link should not be referenced to the image file",
  analyze(e, t = document) {
    const n = p(t, 'a:not([tabindex="-1"]), *[role="link"]:not([tabindex="-1"])');
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = R(r, "href");
      (a.endsWith(".jpeg") || a.endsWith(".jpg") || a.endsWith(".png") || a.endsWith(".svg") || a.endsWith(".gif")) && e.issues.add(r);
    });
  }
});
const xu = [
  "ul",
  "ol",
  "script",
  "template",
  "style",
  "meta",
  "link",
  "map",
  "area",
  "datalist"
];
m({
  id: "list",
  uwId: 13,
  severity: 8,
  level: h.A,
  description: "Lists must be marked up correctly, meaning they must not contain content elements other than li elements.",
  analyze(e) {
    const t = p(document, 'ul, ol, [role="list"]');
    e.count.setReviewed(t.length), t.forEach((n) => {
      Fu(n) && e.issues.add(n);
    });
  }
});
const Fu = (e) => Array.from(e.childNodes).some((t) => ie(t) ? x(t.nodeValue) !== "" : A(t) && I(t) && C(t) !== "listitem" && !xu.includes(b(t))), ku = ["presentation", "none", "list"], Wu = ["ul", "ol", "menu"];
m({
  id: "listitem",
  uwId: 14,
  severity: 8,
  level: h.A,
  description: "All list items (li) must be contained within ul or ol parent elements.",
  analyze(e) {
    const t = p(document, 'li, [role="listitem"]');
    e.count.setReviewed(t.length), t.forEach((n) => {
      Nu(n) || e.issues.add(n);
    });
  }
});
const Nu = (e) => {
  const t = e.parentElement;
  if (!t)
    return !1;
  const n = E(t);
  return n && ku.includes(n) || Wu.includes(b(t));
};
m({
  id: "marquee",
  uwId: 22,
  severity: 10,
  level: h.A,
  description: "<marquee> elements must not be present because they are deprecated, increase difficulty for users with limited dexterity, and are distracting for users with cognitive or attention deficits.",
  analyze(e) {
    const t = "marquee", n = p(document, t, {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(n.length), n.forEach((r) => {
      S(r, t) || e.issues.add(r);
    });
  }
});
m({
  id: "meta-refresh",
  uwId: 21,
  actIds: ["bc659a"],
  severity: 10,
  level: h.A,
  description: 'The document must not use <meta http-equiv="refresh"> with a refresh time of less than 20 hours because it can prevent control over when the refresh occurs for users with disabilities.',
  analyze(e) {
    const t = 'meta[http-equiv="refresh"]', n = Array.from(document.querySelectorAll(t));
    if (!n.length) {
      e.count.addReviewed();
      const r = document.querySelector("meta[content]");
      r && j(r, "content") !== null && e.issues.add(r, f.inapplicable);
      return;
    }
    e.count.setReviewed(n.length), n.forEach((r) => {
      if (!r.hasAttribute("content")) {
        e.issues.add(r, f.inapplicable);
        return;
      }
      const a = ua(r);
      a === null ? e.issues.add(r, f.inapplicable) : a && a <= 72e3 && e.issues.add(r);
    });
  }
});
m({
  id: "meta-refresh-no-exceptions",
  uwId: 123,
  actIds: ["bisz58"],
  severity: 1,
  level: h.AAA,
  description: 'The document must not use <meta http-equiv="refresh"> because it can prevent control over when the refresh occurs for users with disabilities.',
  analyze(e) {
    const t = 'meta[http-equiv="refresh"]', n = Array.from(document.querySelectorAll(t));
    if (!n.length) {
      e.count.addReviewed();
      const r = document.querySelector("meta[content]");
      r && j(r, "content") !== null && e.issues.add(r, f.inapplicable);
      return;
    }
    e.count.setReviewed(n.length), n.forEach((r) => {
      if (!r.hasAttribute("content")) {
        e.issues.add(r, f.inapplicable);
        return;
      }
      const a = ua(r);
      a === null ? e.issues.add(r, f.inapplicable) : a && e.issues.add(r);
    });
  }
});
m({
  id: "meta-viewport",
  uwId: 78,
  actIds: ["b4f0c3"],
  severity: 10,
  level: h.AA,
  description: 'The document must not use the user-scalable="no" parameter in the <meta name="viewport"> element because it disables text scaling and zooming which is essential to users with low vision.',
  analyze(e) {
    const t = document.documentElement;
    e.count.addReviewed();
    const n = 'meta[name="viewport"]', r = document.querySelector(n);
    if (!r) {
      e.issues.add(t, f.inapplicable);
      return;
    }
    const a = Mu(r);
    if (!a || !a["user-scalable"] && !a["maximum-scale"]) {
      e.issues.add(t, f.inapplicable);
      return;
    }
    if (a["user-scalable"] === "no") {
      e.issues.add(r);
      return;
    }
    const i = parseFloat(a["user-scalable"]);
    if (a["user-scalable"] && (i || i === 0) && i > -1 && i < 1) {
      e.issues.add(r);
      return;
    }
    const o = parseFloat(a["maximum-scale"]);
    if (a["maximum-scale"] && 0 <= o && o < 2) {
      e.issues.add(r);
      return;
    }
  }
});
function Mu(e) {
  const t = sa(e);
  return t ? t.reduce((n, r) => {
    const a = r.trim();
    if (!a)
      return n;
    const [i, o] = a.split("=");
    if (!i || !o)
      return n;
    const l = i.toLowerCase().trim();
    let s = o.toLowerCase().trim();
    return l === "maximum-scale" && s === "yes" && (s = "1"), n[l] = s, n;
  }, {}) : null;
}
m({
  id: "meta-viewport-large",
  uwId: 124,
  severity: 1,
  level: h.BestPractice,
  description: 'The document must not use the user-scalable="no" parameter in the <meta name="viewport"> element because it disables text scaling and zooming which is essential to users with low vision.',
  analyze(e) {
    const t = 'meta[name="viewport"]', n = document.querySelector(t);
    if (!n)
      return;
    e.count.addReviewed();
    const r = 5, a = 2, i = L1(n);
    !n || !i || (i["user-scalable"] === "no" && e.issues.add(n), !(i["maximum-scale"] && parseFloat(i["maximum-scale"]) < a) && i["maximum-scale"] && parseFloat(i["maximum-scale"]) < r && e.issues.add(n));
  }
});
m({
  id: "nested-interactive",
  uwId: 141,
  actIds: ["307n5z"],
  severity: 10,
  level: h.A,
  description: "Nested interactive controls are not announced by screen readers",
  analyze(e) {
    const t = p(document, (n) => {
      var r;
      const a = C(n);
      return a ? !!((r = q(a)) != null && r.childrenPresentational) || a === "button" || a === "link" : !1;
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      p(n, "*", { excludeRoot: !0 }).some((r) => {
        const a = C(r);
        return V(r) === "widget" && M(r) || a === "button" || a === "link";
      }) && e.issues.add(n);
    });
  }
});
m({
  id: "no-autoplay-audio",
  uwId: 70,
  actIds: ["80f0bf", "4c31df"],
  severity: 10,
  level: h.A,
  description: "Ensures <video> or <audio> elements do not autoplay audio for more than three seconds without a control mechanism to stop or mute the audio.",
  analyze(e) {
    const t = p(document, "audio[autoplay], video[autoplay]", {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!n.currentSrc || !Q(n, "autoplay") || Q(n, "muted") || Q(n, "paused")) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      const r = la(n);
      !dn(n) && (r > 3 || Q(n, "loop")) && e.issues.add(n, f.incomplete);
    });
  }
});
m({
  id: "no-autoplay-audio-no-exceptions",
  uwId: 143,
  actIds: ["aaa1bf"],
  severity: 10,
  level: h.A,
  description: "Ensures <video> or <audio> elements do not autoplay audio for more than three seconds.",
  analyze(e) {
    const t = p(document, "audio[autoplay], video[autoplay]", {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!n.currentSrc || !Q(n, "autoplay") || Q(n, "muted") || Q(n, "paused")) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      (la(n) > 3 || Q(n, "loop")) && e.issues.add(n, f.incomplete);
    });
  }
});
m({
  id: "object-alt",
  actIds: ["8fc3b6"],
  errorHandle: {},
  analyze(e) {
    p(document, "object[data]").forEach((t) => {
      var n;
      if (!Pe(t) || !ps(t))
        return;
      e.count.addReviewed();
      const r = E(t);
      r && (z(r) || r === "img") || // embeds HTML content
      (n = R(t, "data")) != null && n.endsWith(".html") ? e.issues.add(t, f.inapplicable) : W(t, {
        altAttrNames: ["title"],
        checkPresentationRole: !0
      }) || e.issues.add(
        t,
        f.violation,
        t.hasAttribute("alt") ? "emptyAlt" : "missingAlt"
      );
    });
  }
});
m({
  id: "p-as-heading",
  uwId: 126,
  severity: 1,
  level: h.Experimental,
  description: "Styled p elements must not be used to represent headings because the structure of the document cannot otherwise be determined by screen reader users.",
  analyze(e) {
    const t = p(
      document,
      (n) => (n == null ? void 0 : n.nodeName) === "P" && Lu(n)
    );
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = Su(n);
      r ? e.issues.add(n) : r === void 0 && e.issues.add(n, f.incomplete);
    });
  }
});
function Lu(e) {
  var t, n;
  const r = Array.from(((t = e.parentNode) == null ? void 0 : t.childNodes) || []), a = (n = e.textContent) == null ? void 0 : n.trim(), i = /[.!?:;](?![.!?:;])/g;
  return a && (a.length === 0 || (a.match(i) || []).length >= 2) ? !1 : r.slice(r.indexOf(e) + 1).filter(
    (o) => {
      var l;
      return o.nodeName.toUpperCase() === "P" && ((l = o.textContent) == null ? void 0 : l.trim()) !== "";
    }
  ).length !== 0;
}
function Gu(e) {
  switch (e) {
    case "lighter":
      return 100;
    case "normal":
      return 400;
    case "bold":
      return 700;
    case "bolder":
      return 900;
  }
  const t = parseInt(e);
  return isNaN(t) ? 400 : t;
}
function qu(e) {
  var t, n, r;
  let a = e;
  const i = (t = e.textContent) == null ? void 0 : t.trim();
  let o = i;
  for (; o === i && a !== void 0; ) {
    let l = -1;
    if (e = a, e.children.length === 0)
      return e;
    do
      l++, o = (r = (n = e.children[l]) == null ? void 0 : n.textContent) == null ? void 0 : r.trim();
    while (o === "" && l + 1 < e.children.length);
    a = e.children[l];
  }
  return e;
}
function Nt(e) {
  const t = y(qu(e));
  return {
    fontWeight: Gu(t.getPropertyValue("font-weight")),
    fontSize: parseInt(t.getPropertyValue("font-size")),
    isItalic: t.getPropertyValue("font-style") === "italic"
  };
}
function Zn(e, t, n) {
  return n.reduce((r, a) => r || (!a.size || e.fontSize / a.size > t.fontSize) && (!a.weight || e.fontWeight - a.weight > t.fontWeight) && (!a.italic || e.isItalic && !t.isItalic), !1);
}
const Mt = {
  margins: [
    {
      weight: 150,
      italic: !0
    },
    {
      weight: 150,
      size: 1.15
    },
    {
      italic: !0,
      size: 1.15
    },
    {
      size: 1.4
    }
  ],
  passLength: 1,
  failLength: 0.5
};
function Su(e) {
  var t, n, r;
  const a = Array.from(((t = e.parentNode) == null ? void 0 : t.children) || []), i = a.indexOf(e), o = Mt.margins || [], l = a.slice(i + 1).find((T) => T.nodeName.toUpperCase() === "P"), s = a.slice(0, i).reverse().find((T) => T.nodeName.toUpperCase() === "P"), u = Nt(e), c = l ? Nt(l) : null, g = s ? Nt(s) : null, w = Mt.passLength, v = Mt.failLength, N = (n = e.textContent) == null ? void 0 : n.trim().length, D = (r = l == null ? void 0 : l.textContent) == null ? void 0 : r.trim().length;
  if (N && D && N > D * w || !c || !Zn(u, c, o))
    return !1;
  if (!(g && !Zn(u, g, o)) && !(N && D && N > D * v))
    return !0;
}
m({
  id: "page-has-heading-one",
  uwId: 31,
  severity: 5,
  level: h.BestPractice,
  description: "Ensures that the page, or at least one of its frames, contains an h1 element that appears before the start of the main content to allow screen reader users to use keyboard shortcuts to navigate the heading structure instead of wasting time listening to more of the web page to understand its structure.",
  analyze(e) {
    const t = p(document, 'h1, [role~="heading"]').some(
      (n) => Yt(n) === 1
    );
    e.count.addReviewed(), t || e.issues.add(document.body);
  }
});
m({
  id: "presentation-role-conflict",
  uwId: 127,
  actIds: ["46ca7f"],
  severity: 1,
  level: h.BestPractice,
  description: "Ensures elements which are marked to be removed from the accessibility tree are consistently ignored: does not use any global ARIA attribute and are not focusable.",
  analyze(e) {
    const t = p(document, 'img[alt=""], [role="none"], [role="presentation"]', {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      I(n) && (vn(n) || M(n)) && e.issues.add(n);
    });
  }
});
m({
  id: "region",
  uwId: 128,
  severity: 1,
  level: h.BestPractice,
  description: "It is best practice to contain all content excepting skip links, within distinct regions such as the header, nav, main, and footer.",
  analyze(e) {
    const t = p(document, "*");
    e.count.setReviewed(t.length);
    const n = Pu();
    t.forEach((r) => {
      n.includes(r) && e.issues.add(r);
    });
  }
});
function Pu() {
  return xa(document.body).map((e) => {
    for (; e.parentElement && !e.parentElement.hasRegionDescendant && e.parentElement !== document.body; )
      e = e.parentElement;
    return e;
  }).filter((e, t, n) => n.indexOf(e) === t);
}
function xa(e) {
  const t = b(e), n = ["iframe", "frame"].includes(t);
  if (C(e) === "button" || Bu(e) || n || ia(e) && ea(e, "href")) {
    let r = e;
    for (; r; )
      r.hasRegionDescendant = !0, r = r.parentElement;
    return n ? r ? [r] : [] : [];
  } else
    return e !== document.body && ve(e) ? [e] : [...e.children].filter((r) => A(r)).map((r) => xa(r)).reduce((r, a) => r.concat(a), []);
}
function Bu(e) {
  const t = Cn("landmark"), n = ["alert", "log", "status"], r = C(e) || "", a = R(e, "aria-live");
  return !!(["assertive", "polite"].includes(a) || n.includes(r) || t.includes(r) || e.matches("dialog, [role=dialog], [role=alertdialog], svg"));
}
m({
  id: "role-img-alt",
  actIds: ["23a2a8"],
  errorHandle: {},
  analyze(e, t = document) {
    p(t, '[role="img"]:not(img, area, input, object)').forEach((n) => {
      Re(n) || (e.count.addReviewed(), W(n, {
        altAttrNames: ["title"]
      }) || e.issues.add(
        n,
        f.violation,
        n.hasAttribute("alt") ? "emptyAlt" : "missingAlt"
      ));
    });
  }
});
const zu = ["row", "col", "rowgroup", "colgroup"];
m({
  id: "scope-attr-valid",
  errorHandle: {},
  analyze(e) {
    const t = p(
      document,
      "td[scope], th[scope]"
    );
    e.count.setReviewed(t.length), t.forEach((n) => {
      kr(n) && b(n) !== "th" && e.issues.add(n, f.violation, "thOnly");
      const r = F(n, "scope");
      (!r || !zu.includes(r)) && e.issues.add(n, f.violation, "invalidScopeValue");
    });
  }
});
m({
  id: "scrollable-region-focusable",
  uwId: 131,
  actIds: ["0ssw9k"],
  severity: 1,
  level: h.A,
  description: "Elements that have scrollable content should be accessible by keyboard",
  analyze(e) {
    const t = p(document, "*:not(select,textarea)");
    e.count.setReviewed(t.length), t.forEach((n) => {
      var r, a;
      if (!Le(n, 13))
        return !1;
      const i = E(n);
      if (i && (a = (r = Ee("aria-haspopup")) == null ? void 0 : r.values) != null && a.includes(i)) {
        if (S(n, '[role~="combobox"]'))
          return !1;
        const o = _(n, "id");
        if (o) {
          const l = oe(n);
          if (Array.from(
            l.querySelectorAll(
              `[aria-owns~="${o}"], [aria-controls~="${o}"]`
            )
          ).some((s) => he(s.getAttribute("role")).includes("combobox")))
            return !1;
        }
      }
      if (!ve(n, {
        skipAriaLabel: !0
      }))
        return !1;
      (!(ra(n).length > 0) || !un(n) || !K(n)) && e.issues.add(n);
    });
  }
});
m({
  id: "select-name",
  uwId: 132,
  actIds: ["e086e5"],
  severity: 1,
  level: h.A,
  description: "Each select element must have a programmatically associated label element.",
  analyze(e) {
    const t = p(document, "select");
    e.count.setReviewed(t.length), t.forEach((n) => {
      (rt(n) || nt(n) || !W(n, {
        altAttrNames: ["title"],
        checkPresentationRole: !0,
        furtherChecker: (r) => !!ge(r)
      })) && e.issues.add(n);
    });
  }
});
m({
  id: "server-side-image-map",
  uwId: 133,
  severity: 1,
  level: h.A,
  description: "The document contains an image map that is server-side instead of client-side.",
  analyze(e) {
    const t = p(document, "img[ismap]");
    e.count.setReviewed(t.length), e.issues.set(t);
  }
});
m({
  id: "skip-link",
  uwId: 50,
  severity: 8,
  level: h.BestPractice,
  description: "The page must have a link at the top before the navigation that allows users to skip lengthy navigation and proceed to a page's main content to save time.",
  analyze(e, t = document) {
    const n = p(
      t,
      'a[href^="#"], a[href^="/#"], a[href*="#"]'
    );
    e.count.setReviewed(n.length), n.forEach((r) => {
      const a = y(r);
      if (ia(r) && Nr(r, a))
        return;
      const i = ea(r, "href");
      i && I(i) || e.issues.add(r);
    });
  }
});
m({
  id: "svg-img-alt",
  uwId: 134,
  actIds: ["7d6734"],
  severity: 1,
  level: h.A,
  description: "Ensures SVG elements with an <img>, graphics-document or graphics-symbol role have an accessible text alternative.",
  analyze(e, t = document) {
    p(t, '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]').forEach((n) => {
      Re(n) && (e.count.addReviewed(), W(n, {
        altAttrNames: ["title"],
        furtherChecker: _u
      }) || e.issues.add(n));
    });
  }
});
function _u(e) {
  const t = e.querySelector("title");
  return !!t && fe(t, { includeHidden: !0 }).trim() !== "";
}
m({
  id: "tabindex",
  uwId: 26,
  severity: 10,
  level: h.BestPractice,
  description: "A tabindex attribute must never have a value greater than 0 to prevent an unexpected tab order that can give the appearance of skipping some elements entirely.",
  analyze(e) {
    const t = p(document, "[tabindex]");
    e.count.setReviewed(t.length), t.forEach((n) => {
      const r = j(n, "tabindex");
      r !== null && r > 0 && e.issues.add(n);
    });
  }
});
m({
  id: "table-duplicate-name",
  uwId: 10,
  severity: 3,
  level: h.BestPractice,
  outputType: "group",
  description: "Data table markup can be tedious and confusing. Make sure the caption and summary table attributes are not identical. Screen readers have some features to manage table navigation, but tables must be marked up accurately for these features to work correctly.",
  analyze(e) {
    const t = p(document, "table");
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!U(n).length) {
        e.issues.add(n, f.incomplete);
        return;
      }
      const r = x(n.getAttribute("summary")).toLowerCase();
      if (!r)
        return;
      const a = n.caption ? x(fe(n.caption)).toLowerCase() : "";
      a && r === a && e.issuesGroup.add(n, r);
    });
  }
});
m({
  id: "table-fake-caption",
  uwId: 135,
  severity: 1,
  level: h.Experimental,
  description: "Data table markup can be tedious and confusing. Screen readers have some features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",
  analyze(e) {
    const t = p(document, "table");
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!pn(n) || n.caption || Ge(n).length <= 1)
        return;
      const r = ze(n), a = r[0];
      r.length > 1 && a.length > 1 && a.every((i) => i === a[0]) && e.issues.add(n);
    });
  }
});
m({
  id: "target-size",
  uwId: 136,
  severity: 1,
  level: h.AA,
  description: "Touch targets must be at least 24 by 24 CSS pixels in size. Size is computed by taking the largest unobscured area of the touch target. If the size of the target is insufficient, then it must be at least 24 CSS pixels away from any other touch target.",
  analyze(e) {
    const t = p(
      document,
      (n) => Hu(n)
    );
    e.count.setReviewed(t.length), t.forEach((n) => {
      (!Ds(n) || !ys(n)) && e.issues.add(n);
    });
  }
});
function Hu(e) {
  return V(e) === "widget" && Ou(e) && !ju(e) && M(e) && (K(e) || !Fa(e)) && !qr(e, { noLengthCompare: !0 });
}
function Ou(e) {
  return b(e) !== "area";
}
function ju(e) {
  return b(e) === "svg" || !!S(e, "svg");
}
function Fa(e) {
  return !e || !e.parentElement ? !1 : V(e) === "widget" && K(e) ? !0 : Fa(e.parentElement);
}
const Kn = 3;
m({
  id: "td-has-header",
  uwId: 137,
  severity: 5,
  level: h.Experimental,
  description: "Data table markup can be tedious and confusing. Tables must be marked up done semantically and with the correct header structure. Screen readers have features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",
  analyze(e) {
    const t = p(document, "table");
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!pn(n))
        return;
      const r = ze(n);
      r.length < Kn || r.some((a) => a.length < Kn) || Uu(r) && e.issues.add(n);
    });
  }
});
function Uu(e) {
  return e.some(
    (t) => t.some((n) => {
      if (Ot(n) && ve(n) && !Ye(n)) {
        const r = ma(n, e);
        return r === void 0 ? !1 : !r.some((a) => ve(a));
      }
      return !1;
    })
  );
}
m({
  id: "td-headers-attr",
  uwId: 138,
  actIds: ["a25f45"],
  severity: 1,
  level: h.A,
  description: "Data table markup can be tedious and confusing. Markup tables semantically and with the correct header structure. Screen readers have features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",
  analyze(e) {
    p(document, "table", {
      includeScreenReaderHidden: !0
    }).forEach((t) => {
      if (!t.querySelector("th[headers], td[headers]"))
        return;
      if (e.count.addReviewed(), !I(t) || !B(t)) {
        e.issues.add(t, f.inapplicable);
        return;
      }
      const n = C(t);
      if (!n || !["table", "treegrid", "grid"].includes(n)) {
        e.issues.add(t, f.inapplicable);
        return;
      }
      const r = da(t), a = r.reduce((i, o) => {
        const l = _(o, "id");
        return l && i.push(l), i;
      }, []);
      for (const i of r) {
        if (!i.hasAttribute("headers") || !I(i))
          continue;
        const o = R(i, "headers");
        if (!o) {
          e.issues.add(t, f.incomplete);
          return;
        }
        const l = he(o), s = _(i, "id");
        if (
          // Cell referes to itself
          s && l.includes(s) || // Referred id is not inside the table
          l.some((u) => !a.includes(u))
        ) {
          e.issues.add(t);
          return;
        }
      }
    });
  }
});
m({
  id: "th-has-data-cells",
  uwId: 139,
  actIds: ["d0f69e"],
  severity: 1,
  level: h.A,
  description: "Data table markup can be tedious and confusing. Markup tables semantically and with the correct header structure. Screen readers have features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",
  analyze(e) {
    const t = "table, " + H(["table", "treegrid", "grid"]);
    p(document, t, {
      includeScreenReaderHidden: !0
    }).forEach((n) => {
      if (!pn(n))
        return;
      if (e.count.addReviewed(), !I(n) || !B(n)) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      const r = Vu(n), a = ze(n);
      let i = 0;
      for (const o of a)
        for (const l of o) {
          if (!jt(l) || !I(l))
            continue;
          ++i;
          const s = _(l, "id");
          if (l.hasAttribute("headers")) {
            e.issues.add(n);
            return;
          } else {
            if (s && r.includes(s))
              continue;
            {
              const u = xs(l, a);
              if (u === !1) {
                e.issues.add(n);
                return;
              } else if (u === void 0) {
                e.issues.add(n, f.incomplete);
                return;
              }
            }
          }
        }
      i === 0 && e.issues.add(n, f.inapplicable);
    });
  }
});
function Vu(e) {
  const t = da(e), n = ["headers", "aria-labelledby"], r = [];
  return n.forEach((a) => {
    t.forEach((i) => {
      const o = rn(i, a);
      o.length && r.push(...o);
    });
  }), r;
}
m({
  id: "valid-lang",
  uwId: 40,
  actIds: ["de46e4"],
  severity: 5,
  level: h.A,
  description: "The language specified in the HTML document must be one of the valid languages to ensure text is pronounced correctly for screen reader users.",
  analyze(e) {
    const t = "[lang], [xml\\:lang]", n = p(document.body, t);
    e.count.setReviewed(n.length), n.forEach((r) => {
      $u(r) || !Yu(r) ? e.issues.add(r, f.inapplicable) : Fr(r) || e.issues.add(r);
    });
  }
});
function $u(e) {
  return (!e.hasAttribute("lang") || e.getAttribute("lang") === "") && (!e.hasAttribute("xml:lang") || e.getAttribute("xml:lang") === "");
}
function Yu(e) {
  let t;
  const n = Array.from(e.childNodes);
  for (; t = n.shift(); ) {
    if (ie(t, { allowEmpty: !1 }))
      return !0;
    if (A(t) && !t.hasAttribute("lang") && !t.hasAttribute("xml:lang") && (B(t) || I(t))) {
      if (W(t, {
        altAttrNames: ["title", "alt", "value", "placeholder"],
        // Note: only checks direct text child nodes (see above)
        checkTextContent: !1
      }))
        return !0;
      t.childNodes.length > 0 && n.push(...Array.from(t.childNodes));
    }
  }
  return !1;
}
m({
  id: "video-caption",
  uwId: 140,
  actIds: ["eac66b", "ab4d13", "f51b46"],
  severity: 1,
  level: h.A,
  description: 'An HTML5 video element must include a track element with kind="captions" set as a property. The captions should convey all meaningful auditory information in the video including dialogue, musical cues, sound effects, and other relevant information for deaf users.',
  analyze(e) {
    const t = p(document, "video", {
      includeScreenReaderHidden: !0
    });
    e.count.setReviewed(t.length), t.forEach((n) => {
      if (!I(n) || !B(n) || !(Q(n, "autoplay") || dn(n))) {
        e.issues.add(n, f.inapplicable);
        return;
      }
      Br(n) || e.issues.add(n, f.incomplete);
    });
  }
});
var Qu = /* @__PURE__ */ ((e) => (e.Accesskeys = "accesskeys", e.AreaAlt = "area-alt", e.AriaAllowedAttr = "aria-allowed-attr", e.AriaAllowedRole = "aria-allowed-role", e.AriaCommandName = "aria-command-name", e.AriaDialogName = "aria-dialog-name", e.AriaHiddenBody = "aria-hidden-body", e.AriaHiddenFocus = "aria-hidden-focus", e.AriaInputFieldName = "aria-input-field-name", e.AriaMeterName = "aria-meter-name", e.AriaProgressbarName = "aria-progressbar-name", e.AriaRequiredAttr = "aria-required-attr", e.AriaRequiredChildren = "aria-required-children", e.AriaRequiredParent = "aria-required-parent", e.AriaRoledescription = "aria-roledescription", e.AriaRoles = "aria-roles", e.AriaText = "aria-text", e.AriaToggleFieldName = "aria-toggle-field-name", e.AriaTooltipName = "aria-tooltip-name", e.AriaTreeitemName = "aria-treeitem-name", e.AriaValidAttr = "aria-valid-attr", e.AriaValidAttrValue = "aria-valid-attr-value", e.AudioCaption = "audio-caption", e.AutocompleteValid = "autocomplete-valid", e.AvoidInlineSpacing = "avoid-inline-spacing", e.Blink = "blink", e.Bold = "bold", e.ButtonName = "button-name", e.Bypass = "bypass", e.ColorContrast = "color-contrast", e.ColorContrastEnhanced = "color-contrast-enhanced", e.CssOrientationLock = "css-orientation-lock", e.CustomFocusableElements = "custom-focusable-elements", e.DefinitionList = "definition-list", e.Dlitem = "dlitem", e.DocumentTitle = "document-title", e.DuplicateId = "duplicate-id", e.DuplicateIdActive = "duplicate-id-active", e.DuplicateIdAria = "duplicate-id-aria", e.EmptyHeading = "empty-heading", e.EmptyTableHeader = "empty-table-header", e.FieldsetLegend = "fieldset-legend", e.FocusOrderSemantics = "focus-order-semantics", e.FormFieldMultipleLabels = "form-field-multiple-labels", e.FrameFocusableContent = "frame-focusable-content", e.FrameTitle = "frame-title", e.FrameTitleUnique = "frame-title-unique", e.HeadingOrder = "heading-order", e.HiddenContent = "hidden-content", e.HtmlHasLang = "html-has-lang", e.HtmlLangValid = "html-lang-valid", e.HtmlXmlLangMismatch = "html-xml-lang-mismatch", e.IdenticalLinksSamePurpose = "identical-links-same-purpose", e.ImageAlt = "image-alt", e.ImageAltLong = "image-alt-long", e.ImageAltSuspicious = "image-alt-suspicious", e.ImageLinkWithoutText = "image-link-without-text", e.ImageRedundantAlt = "image-redundant-alt", e.ImageSameAlt = "image-same-alt", e.InputButtonName = "input-button-name", e.InputImageAlt = "input-image-alt", e.InvalidId = "invalid-id", e.Italic = "italic", e.Label = "label", e.LabelContentNameMismatch = "label-content-name-mismatch", e.LabelTitleOnly = "label-title-only", e.LandmarkBannerIsTopLevel = "landmark-banner-is-top-level", e.LandmarkComplementaryIsTopLevel = "landmark-complementary-is-top-level", e.LandmarkContentinfoIsTopLevel = "landmark-contentinfo-is-top-level", e.LandmarkMainIsTopLevel = "landmark-main-is-top-level", e.LandmarkNoDuplicateBanner = "landmark-no-duplicate-banner", e.LandmarkNoDuplicateContentinfo = "landmark-no-duplicate-contentinfo", e.LandmarkNoDuplicateMain = "landmark-no-duplicate-main", e.LandmarkOneMain = "landmark-one-main", e.LandmarkUnique = "landmark-unique", e.LinkAmbiguousText = "link-ambiguous-text", e.LinkInTextBlock = "link-in-text-block", e.LinkName = "link-name", e.LinkNoMentionTargetBlank = "link-no-mention-target-blank", e.LinkReferToImage = "link-refer-to-image", e.List = "list", e.Listitem = "listitem", e.Marquee = "marquee", e.MetaRefresh = "meta-refresh", e.MetaRefreshNoExceptions = "meta-refresh-no-exceptions", e.MetaViewport = "meta-viewport", e.MetaViewportLarge = "meta-viewport-large", e.NestedInteractive = "nested-interactive", e.NoAutoplayAudio = "no-autoplay-audio", e.NoAutoplayAudioNoExceptions = "no-autoplay-audio-no-exceptions", e.ObjectAlt = "object-alt", e.PAsHeading = "p-as-heading", e.PageHasHeadingOne = "page-has-heading-one", e.PresentationRoleConflict = "presentation-role-conflict", e.Region = "region", e.RoleImgAlt = "role-img-alt", e.ScopeAttrValid = "scope-attr-valid", e.ScrollableRegionFocusable = "scrollable-region-focusable", e.SelectName = "select-name", e.ServerSideImageMap = "server-side-image-map", e.SkipLink = "skip-link", e.SvgImgAlt = "svg-img-alt", e.Tabindex = "tabindex", e.TableDuplicateName = "table-duplicate-name", e.TableFakeCaption = "table-fake-caption", e.TargetSize = "target-size", e.TdHasHeader = "td-has-header", e.TdHeadersAttr = "td-headers-attr", e.ThHasDataCells = "th-has-data-cells", e.ValidLang = "valid-lang", e.VideoCaption = "video-caption", e))(Qu || {});
function Tn(e) {
  return `uw-a11y-report-${(+/* @__PURE__ */ new Date()).toString(36)}.${e}`;
}
function Zu(e) {
  const t = /^https?:\/\/([^/]+)(\/.*)$/, n = (+/* @__PURE__ */ new Date()).toString(36), [, r, a = ""] = e.match(t) || [];
  return [
    r,
    `${a.replace(/\/$/, "").replaceAll("/", "-")}`,
    `${n}.html`
  ].filter((i) => i).join("-");
}
const Ku = (e = /* @__PURE__ */ new Date()) => e.toISOString().replace(/\.(.*)/, ""), Xn = (e) => {
  if (typeof e == "object" && e !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const t = Object.getPrototypeOf(e);
      return t === Object.prototype || t === null;
    }
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  return !1;
}, Z = (...e) => e.reduce((t, n) => {
  if (Array.isArray(n))
    throw new TypeError(
      "Arguments provided to ts-deepmerge must be objects, not arrays."
    );
  return Object.keys(n).forEach((r) => {
    ["__proto__", "constructor", "prototype"].includes(r) || (Array.isArray(t[r]) && Array.isArray(n[r]) ? t[r] = Z.options.mergeArrays ? Z.options.uniqueArrayItems ? Array.from(
      new Set(t[r].concat(n[r]))
    ) : [...t[r], ...n[r]] : n[r] : Xn(t[r]) && Xn(n[r]) ? t[r] = Z(t[r], n[r]) : t[r] = n[r] === void 0 ? Z.options.allowUndefinedOverrides ? n[r] : t[r] : n[r]);
  }), t;
}, {}), Jt = {
  allowUndefinedOverrides: !1,
  mergeArrays: !0,
  uniqueArrayItems: !0
};
Z.options = Jt;
Z.withOptions = (e, ...t) => {
  Z.options = {
    ...Jt,
    ...e
  };
  const n = Z(...t);
  return Z.options = Jt, n;
};
const ka = (e, t) => {
  e.forEach((n) => {
    const r = [];
    Object.values(n.issuesGroup).forEach((a) => {
      a.forEach((i) => {
        r.push(i);
      });
    }), n.issues.concat(r).forEach((a) => t(n, a));
  });
}, En = (e, t, n) => {
  var r;
  return ((r = n == null ? void 0 : n[e]) == null ? void 0 : r[t]) || null;
}, Xu = (e, t) => `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Static analysis report</title>
    <link rel="icon" href="https://userway.org/favicon-32x32.png" type="image/png">
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .container {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
        }
        header, main {
            padding: 20px 20px 20px 30px;
        }
        main {
            flex: 1;
        }
        footer {
            background-color: #0a0e1a;
            padding: 50px 100px;
        }
        table, th, td {
            border: 1px solid black;
        }
        th {
            text-transform: capitalize;
        }
        td {
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <a aria-label="Link to UserWay.org Homepage" href="https://userway.org/">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMjhweCIgdmlld0JveD0iMCAwIDE1MCAyOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5sb2dvPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNi4yNjMzOTkxMyUiIHkxPSIxMC4wNjQzMDA3JSIgeDI9IjcyLjc1MTAyOTYlIiB5Mj0iMTAwLjk5MTI5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzI1QzVGRiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDA0OEZGIiBvZmZzZXQ9IjQ0Ljc0MDkwMDElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNDNTAwRjMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMiIgcG9pbnRzPSIwLjg5IDAuMTUgMTUuMDk0IDAuMTUgMTUuMDk0IDE1LjUxOCAwLjg5IDE1LjUxOCI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuMDAwMTA2NywxOS43MzMzMzMzIEM3LjczNTYxMTI0LDE5LjczMzMzMzMgNC4yNjY4NDIwNywxNi4yNjQ1MzMzIDQuMjY2ODQyMDcsMTIgTDQuMjY2ODQyMDcsNS42IEM0LjI2Njg0MjA3LDMuOTgyOTMzMzMgMi45NTA1ODcxMSwyLjY2NjY2NjY3IDEuMzMzNTM0ODEsMi42NjY2NjY2NyBMMC4wMDAyMTMzMzE0MzYsMi42NjY2NjY2NyBMMC4wMDAyMTMzMzE0MzYsMCBMMS4zMzM1MzQ4MSwwIEM0LjQyMDQ0MDcxLDAgNi45MzM0ODUwNCwyLjUxMzA2NjY3IDYuOTMzNDg1MDQsNS42IEw2LjkzMzQ4NTA0LDEyIEM2LjkzMzQ4NTA0LDE0Ljc5NDY2NjcgOS4yMDU0NjQ4NCwxNy4wNjY2NjY3IDEyLjAwMDEwNjcsMTcuMDY2NjY2NyBDMTQuNzk0NzQ4NSwxNy4wNjY2NjY3IDE3LjA2NjcyODMsMTQuNzk0NjY2NyAxNy4wNjY3MjgzLDEyIEwxNy4wNjY3MjgzLDUuNiBDMTcuMDY2NzI4MywyLjUxMzA2NjY3IDE5LjU3OTc3MjYsMCAyMi42NjY2Nzg1LDAgTDI0LDAgTDI0LDIuNjY2NjY2NjcgTDIyLjY2NjY3ODUsMi42NjY2NjY2NyBDMjEuMDQ5NjI2MiwyLjY2NjY2NjY3IDE5LjczMzM3MTMsMy45ODI5MzMzMyAxOS43MzMzNzEzLDUuNiBMMTkuNzMzMzcxMywxMiBDMTkuNzMzMzcxMywxNi4yNjQ1MzMzIDE2LjI2NDYwMjEsMTkuNzMzMzMzMyAxMi4wMDAxMDY3LDE5LjczMzMzMzMgWiBNMjMuMDcxNzk0OSw0LjI2NjY2NjY3IEwyMy45OTk3ODY3LDQuMjY2NjY2NjcgTDIzLjk5OTc4NjcsNy40NDUzMzMzMyBMMjMuOTk5Nzg2NywxMiBDMjMuOTk5Nzg2NywxOC42MTc2IDE4LjYxNzQzNDUsMjQgMTEuOTk5ODkzMywyNCBDNS4zODIzNTIxNiwyNCAwLDE4LjYxNzYgMCwxMiBMMCw3LjQ0NTMzMzMzIEwwLDYuNzAwOCBMMCw0LjI2NjY2NjY3IEwwLjkyNzk5MTc1MSw0LjI2NjY2NjY3IEMxLjg5ODY0OTc5LDQuMjY2NjY2NjcgMi42ODM3MDk0OCw1LjA1MTczMzMzIDIuNjgzNzA5NDgsNi4wMjI0IEwyLjY4MzcwOTQ4LDcuNDQ1MzMzMzMgTDIuNjY2NjQyOTYsNy40NDUzMzMzMyBMMi42NjY2NDI5NiwxMiBDMi42NjY2NDI5NiwxNy4xNDc3MzMzIDYuODUyMjA1NzYsMjEuMzMzMzMzMyAxMS45OTk4OTMzLDIxLjMzMzMzMzMgQzE3LjE0NzU4MDksMjEuMzMzMzMzMyAyMS4zMzMxNDM3LDE3LjE0NzczMzMgMjEuMzMzMTQzNywxMiBMMjEuMzMzMTQzNyw3LjQ0NTMzMzMzIEwyMS4zMTYwNzcyLDcuNDQ1MzMzMzMgTDIxLjMxNjA3NzIsNi4wMjI0IEMyMS4zMTYwNzcyLDUuMDUxNzMzMzMgMjIuMTAxMTM2OSw0LjI2NjY2NjY3IDIzLjA3MTc5NDksNC4yNjY2NjY2NyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzQuNzA3LDEyLjE5NTQgTDM0LjcwNywzLjY0OTQgTDM5LjA0NywzLjY0OTQgTDM5LjA0NywxMS45NzE0IEMzOS4wNDcsMTMuOTM5NCA0MC4yNzcsMTUuMzQ5NCA0Mi4wMjEsMTUuMzQ5NCBDNDMuNzY3LDE1LjM0OTQgNDQuOTk3LDEzLjkzOTQgNDQuOTk3LDExLjk3MTQgTDQ0Ljk5NywzLjY0OTQgTDQ5LjMzNywzLjY0OTQgTDQ5LjMzNywxMi4xOTU0IEM0OS4zMzcsMTYuMzU1NCA0Ni4zMTcsMTkuMjg1NCA0Mi4wMjEsMTkuMjg1NCBDMzcuNzI3LDE5LjI4NTQgMzQuNzA3LDE2LjM1NTQgMzQuNzA3LDEyLjE5NTQiIGlkPSJGaWxsLTMiIGZpbGw9IiMyMzE0NDkiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTAuNjk1NCwxNi42OTE0IEw1My4xMTE0LDEzLjgwNTQgQzU0LjY3NzQsMTUuMDM1NCA1Ni4zNzc0LDE1LjY4NTQgNTguMTg5NCwxNS42ODU0IEM1OS4zNzU0LDE1LjY4NTQgNjAuMDAxNCwxNS4yODE0IDYwLjAwMTQsMTQuNjA5NCBDNjAuMDAxNCwxMy44NzM0IDU5LjQ2NTQsMTMuNzYxNCA1Ny4zMzk0LDEzLjI2OTQgQzU0LjAwNTQsMTIuNTA3NCA1MS40MzM0LDExLjYzNTQgNTEuNDMzNCw4LjQzNzQgQzUxLjQzMzQsNS4zNzE0IDUzLjg0OTQsMy4zODE0IDU3LjQ5NTQsMy4zODE0IEM2MC4xNTc0LDMuMzgxNCA2Mi4yMzc0LDQuMDk3NCA2My45Mzk0LDUuNDYxNCBMNjEuNzY5NCw4LjUyNTQgQzYwLjMzNzQsNy40OTc0IDU4Ljc3MTQsNi45ODM0IDU3LjM4MzQsNi45ODM0IEM1Ni4zMzM0LDYuOTgzNCA1NS44MTk0LDcuNDA3NCA1NS44MTk0LDcuOTg5NCBDNTUuODE5NCw4Ljc3MzQgNTYuMzU1NCw5LjAxOTQgNTguNTQ3NCw5LjQ4NzQgQzYyLjEyNTQsMTAuMjQ5NCA2NC4zNjM0LDExLjIxMTQgNjQuMzYzNCwxNC4xNDE0IEM2NC4zNjM0LDE3LjM4NTQgNjEuODc5NCwxOS4yODU0IDU4LjAzMzQsMTkuMjg1NCBDNTUuMjU5NCwxOS4yODU0IDUyLjY0MTQsMTguNDEzNCA1MC42OTU0LDE2LjY5MTQiIGlkPSJGaWxsLTUiIGZpbGw9IiMyMzE0NDkiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC03IiBmaWxsPSIjMjMxNDQ5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iNzAuNjQ0NiA3LjUxOTYgNzAuNjQ0NiA5LjI0MTYgNzcuOTYwNiA5LjI0MTYgNzcuOTYwNiAxMy4xMTE2IDcwLjY0NDYgMTMuMTExNiA3MC42NDQ2IDE1LjE0NzYgNzguNjc2NiAxNS4xNDc2IDc4LjY3NjYgMTkuMDE3NiA2Ni4zMDQ2IDE5LjAxNzYgNjYuMzA0NiAzLjY0OTYgNzguNjc2NiAzLjY0OTYgNzguNjc2NiA3LjUxOTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBhdGggZD0iTTg1LjIwMjIsMTAuNDUwMiBMODcuODY0MiwxMC40NTAyIEM4OC44OTQyLDEwLjQ1MDIgODkuNjMyMiw5Ljg0NjIgODkuNjMyMiw5LjAxODIgQzg5LjYzMjIsOC4xOTAyIDg4Ljg5NDIsNy41ODYyIDg3Ljg2NDIsNy41ODYyIEw4NS4yMDIyLDcuNTg2MiBMODUuMjAyMiwxMC40NTAyIFogTTg5Ljc4ODIsMTkuMDE4MiBMODYuNTQ0MiwxNC4zODYyIEw4NS4yMDIyLDE0LjM4NjIgTDg1LjIwMjIsMTkuMDE4MiBMODAuODYyMiwxOS4wMTgyIEw4MC44NjIyLDMuNjUwMiBMODguMjIyMiwzLjY1MDIgQzkxLjY2NjIsMy42NTAyIDk0LjEwNjIsNS44NjQyIDk0LjEwNjIsOS4wMTgyIEM5NC4xMDYyLDExLjIxMDIgOTIuOTQyMiwxMi45MzQyIDkxLjA2NDIsMTMuODA2MiBMOTQuNzMyMiwxOS4wMTgyIEw4OS43ODgyLDE5LjAxODIgWiIgaWQ9IkZpbGwtOSIgZmlsbD0iIzIzMTQ0OSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTExIiBmaWxsPSIjMjMxNDQ5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iOTUuOTM1NiAzLjY0OTQgOTcuOTAzNiAzLjY0OTQgMTAyLjE1MzYgMTYuMDg3NCAxMDYuMjI1NiAzLjY0OTQgMTA4LjE3MTYgMy42NDk0IDExMi4yNDE2IDE2LjA4NzQgMTE2LjQ5MTYgMy42NDk0IDExOC40NjE2IDMuNjQ5NCAxMTMuMjAzNiAxOS4wMTc0IDExMS40ODE2IDE5LjAxNzQgMTA3LjIwOTYgNS45MzE0IDEwMi45MTM2IDE5LjAxNzQgMTAxLjE5MTYgMTkuMDE3NCI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTMwLjM5OTQsMTMuODczIEwxMjYuODQzNCw1Ljc5NyBMMTIzLjI2MzQsMTMuODczIEwxMzAuMzk5NCwxMy44NzMgWiBNMTMxLjExNTQsMTUuNTI5IEwxMjIuNTQ3NCwxNS41MjkgTDEyMS4wMDM0LDE5LjAxNyBMMTE5LjEwMzQsMTkuMDE3IEwxMjUuODgxNCwzLjY0OSBMMTI3Ljc4MTQsMy42NDkgTDEzMS4xMTU0LDExLjIwOSBMMTMxLjM1NzQsMTEuNzU3IEwxMzIuMjkxNCwxMy44NzMgTDEzMC4zOTk0LDEzLjg3MyBMMTMyLjI5MTQsMTMuODczIEwxMzQuNTU5NCwxOS4wMTcgTDEzMi42NTc0LDE5LjAxNyBMMTMxLjExNTQsMTUuNTI5IFoiIGlkPSJGaWxsLTEzIiBmaWxsPSIjMjMxNDQ5IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQuMDAwMDAwLCAzLjUwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkZpbGwtMTUtQ2xpcHBlZCI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0icGF0aC0yIj48L2c+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTUiIGZpbGw9IiMyMzE0NDkiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNtYXNrLTMpIiBwb2ludHM9IjcuMDg2IDkuMjU0IDAuODkgMC4xNSAzLjA2IDAuMTUgOC4wMDQgNy41OTggMTIuOTkyIDAuMTUgMTUuMDk0IDAuMTUgOC45MiA5LjI1NCA4LjkyIDE1LjUxOCA3LjA4NiAxNS41MTgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="UserWay Logo">
            </a>
        </header>
        <main>
            <div>
                ${e}
            </div>
            <table style="width:100%">
                <tr>
                    <th>ruleId</th>
                    <th>outcome</th>
                    <th>level</th>
                    <th>issues</th>
                    <th>violation</th>
                    <th>inapplicable</th>
                    <th>incomplete</th>
                </tr>
                ${t}
            </table>
        </main>
        <footer></footer>
    </div>
</body>
</html>
`, Ju = (e, t, n) => {
  const r = `
    <p>${e.date}</p>
    <p><a href="${e.url}">${e.url}</a></p>
    <p><a href="${e.htmlOrigin}">HTML page source</a></p> 
  `, a = t.reduce((i, o) => {
    const l = [];
    Object.values(o.issuesGroup).forEach((u) => {
      u.forEach((c) => {
        l.push(c);
      });
    });
    const s = o.issues.concat(l).reduce((u, c) => {
      const g = En(
        o.ruleId,
        c.selector,
        n
      );
      return g ? u + `<p><a href="${g}" target=”_blank”>${c.selector}</a></p>` : u + `<p>${c.selector}</p>`;
    }, "");
    return `${i}
                <tr>
                    <td>${o.ruleId}</td>
                    <td>${o.outcome}</td>
                    <td>${o.level}</td>
                    <td>${s}</td>
                    <td>${o.count.violation}</td>
                    <td>${o.count.inapplicable}</td>
                    <td>${o.count.incomplete}</td>
                </tr>`;
  }, "");
  return Xu(r, a);
}, ec = (e, t, n) => (ka(t, (r, a) => {
  const i = En(
    r.ruleId,
    a.selector,
    n
  );
  i && (a.screenshotPath = i);
}), JSON.stringify(
  {
    meta: e,
    violations: t
  },
  null,
  2
));
var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nc = "Expected a function", Wa = "__lodash_hash_undefined__", Na = 1 / 0, rc = "[object Function]", ac = "[object GeneratorFunction]", ic = "[object Symbol]", oc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lc = /^\w*$/, sc = /^\./, uc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cc = /[\\^$.*+?()[\]{}|]/g, dc = /\\(\\)?/g, mc = /^\[object .+?Constructor\]$/, pc = typeof $e == "object" && $e && $e.Object === Object && $e, hc = typeof self == "object" && self && self.Object === Object && self, Rn = pc || hc || Function("return this")();
function gc(e, t) {
  return e == null ? void 0 : e[t];
}
function fc(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var wc = Array.prototype, bc = Function.prototype, Ma = Object.prototype, Lt = Rn["__core-js_shared__"], Jn = function() {
  var e = /[^.]+$/.exec(Lt && Lt.keys && Lt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), La = bc.toString, In = Ma.hasOwnProperty, Ga = Ma.toString, Ac = RegExp(
  "^" + La.call(In).replace(cc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), er = Rn.Symbol, Dc = wc.splice, yc = qa(Rn, "Map"), qe = qa(Object, "create"), tr = er ? er.prototype : void 0, nr = tr ? tr.toString : void 0;
function pe(e) {
  var t = -1, n = e ? e.length : 0;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function vc() {
  this.__data__ = qe ? qe(null) : {};
}
function Cc(e) {
  return this.has(e) && delete this.__data__[e];
}
function Tc(e) {
  var t = this.__data__;
  if (qe) {
    var n = t[e];
    return n === Wa ? void 0 : n;
  }
  return In.call(t, e) ? t[e] : void 0;
}
function Ec(e) {
  var t = this.__data__;
  return qe ? t[e] !== void 0 : In.call(t, e);
}
function Rc(e, t) {
  var n = this.__data__;
  return n[e] = qe && t === void 0 ? Wa : t, this;
}
pe.prototype.clear = vc;
pe.prototype.delete = Cc;
pe.prototype.get = Tc;
pe.prototype.has = Ec;
pe.prototype.set = Rc;
function xe(e) {
  var t = -1, n = e ? e.length : 0;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function Ic() {
  this.__data__ = [];
}
function xc(e) {
  var t = this.__data__, n = mt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Dc.call(t, n, 1), !0;
}
function Fc(e) {
  var t = this.__data__, n = mt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function kc(e) {
  return mt(this.__data__, e) > -1;
}
function Wc(e, t) {
  var n = this.__data__, r = mt(n, e);
  return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
}
xe.prototype.clear = Ic;
xe.prototype.delete = xc;
xe.prototype.get = Fc;
xe.prototype.has = kc;
xe.prototype.set = Wc;
function we(e) {
  var t = -1, n = e ? e.length : 0;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
function Nc() {
  this.__data__ = {
    hash: new pe(),
    map: new (yc || xe)(),
    string: new pe()
  };
}
function Mc(e) {
  return pt(this, e).delete(e);
}
function Lc(e) {
  return pt(this, e).get(e);
}
function Gc(e) {
  return pt(this, e).has(e);
}
function qc(e, t) {
  return pt(this, e).set(e, t), this;
}
we.prototype.clear = Nc;
we.prototype.delete = Mc;
we.prototype.get = Lc;
we.prototype.has = Gc;
we.prototype.set = qc;
function mt(e, t) {
  for (var n = e.length; n--; )
    if ($c(e[n][0], t))
      return n;
  return -1;
}
function Sc(e, t) {
  t = _c(t, e) ? [t] : zc(t);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Uc(t[n++])];
  return n && n == r ? e : void 0;
}
function Pc(e) {
  if (!Pa(e) || Oc(e))
    return !1;
  var t = Yc(e) || fc(e) ? Ac : mc;
  return t.test(Vc(e));
}
function Bc(e) {
  if (typeof e == "string")
    return e;
  if (Fn(e))
    return nr ? nr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Na ? "-0" : t;
}
function zc(e) {
  return Sa(e) ? e : jc(e);
}
function pt(e, t) {
  var n = e.__data__;
  return Hc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function qa(e, t) {
  var n = gc(e, t);
  return Pc(n) ? n : void 0;
}
function _c(e, t) {
  if (Sa(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Fn(e) ? !0 : lc.test(e) || !oc.test(e) || t != null && e in Object(t);
}
function Hc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Oc(e) {
  return !!Jn && Jn in e;
}
var jc = xn(function(e) {
  e = Zc(e);
  var t = [];
  return sc.test(e) && t.push(""), e.replace(uc, function(n, r, a, i) {
    t.push(a ? i.replace(dc, "$1") : r || n);
  }), t;
});
function Uc(e) {
  if (typeof e == "string" || Fn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Na ? "-0" : t;
}
function Vc(e) {
  if (e != null) {
    try {
      return La.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function xn(e, t) {
  if (typeof e != "function" || t && typeof t != "function")
    throw new TypeError(nc);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, r);
    return n.cache = i.set(a, o), o;
  };
  return n.cache = new (xn.Cache || we)(), n;
}
xn.Cache = we;
function $c(e, t) {
  return e === t || e !== e && t !== t;
}
var Sa = Array.isArray;
function Yc(e) {
  var t = Pa(e) ? Ga.call(e) : "";
  return t == rc || t == ac;
}
function Pa(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Qc(e) {
  return !!e && typeof e == "object";
}
function Fn(e) {
  return typeof e == "symbol" || Qc(e) && Ga.call(e) == ic;
}
function Zc(e) {
  return e == null ? "" : Bc(e);
}
function Kc(e, t, n) {
  var r = e == null ? void 0 : Sc(e, t);
  return r === void 0 ? n : r;
}
var Xc = Kc;
const rr = /* @__PURE__ */ tc(Xc);
function Gt(e) {
  return e == null ? "" : `${e}`;
}
function Jc(e = {}) {
  const { separator: t, decimals: n } = e;
  return t ? n ? (r) => r.toFixed(n).replace(".", t) : (r) => `${r}`.replace(".", t) : n ? (r) => r.toFixed(n) : (r) => `${r}`;
}
function kn(e = {}) {
  const t = typeof e.quote == "string" ? e.quote : '"', n = typeof e.escapedQuote == "string" ? e.escapedQuote : `${t}${t}`;
  return !t || t === n ? (r) => r : (r) => (r.includes(t) && (r = r.replace(new RegExp(t, "g"), n)), `${t}${r}${t}`);
}
function ed(e = { stringFormatter: kn() }) {
  return (t) => e.stringFormatter(t.toString().slice(7, -1));
}
function td(e = { stringFormatter: kn() }) {
  return (t) => {
    if (t === null)
      return "";
    let n = JSON.stringify(t);
    return n === void 0 ? "" : (n[0] === '"' && (n = n.replace(/^"(.+)"$/, "$1")), e.stringFormatter(n));
  };
}
function ar(e, t, n) {
  const r = e[t];
  return r === void 0 ? n : r;
}
function Ba(e, t) {
  try {
    return Array.isArray(t) ? e.push(...t) : e.push(t), e;
  } catch {
    return e.concat(t);
  }
}
function en(e, t) {
  let n = !0;
  return e.reduce((r, a) => (a == null && (a = ""), n ? (n = !1, `${a}`) : `${r}${t}${a}`), "");
}
var ir;
(function(e) {
  e.header = "header", e.undefined = "undefined", e.boolean = "boolean", e.number = "number", e.bigint = "bigint", e.string = "string", e.symbol = "symbol", e.function = "function", e.object = "object";
})(ir || (ir = {}));
class nd {
  constructor(t) {
    this.opts = this.preprocessOpts(t);
  }
  /**
   * Check passing opts and set defaults.
   *
   * @param {Json2CsvOptions} opts Options object containing fields,
   * delimiter, default value, quote mark, header, etc.
   */
  preprocessOpts(t) {
    const n = Object.assign({}, t);
    n.fields && (n.fields = this.preprocessFieldsInfo(n.fields, n.defaultValue)), n.transforms = n.transforms || [];
    const r = n.formatters && n.formatters.string || kn(), a = td({ stringFormatter: r }), i = {
      header: r,
      undefined: Gt,
      boolean: Gt,
      number: Jc(),
      bigint: Gt,
      string: r,
      symbol: ed({ stringFormatter: r }),
      function: a,
      object: a
    };
    return n.formatters = Object.assign(Object.assign({}, i), n.formatters), n.delimiter = n.delimiter || ",", n.eol = n.eol || `
`, n.header = n.header !== !1, n.includeEmptyRows = n.includeEmptyRows || !1, n.withBOM = n.withBOM || !1, n;
  }
  /**
   * Check and normalize the fields configuration.
   *
   * @param {(string|object)[]} fields Fields configuration provided by the user
   * or inferred from the data
   * @returns {object[]} preprocessed FieldsInfo array
   */
  preprocessFieldsInfo(t, n) {
    return t.map((r) => {
      if (typeof r == "string")
        return {
          label: r,
          value: r.includes(".") || r.includes("[") ? (a) => rr(a, r, n) : (a) => ar(a, r, n)
        };
      if (typeof r == "object") {
        const a = "default" in r ? r.default : n;
        if (typeof r.value == "string") {
          const i = r.value;
          return {
            label: r.label || r.value,
            value: r.value.includes(".") || r.value.includes("[") ? (o) => rr(o, i, a) : (o) => ar(o, i, a)
          };
        }
        if (typeof r.value == "function") {
          const i = r.label || r.value.name || "", o = { label: i, default: a }, l = r.value;
          return {
            label: i,
            value(s) {
              const u = l(s, o);
              return u === void 0 ? a : u;
            }
          };
        }
      }
      throw new Error("Invalid field info option. " + JSON.stringify(r));
    });
  }
  /**
   * Create the title row with all the provided fields as column headings
   *
   * @returns {String} titles as a string
   */
  getHeader() {
    return en(this.opts.fields.map((t) => this.opts.formatters.header(t.label)), this.opts.delimiter);
  }
  /**
   * Preprocess each object according to the given transforms (unwind, flatten, etc.).
   * @param {Object} row JSON object to be converted in a CSV row
   */
  preprocessRow(t) {
    return this.opts.transforms.reduce((n, r) => n.map((a) => r(a)).reduce(Ba, []), [t]);
  }
  /**
   * Create the content of a specific CSV row
   *
   * @param {Object} row JSON object to be converted in a CSV row
   * @returns {String} CSV string (row)
   */
  processRow(t) {
    if (!t)
      return;
    const n = this.opts.fields.map((r) => this.processCell(t, r));
    if (!(!this.opts.includeEmptyRows && n.every((r) => r === "")))
      return en(n, this.opts.delimiter);
  }
  /**
   * Create the content of a specfic CSV row cell
   *
   * @param {Object} row JSON object representing the  CSV row that the cell belongs to
   * @param {FieldInfo} fieldInfo Details of the field to process to be a CSV cell
   * @returns {String} CSV string (cell)
   */
  processCell(t, n) {
    return this.processValue(n.value(t));
  }
  /**
   * Create the content of a specfic CSV row cell
   *
   * @param {T} value Value to be included in a CSV cell
   * @returns {String} Value stringified and processed
   */
  processValue(t) {
    const n = this.opts.formatters[typeof t];
    return n(t);
  }
}
class rd extends nd {
  constructor(t) {
    super(t);
  }
  /**
   * Main function that converts json to csv.
   *
   * @param {Array|Object} data Array of JSON objects to be converted to CSV
   * @returns {String} The CSV formated data as a string
   */
  parse(t) {
    const n = this.preprocessData(t);
    this.opts.fields = this.opts.fields || this.preprocessFieldsInfo(n.reduce((i, o) => (Object.keys(o).forEach((l) => {
      i.includes(l) || i.push(l);
    }), i), []), this.opts.defaultValue);
    const r = this.opts.header ? this.getHeader() : "", a = this.processData(n);
    return (this.opts.withBOM ? "\uFEFF" : "") + r + (r && a ? this.opts.eol : "") + a;
  }
  /**
   * Preprocess the data according to the give opts (unwind, flatten, etc.)
    and calculate the fields and field names if they are not provided.
   *
   * @param {Array|Object} data Array or object to be converted to CSV
   */
  preprocessData(t) {
    const n = Array.isArray(t) ? t : [t];
    if (!this.opts.fields) {
      if (t == null || n.length === 0)
        throw new Error('Data should not be empty or the "fields" option should be included');
      if (typeof n[0] != "object")
        throw new Error('Data items should be objects or the "fields" option should be included');
    }
    return this.opts.transforms.length === 0 ? n : n.map((r) => this.preprocessRow(r)).reduce(Ba, []);
  }
  /**
   * Create the content row by row below the header
   *
   * @param {Array} data Array of JSON objects to be converted to CSV
   * @returns {String} CSV string (body)
   */
  processData(t) {
    return en(
      t.map((n) => this.processRow(n)).filter((n) => n),
      // Filter empty rows
      this.opts.eol
    );
  }
}
var L;
(function(e) {
  e[e.BACKSPACE = 8] = "BACKSPACE", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.NEWLINE = 10] = "NEWLINE", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.TAB = 9] = "TAB", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.NUMBER_SIGN = 35] = "NUMBER_SIGN", e[e.DOLLAR_SIGN = 36] = "DOLLAR_SIGN", e[e.PERCENT_SIGN = 37] = "PERCENT_SIGN", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.LEFT_PARENTHESIS = 40] = "LEFT_PARENTHESIS", e[e.RIGHT_PARENTHESIS = 41] = "RIGHT_PARENTHESIS", e[e.ASTERISK = 42] = "ASTERISK", e[e.PLUS_SIGN = 43] = "PLUS_SIGN", e[e.COMMA = 44] = "COMMA", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.FULL_STOP = 46] = "FULL_STOP", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_ZERO = 48] = "DIGIT_ZERO", e[e.DIGIT_ONE = 49] = "DIGIT_ONE", e[e.DIGIT_TWO = 50] = "DIGIT_TWO", e[e.DIGIT_THREE = 51] = "DIGIT_THREE", e[e.DIGIT_FOUR = 52] = "DIGIT_FOUR", e[e.DIGIT_FIVE = 53] = "DIGIT_FIVE", e[e.DIGIT_SIX = 54] = "DIGIT_SIX", e[e.DIGIT_SEVEN = 55] = "DIGIT_SEVEN", e[e.DIGIT_EIGHT = 56] = "DIGIT_EIGHT", e[e.DIGIT_NINE = 57] = "DIGIT_NINE", e[e.COLON = 58] = "COLON", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.COMMERCIAL_AT = 64] = "COMMERCIAL_AT", e[e.LATIN_CAPITAL_LETTER_A = 65] = "LATIN_CAPITAL_LETTER_A", e[e.LATIN_CAPITAL_LETTER_B = 66] = "LATIN_CAPITAL_LETTER_B", e[e.LATIN_CAPITAL_LETTER_C = 67] = "LATIN_CAPITAL_LETTER_C", e[e.LATIN_CAPITAL_LETTER_D = 68] = "LATIN_CAPITAL_LETTER_D", e[e.LATIN_CAPITAL_LETTER_E = 69] = "LATIN_CAPITAL_LETTER_E", e[e.LATIN_CAPITAL_LETTER_F = 70] = "LATIN_CAPITAL_LETTER_F", e[e.LATIN_CAPITAL_LETTER_G = 71] = "LATIN_CAPITAL_LETTER_G", e[e.LATIN_CAPITAL_LETTER_H = 72] = "LATIN_CAPITAL_LETTER_H", e[e.LATIN_CAPITAL_LETTER_I = 73] = "LATIN_CAPITAL_LETTER_I", e[e.LATIN_CAPITAL_LETTER_J = 74] = "LATIN_CAPITAL_LETTER_J", e[e.LATIN_CAPITAL_LETTER_K = 75] = "LATIN_CAPITAL_LETTER_K", e[e.LATIN_CAPITAL_LETTER_L = 76] = "LATIN_CAPITAL_LETTER_L", e[e.LATIN_CAPITAL_LETTER_M = 77] = "LATIN_CAPITAL_LETTER_M", e[e.LATIN_CAPITAL_LETTER_N = 78] = "LATIN_CAPITAL_LETTER_N", e[e.LATIN_CAPITAL_LETTER_O = 79] = "LATIN_CAPITAL_LETTER_O", e[e.LATIN_CAPITAL_LETTER_P = 80] = "LATIN_CAPITAL_LETTER_P", e[e.LATIN_CAPITAL_LETTER_Q = 81] = "LATIN_CAPITAL_LETTER_Q", e[e.LATIN_CAPITAL_LETTER_R = 82] = "LATIN_CAPITAL_LETTER_R", e[e.LATIN_CAPITAL_LETTER_S = 83] = "LATIN_CAPITAL_LETTER_S", e[e.LATIN_CAPITAL_LETTER_T = 84] = "LATIN_CAPITAL_LETTER_T", e[e.LATIN_CAPITAL_LETTER_U = 85] = "LATIN_CAPITAL_LETTER_U", e[e.LATIN_CAPITAL_LETTER_V = 86] = "LATIN_CAPITAL_LETTER_V", e[e.LATIN_CAPITAL_LETTER_W = 87] = "LATIN_CAPITAL_LETTER_W", e[e.LATIN_CAPITAL_LETTER_X = 88] = "LATIN_CAPITAL_LETTER_X", e[e.LATIN_CAPITAL_LETTER_Y = 89] = "LATIN_CAPITAL_LETTER_Y", e[e.LATIN_CAPITAL_LETTER_Z = 90] = "LATIN_CAPITAL_LETTER_Z", e[e.LEFT_SQUARE_BRACKET = 91] = "LEFT_SQUARE_BRACKET", e[e.REVERSE_SOLIDUS = 92] = "REVERSE_SOLIDUS", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.CIRCUMFLEX_ACCENT = 94] = "CIRCUMFLEX_ACCENT", e[e.LOW_LINE = 95] = "LOW_LINE", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_LETTER_A = 97] = "LATIN_SMALL_LETTER_A", e[e.LATIN_SMALL_LETTER_B = 98] = "LATIN_SMALL_LETTER_B", e[e.LATIN_SMALL_LETTER_C = 99] = "LATIN_SMALL_LETTER_C", e[e.LATIN_SMALL_LETTER_D = 100] = "LATIN_SMALL_LETTER_D", e[e.LATIN_SMALL_LETTER_E = 101] = "LATIN_SMALL_LETTER_E", e[e.LATIN_SMALL_LETTER_F = 102] = "LATIN_SMALL_LETTER_F", e[e.LATIN_SMALL_LETTER_G = 103] = "LATIN_SMALL_LETTER_G", e[e.LATIN_SMALL_LETTER_H = 104] = "LATIN_SMALL_LETTER_H", e[e.LATIN_SMALL_LETTER_I = 105] = "LATIN_SMALL_LETTER_I", e[e.LATIN_SMALL_LETTER_J = 106] = "LATIN_SMALL_LETTER_J", e[e.LATIN_SMALL_LETTER_K = 107] = "LATIN_SMALL_LETTER_K", e[e.LATIN_SMALL_LETTER_L = 108] = "LATIN_SMALL_LETTER_L", e[e.LATIN_SMALL_LETTER_M = 109] = "LATIN_SMALL_LETTER_M", e[e.LATIN_SMALL_LETTER_N = 110] = "LATIN_SMALL_LETTER_N", e[e.LATIN_SMALL_LETTER_O = 111] = "LATIN_SMALL_LETTER_O", e[e.LATIN_SMALL_LETTER_P = 112] = "LATIN_SMALL_LETTER_P", e[e.LATIN_SMALL_LETTER_Q = 113] = "LATIN_SMALL_LETTER_Q", e[e.LATIN_SMALL_LETTER_R = 114] = "LATIN_SMALL_LETTER_R", e[e.LATIN_SMALL_LETTER_S = 115] = "LATIN_SMALL_LETTER_S", e[e.LATIN_SMALL_LETTER_T = 116] = "LATIN_SMALL_LETTER_T", e[e.LATIN_SMALL_LETTER_U = 117] = "LATIN_SMALL_LETTER_U", e[e.LATIN_SMALL_LETTER_V = 118] = "LATIN_SMALL_LETTER_V", e[e.LATIN_SMALL_LETTER_W = 119] = "LATIN_SMALL_LETTER_W", e[e.LATIN_SMALL_LETTER_X = 120] = "LATIN_SMALL_LETTER_X", e[e.LATIN_SMALL_LETTER_Y = 121] = "LATIN_SMALL_LETTER_Y", e[e.LATIN_SMALL_LETTER_Z = 122] = "LATIN_SMALL_LETTER_Z", e[e.LEFT_CURLY_BRACKET = 123] = "LEFT_CURLY_BRACKET", e[e.VERTICAL_LINE = 124] = "VERTICAL_LINE", e[e.RIGHT_CURLY_BRACKET = 125] = "RIGHT_CURLY_BRACKET", e[e.TILDE = 126] = "TILDE";
})(L || (L = {}));
L.QUOTATION_MARK + "", L.QUOTATION_MARK, L.REVERSE_SOLIDUS + "", L.REVERSE_SOLIDUS, L.SOLIDUS + "", L.SOLIDUS, L.LATIN_SMALL_LETTER_B + "", L.BACKSPACE, L.LATIN_SMALL_LETTER_F + "", L.FORM_FEED, L.LATIN_SMALL_LETTER_N + "", L.NEWLINE, L.LATIN_SMALL_LETTER_R + "", L.CARRIAGE_RETURN, L.LATIN_SMALL_LETTER_T + "", L.TAB;
var or;
(function(e) {
  e[e.LEFT_BRACE = 0] = "LEFT_BRACE", e[e.RIGHT_BRACE = 1] = "RIGHT_BRACE", e[e.LEFT_BRACKET = 2] = "LEFT_BRACKET", e[e.RIGHT_BRACKET = 3] = "RIGHT_BRACKET", e[e.COLON = 4] = "COLON", e[e.COMMA = 5] = "COMMA", e[e.TRUE = 6] = "TRUE", e[e.FALSE = 7] = "FALSE", e[e.NULL = 8] = "NULL", e[e.STRING = 9] = "STRING", e[e.NUMBER = 10] = "NUMBER", e[e.SEPARATOR = 11] = "SEPARATOR";
})(or || (or = {}));
var lr;
(function(e) {
  e[e.START = 0] = "START", e[e.ENDED = 1] = "ENDED", e[e.ERROR = 2] = "ERROR", e[e.TRUE1 = 3] = "TRUE1", e[e.TRUE2 = 4] = "TRUE2", e[e.TRUE3 = 5] = "TRUE3", e[e.FALSE1 = 6] = "FALSE1", e[e.FALSE2 = 7] = "FALSE2", e[e.FALSE3 = 8] = "FALSE3", e[e.FALSE4 = 9] = "FALSE4", e[e.NULL1 = 10] = "NULL1", e[e.NULL2 = 11] = "NULL2", e[e.NULL3 = 12] = "NULL3", e[e.STRING_DEFAULT = 13] = "STRING_DEFAULT", e[e.STRING_AFTER_BACKSLASH = 14] = "STRING_AFTER_BACKSLASH", e[e.STRING_UNICODE_DIGIT_1 = 15] = "STRING_UNICODE_DIGIT_1", e[e.STRING_UNICODE_DIGIT_2 = 16] = "STRING_UNICODE_DIGIT_2", e[e.STRING_UNICODE_DIGIT_3 = 17] = "STRING_UNICODE_DIGIT_3", e[e.STRING_UNICODE_DIGIT_4 = 18] = "STRING_UNICODE_DIGIT_4", e[e.STRING_INCOMPLETE_CHAR = 19] = "STRING_INCOMPLETE_CHAR", e[e.NUMBER_AFTER_INITIAL_MINUS = 20] = "NUMBER_AFTER_INITIAL_MINUS", e[e.NUMBER_AFTER_INITIAL_ZERO = 21] = "NUMBER_AFTER_INITIAL_ZERO", e[e.NUMBER_AFTER_INITIAL_NON_ZERO = 22] = "NUMBER_AFTER_INITIAL_NON_ZERO", e[e.NUMBER_AFTER_FULL_STOP = 23] = "NUMBER_AFTER_FULL_STOP", e[e.NUMBER_AFTER_DECIMAL = 24] = "NUMBER_AFTER_DECIMAL", e[e.NUMBER_AFTER_E = 25] = "NUMBER_AFTER_E", e[e.NUMBER_AFTER_E_AND_SIGN = 26] = "NUMBER_AFTER_E_AND_SIGN", e[e.NUMBER_AFTER_E_AND_DIGIT = 27] = "NUMBER_AFTER_E_AND_DIGIT", e[e.SEPARATOR = 28] = "SEPARATOR";
})(lr || (lr = {}));
var sr;
(function(e) {
  e[e.OBJECT = 0] = "OBJECT", e[e.ARRAY = 1] = "ARRAY";
})(sr || (sr = {}));
var ur;
(function(e) {
  e[e.VALUE = 0] = "VALUE", e[e.KEY = 1] = "KEY", e[e.COLON = 2] = "COLON", e[e.COMMA = 3] = "COMMA", e[e.ENDED = 4] = "ENDED", e[e.ERROR = 5] = "ERROR", e[e.SEPARATOR = 6] = "SEPARATOR";
})(ur || (ur = {}));
const ad = (e, t) => {
  ka(e, (r, a) => {
    const i = En(
      r.ruleId,
      a.selector,
      t
    );
    i && (a.screenshotPath = i);
  });
  const n = {};
  return new rd(n).parse(e);
}, cr = (e, t, n) => e === "violation" || e === "inapplicable" && !!t || e === "incomplete" && !!n, id = (e, { failInapplicable: t, failIncomplete: n } = {}) => {
  const r = [];
  for (const a of Object.values(e)) {
    const i = [];
    for (const l of a.issues)
      cr(l.type, t, n) && i.push(l);
    const o = {};
    for (const l in a.issuesGroup) {
      const s = [];
      for (const u of a.issuesGroup[l])
        cr(u.type, t, n) && s.push(u);
      s.length > 0 && (o[l] = s);
    }
    (i.length || Object.keys(o).length) && r.push({
      ...a,
      issues: i,
      issuesGroup: o
    });
  }
  return r;
};
function od(e, t) {
  return !!t.find((n) => {
    try {
      return new RegExp(n).test(e);
    } catch {
      throw new Error(`${n} is not a valid RegExp`);
    }
  });
}
const ld = "userwayAppConfig";
let tn = {
  // eslint-disable-next-line
  // @ts-ignore extend cypress configuration as custom value can be provided in config file
  ...Cypress.config(ld) || {}
}, dr = !1;
const Id = (e) => {
  if (dr)
    throw new Error("setupUserway() method has already been called.");
  tn = Z(tn, e), dr = !0;
}, sd = () => ({ ...tn }), ud = `var StaticAnalysis=function(O){"use strict";var pd=Object.defineProperty;var md=(O,re,pe)=>re in O?pd(O,re,{enumerable:!0,configurable:!0,writable:!0,value:pe}):O[re]=pe;var Y=(O,re,pe)=>(md(O,typeof re!="symbol"?re+"":re,pe),pe);var re=Object.defineProperty,pe=(e,t)=>{for(var r in t)re(e,r,{get:t[r],enumerable:!0})},hr={};pe(hr,{accesskeys:()=>Ma,areaAlt:()=>aa,ariaAllowedAttr:()=>Ji,ariaAllowedRole:()=>Qi,ariaCommandName:()=>eo,ariaDialogName:()=>to,ariaHiddenBody:()=>Oa,ariaHiddenFocus:()=>Va,ariaInputFieldName:()=>$a,ariaMeterName:()=>Xa,ariaProgressbarName:()=>Ya,ariaRequiredAttr:()=>Za,ariaRequiredChildren:()=>Ka,ariaRequiredParent:()=>Ja,ariaRoledescription:()=>Qa,ariaRoles:()=>ei,ariaText:()=>ti,ariaToggleFieldName:()=>ri,ariaTooltipName:()=>ni,ariaTreeitemName:()=>ai,ariaValidAttr:()=>ii,ariaValidAttrValue:()=>ha,audioCaption:()=>oi,autocompleteValid:()=>si,avoidInlineLineHeight:()=>oo,avoidInlineSpacing:()=>li,blink:()=>Ua,bold:()=>Zi,buttonName:()=>Ia,bypass:()=>ui,bypassHeading:()=>no,bypassLandmark:()=>ao,bypassMoveFocus:()=>io,colorContrast:()=>Ga,colorContrastEnhanced:()=>ci,cssOrientationLock:()=>di,customFocusableElements:()=>pa,definitionList:()=>hi,dlitem:()=>pi,documentTitle:()=>ba,duplicateId:()=>Sa,duplicateIdActive:()=>mi,duplicateIdAria:()=>fi,emptyHeading:()=>Ra,emptyTableHeader:()=>la,fieldsetLegend:()=>ua,focusOrderSemantics:()=>gi,formFieldMultipleLabels:()=>wi,frameFocusableContent:()=>bi,frameTitle:()=>ga,frameTitleUnique:()=>wa,headingOrder:()=>Ea,hiddenContent:()=>Ai,htmlLang:()=>Wa,htmlLangValid:()=>xa,htmlXmlLangMismatch:()=>qa,identicalLinksSamePurpose:()=>Ca,imageAlt:()=>ea,imageAltLong:()=>na,imageAltSuspicious:()=>oa,imageLinkWithoutText:()=>va,imageRedundantAlt:()=>ta,imageSameAlt:()=>ra,inputButtonName:()=>ka,inputImageAlt:()=>ia,invalidId:()=>Pa,italic:()=>ro,label:()=>Di,labelContentNameMismatch:()=>ja,labelTitleOnly:()=>Fa,landmarkBannerIsTopLevel:()=>yi,landmarkComplementaryIsTopLevel:()=>vi,landmarkContentinfoIsTopLevel:()=>Ci,landmarkMainIsTopLevel:()=>Ti,landmarkNoDuplicateBanner:()=>Ri,landmarkNoDuplicateContentinfo:()=>Ei,landmarkNoDuplicateMain:()=>Fi,landmarkOneMain:()=>ki,landmarkUnique:()=>Ii,linkAmbiguousText:()=>Ba,linkInTextBlock:()=>Wi,linkName:()=>Da,linkNoMentionTargetBlank:()=>La,linkReferToImage:()=>ya,list:()=>ca,listitem:()=>da,marquee:()=>fa,metaRefresh:()=>ma,metaRefreshNoExceptions:()=>xi,metaViewport:()=>_a,metaViewportLarge:()=>qi,nestedInteractive:()=>Yi,noAutoplayAudio:()=>za,noAutoplayAudioNoExceptions:()=>Ki,objectAlt:()=>Ni,pAsHeading:()=>Si,pageHasHeadingOne:()=>Ta,presentationRoleConflict:()=>Mi,region:()=>Gi,roleImgAlt:()=>Li,scopeAttrValid:()=>Pi,scrollableRegionFocusable:()=>Bi,selectName:()=>Hi,serverSideImageMap:()=>Oi,skipLink:()=>Ha,svgImgAlt:()=>Vi,tabindex:()=>Aa,tableDuplicateName:()=>sa,tableFakeCaption:()=>zi,targetSize:()=>Ui,tdHasHeader:()=>_i,tdHeadersAttr:()=>ji,thHasDataCells:()=>$i,validLang:()=>Na,videoCaption:()=>Xi});var ze=(e=>(e.A="A",e.AA="AA",e.AAA="AAA",e.BestPractice="Best Practice",e.Experimental="Experimental",e))(ze||{});function d(e,t){return{id:e,...t,fixable:t.fixable||!1,severity:t.severity||1}}var ea=d(1,{description:"All images must have alternate text to convey their purpose to the user.",display:"Image alternate text",errorMessage:{emptyAlt:'Image has an empty "alt" attribute',missingAlt:'Image missing an alternate text, such as "alt" attribute'},fixable:!0,level:"A",key:"image-alt",recommendation:{emptyAlt:'Add an "alt" attribute with concise description. For example: <img src="rocket.jpg" alt="A rocket lifts off from the launchpad" />. If the image is purely decorative or a text description would be redundant, add an empty "alt" attribute as well as an aria-hidden attribute with a value of "true". For example: <img src="decorative-graphic.jpg" alt="" aria-hidden="true" />.',missingAlt:'Add an "alt" attribute with concise description. For example: <img src="rocket.jpg" alt="A rocket lifts off from the launchpad" />. If the image is purely decorative or a text description would be redundant, add an empty "alt" attribute as well as an aria-hidden attribute with a value of "true". For example: <img src="decorative-graphic.jpg" alt="" aria-hidden="true" />.'},references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1, Technique F65",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"},{label:"WCAG 2.1, Technique F67",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H67"},{label:"WCAG 2.1, Technique H37",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H37"},{label:"WCAG 2.1, Technique ARIA10",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10"},{label:"ACT: Image has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/"}],severity:5}),ta=d(2,{description:"Text of buttons and links should not be repeated in the image alternative text",display:"Redundant image alternate text",errorMessage:"Text of parent element is repeated in image alternative text",level:"Best Practice",key:"image-redundant-alt",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1: Technique F65",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"},{label:"WCAG 2.1: Technique H36",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H36.html"}],recommendation:\`Left an "alt" attribute of image empty or modify it so it does not repeat the parent element's text\`,severity:1}),ra=d(3,{description:'Each <img> element with unique value of "src" attribute must have unique value of "alt" attribute',display:"Same image alternate text",errorMessage:'Two or more images with unique value of "src" attribute have the same "alt" attribute',level:"A",key:"image-same-alt",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1, Technique H37",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H37"}],recommendation:\`Write each image's "alt" attribute to uniquely describe that image's meaning or purpose\`,severity:1}),na=d(4,{description:'"alt" attribute value of <img> element must not contain more than 256 characters',display:"Length of image alternate text",errorMessage:'The "alt" attribute exceeds the recommended length',level:"A",key:"image-alt-long",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1, Technique H37",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H37"}],recommendation:'Shorten the length of the "alt" attribute to be 5–10 words. If a longer description is necessary, wrap the <img> element within a <figure> element. Add a <figcaption> element that links to a lengthier description on a separate page. Avoid using the "longdesc" attribute because it is not well-supported.',severity:2}),aa=d(5,{description:"All <area> elements must have alternate text to convey their purpose to the user",display:"Alternate text for <area> element",errorMessage:{emptyAlt:'<area> element has an empty "alt" attribute',missingAlt:'<area> element missing an alternate text, such as "alt" attribute'},level:"A",key:"area-alt",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1, Technique F65",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"},{label:"WCAG 2.1, Technique H24",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H24"},{label:"ACT: Link has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/c487ae/"}],recommendation:{emptyAlt:'Add an "alt" attribute with concise description. For example: <area shape="rect" coords="0,0,48,48" href="userway.htm" alt="Userway logo" />',missingAlt:'Add an "alt" attribute with concise description. For example: <area shape="rect" coords="0,0,48,48" href="userway.htm" alt="Userway logo" />'},severity:5}),ia=d(6,{description:"All image buttons must have alternate text to convey their purpose to the user.",display:"Image button alternate text",errorMessage:{emptyAlt:'Image button has an empty "alt" attribute',missingAlt:'Image button missing an alternate text, such as "alt" attribute'},level:"A",key:"input-image-alt",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1, Technique F65",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"},{label:"WCAG 2.1, Technique F67",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H67"},{label:"WCAG 2.1, Technique H36",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H36"},{label:"WCAG 2.1, Technique ARIA10",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10"},{label:"ACT: Image button has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/59796f/"}],recommendation:{emptyAlt:'Add a concise description to "alt" attribute. For example: <input type="image" src="rocket.jpg" alt="A rocket lifts off from the launchpad" />',missingAlt:'Add an "alt" or "aria-label" attribute with concise description. For example: <input type="image" src="rocket.jpg" alt="A rocket lifts off from the launchpad" />'},severity:10}),oa=d(7,{description:'The "alt" attribute of <img> element must not contain extraneous text',display:"Extraneous image alternate text",errorMessage:'The "alt" attribute contains extraneous text',level:"A",key:"image-alt-suspicious",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1, Technique H37",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H37"}],recommendation:'Delete from the "alt" attribute extraneous text such as "image of", "photo of", "graphic of" , "illustration of", "icon of", etc. For example, replace: alt="A photo of an astronaut performing a space walk" with alt="An astronaut performing a space walk"',severity:1}),sa=d(10,{description:'Text of "summary" attribute and <caption> element of all <table> elements must not be the same',display:"Duplicate table name",errorMessage:'"Summary" attribute and <caption> element of table have the same text',level:"Best Practice",key:"table-duplicate-name",references:[{label:"WCAG 2.1, Technique H39",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H39"},{label:"WCAG 2.1, Technique H43",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H43"},{label:"WCAG 2.1, Technique H51",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H51"},{label:"WCAG 2.1, Technique H63",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H63"},{label:"WCAG 2.1, Technique H73",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H73"}],recommendation:'Ensure that "summary" attribute and <caption> element of the <table> element have a different text',severity:3}),la=d(11,{description:'All <th> elements or elements with role="rowheader" and role="columnheader" must have discernible text',display:"Empty table header",errorMessage:"Table header text is empty",level:"Best Practice",key:"empty-table-header",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"}],recommendation:'For all <th> elements or elements with role="rowheader" and role="columnheader" add discernible text. If the element is not header, marking it up with a <td>',severity:1}),ua=d(12,{description:"<fieldset> element must contain a <legend> element as first child",display:"Fieldset lacks a legend",errorMessage:"<fieldset> element lacks a <legend> element as first child",level:"A",key:"fieldset-legend",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"}],recommendation:"Add a descriptive <legend> element as the first child within the <fieldset> element to describe the grouping. For example: <fieldset><legend>Pizza toppings</legend>...</fieldset>",severity:10}),ca=d(13,{description:"All <ul> and <ol> elements must only directly contain <li>, <script> or <template> elements",display:"List",errorMessage:"List is structured incorrectly",level:"A",key:"list",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"WCAG 2.1, Technique H48",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H48"},{label:"MDN: The Unordered List element",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"},{label:"MDN: The Ordered List element",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"}],recommendation:"Remove all elements from the list except <li>, <script> or <template>",severity:8}),da=d(14,{description:'All <li> elements must be contained in a <ul>, <ol> element or element with role="list"',display:"List item",errorMessage:'<li> element is not contained in a <ul>, <ol> element or element with role="list"',level:"A",key:"listitem",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WCAG 2.1, Technique H48",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H48"},{label:"MDN: The List Item element",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"}],recommendation:'Enclose the <li> element in a <ul>, <ol> element or in a parent element with role="list"',severity:8}),ha=d(15,{description:"All ARIA attributes starting with aria- must have valid values",display:"ARIA valid attribute value",errorMessage:"Element has non-existent or misspelled ARIA attribute value",level:"A",key:"aria-valid-attr-value",references:[{label:"4.1.2 Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1 Technique ARIA5",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5"},{label:"WAI-ARIA 1.2, Definitions of States and Properties",url:"https://www.w3.org/TR/wai-aria-1.1/#states_and_properties"},{label:"WAI-ARIA 1.2, Characteristics of States and Properties, Value",url:"https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value"},{label:"ACT: ARIA state or property has valid value",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/proposed/"}],recommendation:"Checks all elements that contain WAI-ARIA attributes to ensure that the attributes have valid values",severity:10}),pa=d(17,{description:'All non-interactive elements with mouse or keyboard handlers have a tabindex="0" attribute',display:"Custom focusable elements",errorMessage:'Non-interactive element with mouse or keyboard handlers missing tabindex="0" attribute',level:"A",key:"custom-focusable-elements",references:[{label:"2.1.1 Keyboard",url:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"}],recommendation:'Add a tabindex="0" attribute to the element with the mouse or keyboard handler',severity:10}),ma=d(21,{description:'A <meta> element with an http-equiv="refresh" attribute must not have refresh time of less than 20 hours',display:"Meta refresh",errorMessage:'Page contains a <meta> element with http-equiv="refresh" attribute with refresh time of more than 0 and less than 20 hours',level:"A",key:"meta-refresh",references:[{label:"2.2.1 Timing Adjustable",url:"https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"},{label:"2.2.4 Interruptions",url:"https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html"},{label:"3.2.5: Change on Request",url:"https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html"},{label:"WCAG 2.1 Technique G110",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G110"},{label:"WCAG 2.0 Technique H76",url:"https://www.w3.org/TR/WCAG-TECHS/H76.html"},{label:"WCAG 2.0 Technique F40",url:"https://www.w3.org/TR/WCAG-TECHS/F40.html"},{label:"WCAG 2.0 Technique F41",url:"https://www.w3.org/TR/WCAG-TECHS/F41.html"},{label:"ACT: Meta element has no refresh delay",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/bc659a/"}],recommendation:'Remove all <meta> elements with http-equiv="refresh" attribute or set the refresh time to 0 or more than 72000 seconds (20 hours). As an alternative, you can implement the page refresh using a script and provide a mechanism for users to stop or extend the timing of it',severity:10}),fa=d(22,{description:"<marquee> elements are deprecated and must not be used",display:"Marquee",errorMessage:"A <marquee> element is present",level:"A",key:"marquee",references:[{label:"2.2.2 Pause, Stop, Hide",url:"https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide"},{label:"WCAG 2.1, Technique F16",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F16.html"},{label:"MDN: The Marquee element (deprecated)",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee"}],recommendation:"Remove all <marquee> elements",severity:10}),ga=d(23,{description:"All <iframe> and <frame> elements mush have an accessible name that is not empty",display:"Accessible names for <iframe> and <frame> elements",errorMessage:"<iframe> or <frame> element has no accessible name",level:"A",key:"frame-title",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique H64",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H64.html"},{label:"ACT: Iframe element has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/cae760/proposed/"}],recommendation:'For each <iframe> or <frame> element add a non-empty "title" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:7}),wa=d(24,{description:"All <iframe> or <frame> elements within the same document tree must have unique accessible names",display:"Unique titles for <iframe> and <frame> elements",errorMessage:"Few <iframe> or <frame> elements within the same document tree have the same accessible name (given by the title and aria-label attributes) but don’t embed equivalent resources",level:"A",key:"frame-title-unique",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique H64",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H64.html"},{label:"ACT: Iframe elements with identical accessible names have equivalent purpose",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/4b1c6c/proposed/"}],recommendation:"Make each <iframe> or <frame> element's title unique and non-empty. If the elements embed the same resource, you can use the same title for all of them.",severity:7}),ba=d(25,{description:"HTML page must have a non-empty <title> element",display:"Document title",errorMessage:"HTML page has no <title> element or it is empty",level:"A",key:"document-title",references:[{label:"2.4.2 Page Titled",url:"https://www.w3.org/WAI/WCAG21/Understanding/page-titled"},{label:"WCAG 2.1, Technique H25",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H25.html"},{label:"WCAG 2.1 Technique G88",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G88.html"},{label:"ACT: HTML page has non-empty title",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/2779a5/"}],recommendation:"Add a non-empty <title> element to the HTML page",severity:7}),Aa=d(26,{description:'Elements should not have a "tabindex" attribute with value greater than "0"',display:"Tabindex greater than 0",errorMessage:'Element has a "tabindex" attribute with value greater than "0"',level:"Best Practice",key:"tabindex",references:[{label:"2.4.3 Focus Order",url:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},{label:"WCAG 2.1, Technique F44",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html"}],recommendation:'Remove the "tabindex" attribute or set its value to "0". Alternatively, set the value to "-1" and add a Javascript code that changes the tab focus order',severity:10}),Da=d(27,{description:'All <a> elements or elements with role="link" must have non-empty accessible name',display:"Link accessible name",errorMessage:"Link has no accessible name",level:"A",key:"link-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique ARIA7",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7"},{label:"WCAG 2.1, Technique ARIA8",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8"},{label:"WCAG 2.1, Technique G91",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html"},{label:"WCAG 2.1, Technique H30",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html"},{label:"ACT: Link has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/c487ae/"}],recommendation:'For each <a> element and element with role="link" add an inner text, non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:7}),ya=d(28,{description:'<a> element or element with role="link" should not refer to an image file',display:"Link refers to image",errorMessage:'<a> element or element with role="link" points to an image file',level:"A",key:"link-refer-to-image",references:[{label:"2.4.4 Link Purpose (In Context)",url:"https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context"}],recommendation:'Insert the image within the page using an <img> tag instead of linking to the image itself. Add a descriptive "alt" attribute to the <img> element. For example: <img src="astronaut.jpg" alt="An astronaut performs a space walk"',severity:5}),va=d(29,{description:'All <img> elements that are wrapped in <a> must have "alt" text',display:"Image link without text",errorMessage:'Image link lacks populated "alt" attribute',level:"A",key:"image-link-without-text",references:[{label:"2.4.4 Link Purpose (In Context)",url:"https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context"},{label:"2.4.9 Link Purpose (Link Only)",url:"https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only"},{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}],recommendation:\`Provide an "alt" attribute that describes the link's target or function. For example: <a href="www.nasa.gov"><img src="astronaut.jpg" alt="the NASA website"></a>\`,severity:8}),Ca=d(30,{description:'<a> elements or elements with role="link" that have the same accessible name must serve the same purpose',display:"Identical links with same purpose",errorMessage:'Two or more <a> elements or elements with role="link" that have the same accessible name do not serve the same purpose',level:"AAA",key:"identical-links-same-purpose",references:[{label:"2.4.9 Link Purpose (Link Only)",url:"https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only"},{label:"WCAG 2.1, Technique F84",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F84.html"},{label:"ACT: Links with identical accessible names have equivalent purpose",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/b20e66/proposed/"}],recommendation:'For each <a> element or element with role="link" that has the same accessible name, verify that they serve the same purpose',severity:1}),Ta=d(31,{description:"Page or or at least one of its frames should contain a level-one heading",display:"Page has level-one heading",errorMessage:'Page does not contain a <h1> element or element with role="heading" and aria-level="1"',level:"Best Practice",key:"page-has-heading-one",references:[{label:"2.4.6 Headings and Labels",url:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},{label:"WAI, Headings - Page Structure Tutorial",url:"https://www.w3.org/WAI/tutorials/page-structure/headings/"}],recommendation:'Ensure that page starts with a <h1> element or element with role="heading" and aria-level="1". Also, ensure that the page has only one such element',severity:5}),Ra=d(32,{description:'All heading elements or elements with role="heading" must have non-empty accessible name',display:"Empty heading",errorMessage:"Heading element has an empty accessible name",level:"Best Practice",key:"empty-heading",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WCAG 2.1, Technique H42",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H42.html"},{label:"ACT: Heading has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/ffd0e9/proposed/"}],recommendation:'For each heading element and element with role="heading" add an inner text, non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:5}),Ea=d(33,{description:"Heading levels should only increase by one",display:"Heading order",errorMessage:'<h1>-<h6> elements or elements with role="heading" is not ordered hierarchically',level:"Best Practice",key:"heading-order",references:[{label:"WCAG 2.0, Technique H42",url:"https://www.w3.org/TR/WCAG20-TECHS/H42"},{label:"WCAG 2.0, Technique G141",url:"https://www.w3.org/TR/WCAG20-TECHS/G141"}],recommendation:"Check that all headings are marked with <h1> through <h6> elements and that these are ordered hierarchically",severity:5}),Fa=d(34,{description:"All <input> elements should have a visible label",display:"Visible label for <input> element",errorMessage:"<input> element has no visible label",level:"Best Practice",key:"label-title-only",references:[{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"WCAG 2.1, Technique ARIA16",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"}],recommendation:'Ensure that every <input> element that requires a label is has a label other than the "title" or "aria-describedby" attributes. Provide a visible label using explicit or implicit <label> element, "aria-label" attribute or "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:10}),ka=d(35,{description:"All input buttons must have an accessible name that is not empty",display:"Input button name",errorMessage:"An input button has no accessible name",level:"A",key:"input-button-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"WCAG 2.1, Technique ARIA16",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"},{label:"ACT: Button has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/"}],recommendation:'For each input button add a non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:10}),Ia=d(36,{description:"All buttons must have an accessible name that is not empty",display:"Button name",errorMessage:"A button has no accessible name",level:"A",key:"button-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"WCAG 2.1, Technique ARIA16",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"},{label:"ACT: Button has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/"}],recommendation:'For each button element and element with role="button" add an inner text, non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. As an alternative, you can add role="presentation" or role="none" attribute to the button element to remove it from the accessibility tree',severity:10}),Wa=d(37,{description:"HTML document element must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default",display:"HTML lang attribute",errorMessage:"An HTML lang attribute is not present or is empty",level:"A",key:"html-has-lang",references:[{label:"3.1.1 Language of Page",url:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"},{label:"WCAG 2.1, Technique H57",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"},{label:"ACT: HTML page has lang attribute",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/b5c3f8/"},{label:"MDN: The lang global attribute",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang"}],recommendation:"Set the lang attribute of <html> based on the page language",severity:5}),xa=d(38,{description:'<html> element must have a valid value for the "lang" or "xml:lang" attribute',display:'Valid HTML "lang" attribute',errorMessage:'<html> element has an invalid value for the "lang" or "xml:lang" attribute',level:"A",key:"html-lang-valid",references:[{label:"3.1.1 Language of Page",url:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"},{label:"WCAG 2.1, Technique H57",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"},{label:"ACT: HTML page lang attribute has valid language tag",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/bf051a/"}],recommendation:'Set the valid "lang" or "xml:lang" attribute of <html> element based on the page language',severity:1}),qa=d(39,{description:'"lang" and "xml:lang" attributes of <html> element must have the same base language',display:"Lang and xml:lang mismatch",errorMessage:'"lang" and "xml:lang" attributes of <html> element have different base languages',level:"A",key:"html-xml-lang-mismatch",references:[{label:"3.1.1 Language of Page",url:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"},{label:"WCAG 2.1, Technique H57",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"},{label:"ACT: HTML page lang and xml:lang attributes have matching values",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/5b7ae0/"}],recommendation:'Ensure that the "lang" and "xml:lang" attributes of <html> element have the same base language',severity:4}),Na=d(40,{description:'All elements that have a "lang" attribute must have a valid value',display:'Valid "lang" attribute',errorMessage:'Element has an invalid value for the "lang" attribute',level:"A",key:"valid-lang",references:[{label:"3.1.2 Language of Parts",url:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html"},{label:"WCAG 2.1, Technique H58",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H58.html"},{label:"ACT: HTML page lang attribute has valid language tag",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/de46e4/"}],recommendation:\`Set the valid "lang" attribute of the element based on the element's content language\`,severity:5}),Sa=d(41,{description:'All "id" attributes must be unique',display:"Dubplicate id",errorMessage:'An "id" attribute is not unique',level:"A",key:"duplicate-id",references:[{label:"4.1.1 Parsing",url:"https://www.w3.org/WAI/WCAG21/Understanding/parsing"},{label:"WCAG 2.1 Technique F77",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F77"},{label:"ACT: Id attribute value is unique",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/3ea0c8/proposed/"}],recommendation:"For each element provide a unique id value",severity:1}),Ma=d(42,{description:'All "accesskey" attributes must have a unique value',display:"Unique accesskey value",errorMessage:'"accesskey" attribute value is not unique',level:"Best Practice",key:"accesskeys",references:[{label:"WCAG 2.0 Technique F17",url:"https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F17.html"}],recommendation:'Ensure that all "accesskey" attributes have a unique value',severity:10}),Ga=d(43,{description:"All text elements must have sufficient color contrast between the text in the foreground and the background color behind it",display:"Color contrast",errorMessage:"Text element has insufficient color contrast",level:"AA",key:"color-contrast",references:[{label:"1.4.3 Contrast (Minimum)",url:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},{label:"WCAG 2.1 Technique G18",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G18"},{label:"WCAG 2.1 Technique G145",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G145"},{label:"ACT: Text has minimum contrast",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/afw4f7/proposed/"}],recommendation:"For each text element, ensure that the contrast of at least 4.5:1 for small text (18pt or 24 CSS pixels) and 3:1 for large text (14pt or 19 CSS pixels)",severity:7}),La=d(44,{description:'All <a> elements or elements with role="link" that have a target="_blank" attribute must warn users about opening a new window or tab',display:"Link",errorMessage:'<a> element or element with role="link" that has a target="_blank" attribute does not warn users about opening a new window or tab',level:"AAA",key:"link-no-mention-target-blank",references:[{label:"3.2.5 Change on Request",url:"https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html"}],recommendation:\`Add "(opens in a new tab)" within the link text. For example: Visit the <a href="https://nasa.gov" target="_blank">Visit NASA's website (opens in a new tab)</a> for more information. For images or texts that cannot be modified, add an aria-label with the same info. For example: <a href="https://nasa.gov" aria-label="Visit NASA's website (opens in a new tab)" target="_blank"><img src="nasa.jpg" alt="NASA logo" /></a>\`,severity:1}),Pa=d(45,{description:'All "id" attributes must have a valid value',display:'Empty "id" attribute',errorMessage:'"id" attribute value is invalid',level:"A",key:"invalid-id",references:[{label:"4.1.1 Parsing",url:"https://www.w3.org/WAI/WCAG21/Understanding/parsing"},{label:"WCAG 2.1 Technique H93",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H93"}],recommendation:'Either populate the "id" attribute with a unique value or remove the "id" attribute entirely',severity:5}),Ba=d(47,{description:'All <a> elements or elements with role="link" must have meaningful, desribing what the link points to',display:"Ambiguous link text",errorMessage:'<a> element or element with role="link" has ambiguous text',level:"Best Practice",key:"link-ambiguous-text",references:[{label:"4.1.1 Parsing",url:"https://www.w3.org/WAI/WCAG21/Understanding/parsing"}],recommendation:\`Rewrite the link text to be meaningful, describing what the link points to. Alternately, place the <a> element around already existing text that is meaningful. For example, replace: For details on NASA's Mars program, <a href="www.nasa.gov">click here</a> with: Visit the <a href="www.nasa.gov">NASA website Mars program page</a> for details\`,severity:1}),Ha=d(50,{description:"",display:"",errorMessage:"",level:"Best Practice",key:"skip-link",references:[],recommendation:"",severity:8}),Oa=d(58,{description:'aria-hidden="true" attribute must not be present on the document <body> element',display:"Aria-hidden body",errorMessage:'An aria-hidden="true" attribute is present on the document <body> element',level:"A",key:"aria-hidden-body",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}],recommendation:'Remove the aria-hidden="true" attribute from the document <body> element',severity:1}),Va=d(59,{description:'All elements with aria-hidden="true" must not be focusable nor contain focusable elements',display:"ARIA hidden focus",errorMessage:'Element with aria-hidden="true" or its descendants cannot be focusable',level:"A",key:"aria-hidden-focus",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"ACT: Element with aria-hidden has no content in sequential focus navigation",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/"}],recommendation:\`Make all elements with aria-hidden="true" and their descendants non-focusable (by applying the "disabled" attribute if element is allowed to use this attribute) or non-tabbable (by applying the "tabindex" attribute with a value of "-1"). Where appropriate, hide the element and it's children from assistive technologies using CSS (e.g. display: none or visibility: hidden properties)\`,severity:4}),za=d(70,{description:"<video> or <audio> element should not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",display:"No autoplay audio more than 3 seconds without controls",errorMessage:"<video> or <audio> element autoplays for longer than 3 seconds, and does not have an instrument to pause, stop, or mute the audio",level:"A",key:"no-autoplay-audio",references:[{label:"1.4.2 Audio Control (Level A)",url:"https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html"},{label:"WCAG 2.1, Technique G60",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G60"},{label:"WCAG 2.1, Technique G170",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G170"},{label:"WCAG 2.1, Technique G171",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G171"},{label:"ACT: Audio or video element avoids automatically playing audio",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/80f0bf/proposed/"},{label:"ACT: Audio or video element that plays automatically has a control mechanism",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/4c31df/proposed/"}],recommendation:'For each <video> or <audio> element add an mechanism to pause, stop, or mute the audio such as "controls" attribute or a custom controls. As an alternative, make auto playing the audio shorter than 3 seconds',severity:10}),Ua=d(74,{description:"<blink> elements are deprecated and must not be used",display:"Blink",errorMessage:"A <blink> element is present",level:"A",key:"blink",references:[{label:"2.2.2 Pause, Stop, Hide",url:"https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide"},{label:"WCAG 2.1, Technique F47",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F47.html"},{label:"MDN: The Blink element (deprecated)",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink"}],recommendation:"Remove all <blink> elements and replace them with CSS animations",severity:10}),_a=d(78,{description:"Zooming and scaling must not be disabled on page",display:"Meta viewport",errorMessage:'<meta name="viewport"> element is configured to disable browser zooming and/or scaling',level:"AA",key:"meta-viewport",references:[{label:"1.4.4 Resize Text",url:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"},{label:"ACT: Meta viewport allows for zoom",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/b4f0c3/"}],recommendation:'Remove the "user-scalable=no" parameter from <meta name="viewport"> element and ensure that the "maximum-scale" parameter is not less than 2',severity:10}),ja=d(81,{description:"The accessible name of all elements that include a visible text label, must match the visible text in a label",display:"Label content name mismatch",errorMessage:"Element accessible name does not match the visible text in a label of the element",level:"Experimental",key:"label-content-name-mismatch",references:[{label:"2.5.3: Label in Name",url:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"},{label:"WCAG 2.1 Technique G208",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G208"},{label:"WCAG 2.1 Technique G211",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G211"},{label:"WCAG 2.1 Technique F96",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/F96"},{label:"ACT: Visible label is part of accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/"}],recommendation:"Change the accessible name or the visible text in a label so that they match",severity:1}),$a=d(84,{description:'Each element with role="combobox", role="listbox", role="searchbox", role="slider",role="spinbutton" or role="textbox" must have a non-empty accessible name',display:"Accessible name for ARIA input fields",errorMessage:"ARIA input field has no accessible name",level:"A",key:"aria-input-field-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique H91",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html"},{label:"WCAG 2.1, Technique H44",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html"},{label:"WCAG 2.1, Technique H65",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html"},{label:"ACT: Form field has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"}],recommendation:'For each element with role="combobox", role="listbox", role="searchbox", role="slider",role="spinbutton" or role="textbox" add a non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:1}),Xa=d(85,{description:'All elements with role="meter" must have an accessible name',display:"ARIA meter accessible name",errorMessage:'An element with role="meter" has no accessible name',level:"A",key:"aria-meter-name",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"}],recommendation:'For each elements with role="meter" add a non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:1}),Ya=d(86,{description:'All elements with role="progressbar" must have an accessible name',display:"ARIA progressbar accessible name",errorMessage:'An element with role="progressbar" has no accessible name',level:"A",key:"aria-progressbar-name",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"}],recommendation:'For each elements with role="progressbar" add a non-empty "title", "value" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:1}),Za=d(87,{description:"Required ARIA attributes must be provided for elements with certain ARIA roles",display:"Required ARIA attributes",errorMessage:"Some required ARIA attributes are missing for the element with the given ARIA role",level:"A",key:"aria-required-attr",references:[{label:"4.1.1 Parsing",url:"https://www.w3.org/WAI/WCAG21/Understanding/parsing"},{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"ARIA in HTML: ARIA Roles, States, and Properties",url:"https://www.w3.org/TR/html-aria/#aria-table"},{label:"WAI-ARIA States and Properties Taxonomy",url:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_taxonomy"},{label:"ACT: Element with role attribute has required states and properties",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/4e8ab6/proposed/"}],recommendation:'Apply any ARIA state and property attributes that are required for the element with the given ARIA role. For example, an element with role="checkbox" must have an aria-checked attribute: <div role="checkbox" aria-checked="false" tabindex="0"> I agree to the Terms of Use </div>',severity:1}),Ka=d(88,{description:"All elements with certain ARIA roles must contain particular children",display:"Required ARIA children",errorMessage:"Element with the given ARIA role is missing required children",level:"A",key:"aria-required-children",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WAI-ARIA 1.1 - The Roles Model",url:"https://www.w3.org/TR/wai-aria-1.1/#roles_model"},{label:"ACT: ARIA required owned elements",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/bc4a75/proposed/"}],recommendation:"Check all elements that contain a WAI-ARIA role to ensure that all required children elements with certain roles are present",severity:1}),Ja=d(89,{description:"All elements with certain ARIA roles must be contained by particular parent elements",display:"Required ARIA parent",errorMessage:"Element with the given ARIA role is missing required parent",level:"A",key:"aria-required-parent",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WAI-ARIA 1.1 - The Roles Model",url:"https://www.w3.org/TR/wai-aria-1.1/#roles_model"},{label:"ACT: ARIA required context role",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/ff89c9/proposed/"}],recommendation:"Check all elements that contain a WAI-ARIA role to ensure that all required parent elements with certain roles are present",severity:1}),Qa=d(90,{description:'"aria-roledescription" attribute must be on elements with an explicit or implicit "role" value',display:"ARIA role description",errorMessage:'Element with no role has an "aria-roledescription" attribute',level:"A",key:"aria-roledescription",references:[{label:"WAI-ARIA 1.1 - Taxonomy of States and Properties",url:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_taxonomy"}],recommendation:'Ensure that the "aria-roledescription" attribute is used only on elements with an explicit or implicit "role" value',severity:1}),ei=d(91,{description:'All elements with a "role" attribute must use a valid value for that attribute',display:"ARIA roles",errorMessage:'Element with "role" attribute has an invalid value ',level:"A",key:"aria-roles",references:[{label:"WAI-ARIA Roles",url:"https://www.w3.org/TR/wai-aria-1.1/#roles"},{label:"ACT: Role attribute has valid value",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/proposed/"}],recommendation:'For each element with a "role" attribute, check that the value of the "role" attribute is valid ARIA, DPub-ARIA or Graphics-ARIA role',severity:1}),ti=d(92,{description:'All elements with role="text" should have a non-focusable descendants',display:"ARIA text role",errorMessage:'Element with role="text" has focusable descendants',level:"Best Practice",key:"aria-text",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}],recommendation:'Check all elements with role="text" to ensure that they do not have focusable descendants',severity:1}),ri=d(93,{description:'Each element with role="checkbox", role="menu", role="menuitemcheckbox", role="menuitemradio",role="radio", role="radiogroup", or role="switch" must have a non-empty accessible name',display:"Accessible name for ARIA toggle fields",errorMessage:"ARIA toggle field has no accessible name",level:"A",key:"aria-toggle-field-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique H91",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html"},{label:"WCAG 2.1, Technique H44",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html"},{label:"WCAG 2.1, Technique H65",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html"},{label:"ACT: Form field has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"}],recommendation:'For each element with role="checkbox", role="menu", role="menuitemcheckbox", role="menuitemradio",role="radio", role="radiogroup", or role="switch" add a non-empty "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:1}),ni=d(94,{description:'Each element with role="tooltip" must have a non-empty accessible name',display:"Accessible name for ARIA tooltip elements",errorMessage:"ARIA tooltip element has no accessible name because it has no content or attribute that can provide it",level:"A",key:"aria-tooltip-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}],recommendation:'For each element with role="tooltip", provide an accessible name using an inner text, "title", "aria-label" or "aria-labelledby" attribute',severity:1}),ai=d(95,{description:'Each element with role="treeitem" must have a non-empty accessible name',display:"Accessible name for ARIA treeitem elements",errorMessage:"ARIA treeitem element has no accessible name because it has no content or attribute that can provide it",level:"Best Practice",key:"aria-treeitem-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}],recommendation:'For each element with role="treeitem", provide an accessible name using an inner text, "title", "aria-label" or "aria-labelledby" attribute',severity:1}),ii=d(96,{description:"All ARIA attributes starting with aria- must have valid names",display:"Valid ARIA attribute",errorMessage:"Element has non-existent or misspelled ARIA attribute",level:"A",key:"aria-valid-attr",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"4.1.2 Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WAI ARIA Supported States and Properties",url:"https://www.w3.org/TR/wai-aria-1.1/#states_and_properties"},{label:"WCAG 2.1, Technique G108",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G108"},{label:"ACT: ARIA attribute is defined in the WAI-ARIA",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/5f99a7/proposed/"}],recommendation:"Checks all elements that contain WAI-ARIA attributes to ensure that the attributes have valid names",severity:1}),oi=d(97,{description:'All <audio> elements must contain at least one <track> element with kind="captions"',display:"Audio caption",errorMessage:'<audio> element does not contain <track> element(s) with kind="captions"',level:"A",key:"audio-caption",references:[{label:"ACT: Audio element content has a transcript",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/2eb176/proposed/"},{label:"ACT: Audio element content is media alternative for text",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/afb423/proposed/"},{label:"ACT: Audio element content has text alternative",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/e7aa44/proposed/"}],recommendation:'Check all <audio> elements and ensure that they contain at least one <track> element with kind="captions". For example: <audio> <source src="userway_installation_guide.mp3" type="audio/mp3"> <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"> </audio>',severity:1}),si=d(98,{description:'"Autocomplete" attribute value must be valid',display:'Valid "autocomplete" attribute value',errorMessage:'Element has invalid "autocomplete" attribute value',level:"AA",key:"autocomplete-valid",references:[{label:"1.3.5 Identify Input Purpose",url:"https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"},{label:"WCAG 2.1, Technique H98",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H98"},{label:"ACT: Autocomplete attribute has valid value",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/73f2c2/"}],recommendation:'Provide a valid value for the "autocomplete" attribute and make sure that it is allowed for the field type',severity:1}),li=d(99,{description:"Inline text spacing must be adjustable using custom stylesheets",display:"Avoid inline spacing",errorMessage:"Element uses !important to set inline styles that affect text spacing",level:"AA",key:"avoid-inline-spacing",references:[{label:"1.4.12 Text Spacing",url:"https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"},{label:"ACT: Letter spacing in style attributes is not !important",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/24afc2/"},{label:"ACT: Word spacing in style attributes is not !important",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/9e45ec/"}],recommendation:'Remove !important from inline styles that affect text spacing (e.g "letter-spacing" and "word-spacing")',severity:1}),ui=d(100,{description:"Page must allow keyboard users to bypass repeated blocks of content",display:"Bypass repeated blocks",errorMessage:"Page has no mechanism to bypass repeated blocks of content",level:"A",key:"bypass",references:[{label:"2.4.1 Bypass Blocks",url:"https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"},{label:"ACT: Bypass Blocks of Repeated Content",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/cf77f2/proposed/"}],recommendation:'Provide a mechanism to bypass repeated blocks of content: valid "skip to main content" link, heading or landmark region',severity:1}),ci=d(101,{description:"All text elements must have sufficient color contrast between the text in the foreground and the background color behind it in accordance with WCAG 2 AAA contrast ratio thresholds",display:"Color contrast (enhanced)",errorMessage:"Text element has insufficient color contrast",level:"AAA",key:"color-contrast-enhanced",references:[{label:"1.4.6 Contrast (Enhanced)",url:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced"},{label:"WCAG 2.1 Technique G17",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G17"},{label:"ACT: Text has enhanced contrast",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/09o5cg/proposed/"}],recommendation:"For each text element, ensure that the contrast of at least 7:1 for small text (18pt or 24 CSS pixels) and 4.5:1 for large text (14pt or 19 CSS pixels)",severity:1}),di=d(102,{description:"CSS media queries or other techniques must not lock display orientation",display:"CSS orientation lock",errorMessage:"CSS media queries or other techniques on the page lock display orientation",level:"Experimental",key:"css-orientation-lock",references:[{label:"1.3.4: Orientation",url:"https://www.w3.org/WAI/WCAG21/Understanding/orientation"},{label:"ACT: Orientation of the page is not restricted using CSS transforms",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/b33eff/proposed/"}],recommendation:"Remove all CSS media queries or other techniques that lock display orientation. Ensure that content continues to be accessible to all users, including assistive technology users, in any orientation",severity:1}),hi=d(103,{description:"All <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",display:"Definition list",errorMessage:"Definition list is structured incorrectly",level:"A",key:"definition-list",references:[{label:"WCAG 2.1 Success Criterion 1.3.1 Info and Relationships",url:"https://www.w3.org/TR/WCAG21/#info-and-relationships"},{label:"WCAG 2.1 Technique H40",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html"},{label:"WCAG 2.1, Technique H48",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H48"},{label:"MDN: The Description List element",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"}],recommendation:"Remove all elements from the list except properly-ordered <dt> and <dd> groups, <script>, <template> or <div>",severity:1}),pi=d(104,{description:"All <dt> and <dd> elements must be contained by a <dl> element",display:"Description list item",errorMessage:"<dt> and/or <dd> element(s) not contained in a <dl> element",level:"A",key:"dlitem",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WCAG 2.1 Technique H40",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html"},{label:"WCAG 2.1 Technique H48",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html"},{label:"MDN: The Definition List element",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"}],recommendation:"Enclose all <dt> and <dd> elements in a <dl> element",severity:1}),mi=d(105,{description:'All "id" attributes of active elements must be unique',display:"Duplicate id of active elements",errorMessage:'An "id" attribute of active element is not unique',level:"A",key:"duplicate-id-active",references:[{label:"4.1.1 Parsing",url:"https://www.w3.org/WAI/WCAG21/Understanding/parsing"},{label:"WCAG 2.1 Technique F77",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F77"},{label:"ACT: Id attribute value is unique",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/3ea0c8/proposed/"}],recommendation:"For each active, focusable element provide a unique id value",severity:1}),fi=d(106,{description:'All "id" attributes of elements referenced by a labels or ARIA attributes must be unique',display:"Duplicate id of ARIA elements",errorMessage:"",level:"A",key:"duplicate-id-aria",references:[{label:"4.1.1 Parsing",url:"https://www.w3.org/WAI/WCAG21/Understanding/parsing"},{label:"WCAG 2.1 Technique F77",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F77"},{label:"ACT: Id attribute value is unique",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/3ea0c8/proposed/"}],recommendation:"For each element referenced by a label or ARIA attribute, provide a unique id value",severity:1}),gi=d(107,{description:"Interactive elements in the focus order should have a valid and appropriate role",display:"Focus order semantics",errorMessage:"Interactive element in the focus has an invalid and/or inappropriate role",level:"Best Practice",key:"focus-order-semantics",references:[{label:"WAI-ARIA 1.1 - The Roles Model",url:"https://www.w3.org/TR/wai-aria-1.1/#roles_model"}],recommendation:"Ensure that the interactive element in the focus have a valid and appropriate role, whether native HTML or a custom ARIA widget",severity:1}),wi=d(108,{description:"Form fields must not have multiple labels",display:"Form field with multiple labels",errorMessage:"Form field has multiple labels",level:"A",key:"form-field-multiple-labels",references:[{label:"3.3.2 Labels or Instructions",url:"https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"},{label:"WCAG 2.1 Technique f68",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F68"},{label:"WCAG 2.1 Technique H44",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html"},{label:"WCAG 2.1 Technique H65",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html"},{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"WCAG 2.1, Technique ARIA16",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"}],recommendation:"Ensure that only one label is assigned to a form field",severity:1}),bi=d(109,{description:'<frame> and <iframe> elements with tabindex="-1" must not have focusable content',display:"focusable content of frame",errorMessage:'<frame> or <iframe> element with tabindex="-1" has focusable content',level:"A",key:"frame-focusable-content",references:[{label:"2.1.1 Keyboard",url:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},{label:"ACT: Iframe with interactive elements is not excluded from tab-order",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/akn7bn/proposed/"}],recommendation:'For all <frame> and <iframe> elements that have focusable content remove "tabindex" attribute with negative value or set it to "0"',severity:1}),Ai=d(110,{description:"Informs about hidden content that cannot be analyzed for accessibility violations",display:"Hidden content",errorMessage:"Page contains hidden content that cannot be analyzed for accessibility violations",level:"Experimental",key:"hidden-content",references:[{label:'MDN: "hidden" attribute',url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden"}],recommendation:"You need to trigger the display of the hidden content to analyze it for accessibility violations",severity:1}),Di=d(111,{description:"All <input> and <textarea> elements must have a non-empty accessible name",display:"Form field accessible name",errorMessage:"Form field has no accessible name because it has no content or attribute that can provide it",level:"A",key:"label",references:[{label:"3.3.2: Labels or Instructions",url:"https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions"},{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"ACT: Form field has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"}],recommendation:'For each <input> and <textarea> element, provide an accessible name using an non-empty "placeholder", "title" attribute, explicit or implicit (wrapped) <label> element that is not hidden. Alternatively, use an "aria-label" non-empty attribute or an "aria-labelledby" attribute that references an element with a non-empty accessible name',severity:1}),yi=d(113,{description:'role="banner" landmark must not be contained in another landmark',display:'role="banner" landmark is top level',errorMessage:'Element with role="banner" is contained in another landmark',level:"Best Practice",key:"landmark-banner-is-top-level",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"W3 ARIA - Banner Role",url:"https://www.w3.org/TR/wai-aria-1.1/#banner"}],recommendation:'Ensure that element with role="banner" is not contained in another landmark',severity:1}),vi=d(114,{description:'<aside> element or element with role="complementary" must not be contained in another landmark',display:'"Complementary" landmark is top level',errorMessage:'<aside> element or element with role="complementary" is contained in another landmark',level:"Best Practice",key:"landmark-complementary-is-top-level",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"}],recommendation:'Ensure that <aside> element or element with role="complementary" is not contained in another landmark',severity:1}),Ci=d(115,{description:'role="contentinfo" landmark must not be contained in another landmark',display:'role="contentinfo" landmark is top level',errorMessage:'Element with role="contentinfo" is contained in another landmark',level:"Best Practice",key:"landmark-contentinfo-is-top-level",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"W3 ARIA - Contentinfo Role",url:"https://www.w3.org/TR/wai-aria-1.1/#contentinfo"}],recommendation:'Ensure that element with role="contentinfo" is not contained in another landmark',severity:1}),Ti=d(116,{description:'<main> element or element with role="main" must not be contained in another landmark',display:'"Main" landmark is top level',errorMessage:'<main> element or element with role="main" is contained in another landmark',level:"Best Practice",key:"landmark-main-is-top-level",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"W3 ARIA - Contentinfo Role",url:"https://www.w3.org/TR/wai-aria-1.1/#contentinfo"}],recommendation:'Ensure that <main> element or element with role="main" is not contained in another landmark',severity:1}),Ri=d(117,{description:'Page must have at most one "banner" landmark',display:'No duplicate "banner" landmark',errorMessage:'Page has more than one "banner" landmark',level:"Best Practice",key:"landmark-no-duplicate-banner",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"2.4.1 Bypass Blocks",url:"https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"},{label:"2.4.6 Headings and Labels",url:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},{label:"WCAG 2.1 Technique ARIA11",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"},{label:"WCAG 2.1 Technique ARIA13",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13"},{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"W3 ARIA - Banner Role",url:"https://www.w3.org/TR/wai-aria-1.1/#banner"}],recommendation:'Ensure the page has at most one "banner" landmark',severity:1}),Ei=d(118,{description:'Page must have at most one "contentinfo" landmark',display:'No duplicate "contentinfo" landmark',errorMessage:'Page has more than one "contentinfo" landmark',level:"Best Practice",key:"landmark-no-duplicate-contentinfo",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"2.4.1 Bypass Blocks",url:"https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"},{label:"2.4.6 Headings and Labels",url:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},{label:"WCAG 2.1 Technique ARIA11",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"},{label:"WCAG 2.1 Technique ARIA13",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13"},{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"W3 ARIA - Contentinfo Role",url:"https://www.w3.org/TR/wai-aria-1.1/#contentinfo"}],recommendation:'Ensure the page has at most one "contentinfo" landmark',severity:1}),Fi=d(119,{description:'Page must have at most one "main" landmark',display:'No duplicate "main" landmark',errorMessage:'Page has more than one "main" landmark',level:"Best Practice",key:"landmark-no-duplicate-main",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"2.4.1 Bypass Blocks",url:"https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"},{label:"2.4.6 Headings and Labels",url:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},{label:"WCAG 2.1 Technique ARIA11",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"},{label:"WCAG 2.1 Technique ARIA13",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13"},{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"W3 ARIA - Contentinfo Role",url:"https://www.w3.org/TR/wai-aria-1.1/#contentinfo"}],recommendation:'Ensure the page has at most one "main" landmark',severity:1}),ki=d(120,{description:'Page must have one "main" landmark',display:'One "main" landmark',errorMessage:'Page has more than one "main" landmark',level:"Best Practice",key:"landmark-one-main",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"2.4.1 Bypass Blocks",url:"https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"},{label:"WCAG 2.1 Technique ARIA11",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"}],recommendation:'Ensure the page has one "main" landmark',severity:1}),Ii=d(121,{description:"Landmarks must have a unique role or role/label/title combination",display:"Unique landmark",errorMessage:"Page contains landmarks with the same role or role/label/title combination",level:"Best Practice",key:"landmark-unique",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},{label:"Contentinfo Landmark: ARIA Landmark Examples (W3)",url:"https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/contentinfo.html"},{label:"W3C Recommendation - Contentinfo role",url:"https://www.w3.org/TR/wai-aria-1.1/#contentinfo"}],recommendation:"Ensure the page contains only landmarks with a unique role or accessible name (i.e. role, label, title) combination",severity:1}),Wi=d(122,{description:'All <a> elements or elements with role="link" must be distinguishable without relying on color',display:"Link in text block",errorMessage:"The color contrast ratio of the element is lower than 3:1",level:"A",key:"link-in-text-block",references:[{label:"1.4.3 Contrast (Minimum)",url:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},{label:"WCAG 2.1 Technique G18",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html"}],recommendation:'Ensure the color contrast ratio of all <a> elements or elements with role="link" that appear in blocks of text is at least 3:1 against the surrounding text',severity:1}),xi=d(123,{description:'A <meta> element with a http-equiv="refresh" attribute must not have refresh time of more than 0',display:"Meta refresh (no exception)",errorMessage:'Page contains a <meta> element with http-equiv="refresh" attribute with refresh time of more than 0',level:"AAA",key:"meta-refresh-no-exceptions",references:[{label:"2.2.1 Timing Adjustable",url:"https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"},{label:"2.2.4 Interruptions",url:"https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html"},{label:"3.2.5: Change on Request",url:"https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html"},{label:"WCAG 2.1 Technique G110",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G110"},{label:"WCAG 2.0 Technique H76",url:"https://www.w3.org/TR/WCAG-TECHS/H76.html"},{label:"WCAG 2.0 Technique F40",url:"https://www.w3.org/TR/WCAG-TECHS/F40.html"},{label:"WCAG 2.0 Technique F41",url:"https://www.w3.org/TR/WCAG-TECHS/F41.html"},{label:"ACT: Meta element has no refresh delay (no exception)",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/bisz58/proposed/"}],recommendation:'Remove <meta> elements with http-equiv="refresh" attribute, or set the refresh time to 0',severity:1}),qi=d(124,{description:"Page zooming and scaling must be available up to 500%",display:"Meta viewport (large)",errorMessage:'<meta name="viewport"> element is configured to limit page zooming and scaling to less than 500%',level:"Best Practice",key:"meta-viewport-large",references:[{label:"1.4.4 Resize Text",url:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"}],recommendation:'Remove the "user-scalable=no" parameter from <meta name="viewport"> element and ensure that the "maximum-scale" parameter is not less than 5',severity:1}),Ni=d(125,{description:"All <object> elements must have alternate text to convey their purpose to the user",display:"Alternate text for <object> element",errorMessage:{emptyAlt:"<object> element has an empty accessible name",missingAlt:'<object> element missing an alternate text, such as "title", "aria-label" or "alt" attribute'},level:"A",key:"object-alt",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1 Technique H53",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H53"},{label:"ACT: Object element rendering non-text content has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/8fc3b6/"}],recommendation:{emptyAlt:'For each <object> element add a non-empty "alt, "title" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <object title="Userway installation guide" data="/videos/userway-installation-guide.mp4"></object>',missingAlt:'For each <object> element add a non-empty "alt, "title" or "aria-label" attribute, or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <object title="Userway installation guide" data="/videos/userway-installation-guide.mp4"></object>'},severity:1}),Si=d(126,{description:"<p> elements must not be used to style headings",display:"Paragraph as heading",errorMessage:"<p> element used to style heading",level:"Experimental",key:"p-as-heading",references:[{label:"WCAG 2.0, Technique H42",url:"https://www.w3.org/TR/WCAG20-TECHS/H42"},{label:"WCAG 2.0, Technique G141",url:"https://www.w3.org/TR/WCAG20-TECHS/G141"}],recommendation:'Ensure <p> elements are not used to style headings. Instead, use <h1> - <h6>  elements or elements with role="heading" and an appropriate aria-level attribute',severity:1}),Mi=d(127,{description:"",display:"Elements marked as decorative must be excluded from the accessibility tree or have a presentational role",errorMessage:"Element marked as decorative but not excluded from the accessibility tree or has no presentational role",level:"Best Practice",key:"presentation-role-conflict",references:[{label:"ACT: Element marked as decorative is not exposed",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/46ca7f/"}],recommendation:'For each element marked as decorative using "aria-hidden=true" or "hidden" attribute ensure that it is excluded from the accessibility tree by absence of non-empty "aria-label" or "aria-labelledby" attributes, or by using "role=presentation" or "role=none"',severity:1}),Gi=d(128,{description:"",display:"",errorMessage:"",level:"Best Practice",key:"region",references:[],recommendation:"",severity:1}),Li=d(129,{description:'All elements with role="image" must have alternate text to convey their purpose to the user',display:'Alternate text for element with role="image"',errorMessage:{emptyAlt:'Element with role="image" has an empty "aria-label" attribute',missingAlt:'Element with role="image" missing an alternate text, such as "aria-label" attribute'},fixable:!0,level:"A",key:"role-img-alt",recommendation:{emptyAlt:'Add a concise description to "aria-label" attribute or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <div role="img" style="width:48px; height:48px; background-image: url(userway-logo.png)" />. If the element is purely decorative or a text description would be redundant, add an role="presentation" or role="none" attribute. For example: <div role="presentation" style="width:48px; height:48px; background-image: url(userway-logo.png)" />.',missingAlt:'Add an "aria-label" attribute with concise description or use "aria-labelledby" attribute that refers to the id of an element with discernible text content. For example: <div role="img" style="width:48px; height:48px; background-image: url(userway-logo.png)" />. If the element is purely decorative or a text description would be redundant, add an role="presentation" or role="none" attribute. For example: <div role="presentation" style="width:48px; height:48px; background-image: url(userway-logo.png)" />.'},references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"WCAG 2.1, Technique F65",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"},{label:"WCAG 2.1, Technique F67",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H67"},{label:"WCAG 2.1, Technique H37",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H37"},{label:"WCAG 2.1, Technique ARIA10",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10"},{label:"ACT: Image has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/23a2a8/"}],severity:1}),Pi=d(130,{description:'A "scope" attribute must be used correctly on tables in accordance with either HTML4 or HTML5 specifications',display:'Valid "scope" attribute',errorMessage:{thOnly:'"scope" attribute is used on an element other than <th> element in accordance with HTML5 specification',invalidScopeValue:'A value of "scope" attribute is invalid'},level:"Best Practice",key:"scope-attr-valid",references:[{label:"WAI, Tables Concepts",url:"https://www.w3.org/WAI/tutorials/tables/"},{label:"MDN: The Table Header element",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope"}],recommendation:{thOnly:'"scope" attribute must be used only on <th> elements in accordance with HTML5 specification',invalidScopeValue:'A value of "scope" attribute can be only "row" or "col"'},severity:1}),Bi=d(131,{description:"Scrollable region must be keyboard accessible",display:"Scrollable region is focusable",errorMessage:"Scrollable region has no focusable elements",level:"A",key:"scrollable-region-focusable",references:[{label:"2.1.1 Keyboard",url:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"},{label:"WCAG 2.1, Technique F55",url:"https://www.w3.org/WAI/WCAG21/Techniques/failures/F55"},{label:"ACT: Scrollable element is keyboard accessible",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/proposed/"}],recommendation:"Ensure that the scrollable region is accessible with the keyboard",severity:1}),Hi=d(132,{description:"Each <select> element must have a programmatically associated <label> element",display:"Select name",errorMessage:"<select> element has no associated <label> element",level:"A",key:"select-name",references:[{label:"ACT: Form field has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/e086e5/"}],recommendation:'For each <select> element, provide a programmatically associated label using implicit or explicit <label> element, non-empty "aria-label" attribute or "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:1}),Oi=d(133,{description:"Server-side image maps must not be used as they require the use of a mouse",display:"Server-side image map",errorMessage:"A server-side image map is present",level:"A",key:"server-side-image-map",references:[{label:"9.1 - Provide client-side image maps instead of server-side image maps except where the regions cannot be defined with an available geometric shape",url:"https://www.w3.org/WAI/wcag-curric/sam66-0.htm"},{label:"MDN: The HTMLImageElement property isMap",url:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/isMap"}],recommendation:"Use client-side image maps instead — <map> element and usemap attribute of <img> element",severity:1}),Vi=d(134,{description:'<svg> element with role="img", role="graphics-document" or role="graphics-symbol" must have a non-empty accessible name',display:"SVG image alternate text",errorMessage:'<svg> element with role="img", role="graphics-document" or role="graphics-symbol" has no accessible name',level:"A",key:"svg-img-alt",references:[{label:"1.1.1 Non-text Content",url:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content"},{label:"ACT: SVG element with explicit role has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/7d6734/"}],recommendation:'For each <svg> element with role="img", role="graphics-document" or role="graphics-symbol", provide a non-empty accessible name using <title> element, non-empty "aria-label" attribute or "aria-labelledby" attribute that refers to the id of an element with discernible text content',severity:1}),zi=d(135,{description:'All <table> element must use a <caption> element instead of <th> or <td> elements with "colspan" attribute to visually indicate a caption',display:"Fake table caption",errorMessage:'<table> element uses a <th> or <td> elements with "colspan" attribute to visually indicate a caption',level:"Experimental",key:"table-fake-caption",references:[{label:"WCAG 2.1, Technique H39",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H39"},{label:"WCAG 2.1, Technique H43",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H43"},{label:"WCAG 2.1, Technique H51",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H51"},{label:"WCAG 2.1, Technique H63",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H63"},{label:"WCAG 2.1, Technique H73",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H73"}],recommendation:'Replace the <th> or <td> elements that use a "colspan" attribute to visually indicate a caption with a non-empty <caption> element',severity:1}),Ui=d(136,{description:"All touch targets must be at least 24 by 24 CSS pixels in size or leave a sufficient space around them",display:"Target size",errorMessage:"Element does not meet minimum requirements for a touch target",level:"AA",key:"target-size",references:[{label:"2.5.8 Target Size (Minimum)",url:"https://w3c.github.io/wcag/understanding/target-size-minimum.html"}],recommendation:"Set the minimum width and height of the element to 24px or more. The size is computed by taking the largest unobscured area of the touch target",severity:1}),_i=d(137,{description:"All non-empty <td> elements in a <table> elements larger than 3x3 must have a <th> element as an associated header",display:"<td> has header",errorMessage:"One or more <td> elements are missing an associated <th> element",level:"Experimental",key:"td-has-header",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WCAG 2.1 Technique H43",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H43"},{label:"WCAG 2.1 Technique H51",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H51"},{label:"WCAG 2.1 Technique H63",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H63"},{label:"WCAG 2.1 Technique H73",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H73"}],recommendation:"For each non-empty <td> element in <table> element larger than 3x3, add a <th> element and set its scope attribute so it will be a row or a column header cell. Alternatively you can use the headers attribute on the <td> element to set its associated <th> element(s)",severity:5}),ji=d(138,{description:"All <td> elements that use the headers attribute must only refer to <th> elements in the same <table> element",display:"Table headers attribute",errorMessage:"<td> element refers to <th> element in another table",level:"A",key:"td-headers-attr",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WCAG 2.1 Technique H43",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H43"},{label:"ACT: Headers attribute specified on a cell refers to cells in the same table element",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/a25f45/"}],recommendation:"Ensure that the all <td> elements refer to <th> elements in the same <table> element. If the <td> element refers to a <th> element in another <table> element, add the <th> element to the same <table> element",severity:1}),$i=d(139,{description:"All <th> elements must refer to <td> elements",display:"<th> has data cells",errorMessage:"<th> element does not refer to any <td> elements",level:"A",key:"th-has-data-cells",references:[{label:"1.3.1 Info and Relationships",url:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},{label:"WCAG 2.1 Technique H43",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H43"},{label:"WCAG 2.1 Technique H51",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H51"},{label:"WCAG 2.1 Technique H63",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H63"},{label:"WCAG 2.1 Technique H73",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H73"},{label:"ACT: Table header cell has assigned cells",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/d0f69e/proposed/"}],recommendation:"Set the <th> element's scope attribute so it will be a row or a column header cell. Alternatively you can use the headers attribute on the <td> element to set their associated <th> element(s)",severity:1}),Xi=d(140,{description:'All <video> elements must contain at least one <track> element with kind="captions"',display:"Video caption",errorMessage:'<video> element does not contain <track> element(s) with kind="captions"',level:"A",key:"video-caption",references:[{label:"ACT: Video element auditory content has accessible alternative",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/eac66b/proposed/"},{label:"ACT: Video element auditory content has captions",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/f51b46/proposed/"},{label:"ACT: Video element content is media alternative for text",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/ab4d13/proposed/"}],recommendation:'Check all <video> elements and ensure that they contain at least one <track> element with kind="captions". For example: <video width="300" height="200"> <source src="userway_installation_guide.mp4" type="video/mp4"> <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"> </video>',severity:1}),Yi=d(141,{description:"Interactive control elements must not have focusable descendants",display:"Nested interactive elements",errorMessage:"Interactive element has focusable descendants",level:"A",key:"nested-interactive",references:[{label:"ACT: Element with presentational children has no focusable content",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/307n5z/"}],recommendation:"Check all interactive elements and ensure that they do not have focusable descendants",severity:10}),Zi=d(142,{description:"Screen readers and other assistive technology cannot understand the context of a <b> element as bolded text can play numerous roles",display:"Bold",errorMessage:"A <b> element used to format text",level:"Best Practice",key:"bold",references:[{label:"WCAG 2.1, Technique G115",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G115"},{label:"WCAG 2.1, Technique G140",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G140"},{label:"WCAG 2.1, Technique H49",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H49"}],recommendation:"If the text should be emphasized semantically, use the <strong> element instead. If the text is a heading, an 'H' tag (such as <h1>, <h2>, <h3>…) should be used instead. If the text is highlighted as a visual effect, CSS should be used to do this",severity:1}),Ki=d(143,{description:"<video> or <audio> element should not autoplay audio for more than 3 seconds",display:"No autoplay audio for more than 3 seconds",errorMessage:"<video> or <audio> element plays audio automatically for more than 3 seconds",level:"A",key:"no-autoplay-audio-no-exceptions",references:[{label:"1.4.2 Audio Control (Level A)",url:"https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html"},{label:"WCAG 2.1, Technique G60",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G60"},{label:"WCAG 2.1, Technique G171",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G171"},{label:"ACT: Audio or video element that plays automatically has no audio that lasts more than 3 seconds",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/aaa1bf/proposed/"}],recommendation:"Make auto playing the audio shorter than 3 seconds",severity:10}),Ji=d(144,{description:"All elements must only use allowed ARIA attributes",display:"Allowed ARIA attribute",errorMessage:"",level:"A",key:"aria-allowed-attr",references:[{label:"WAI-ARIA 1.2, Supported States and Properties",url:"https://www.w3.org/TR/wai-aria-1.2/#states_and_properties"},{label:"WAI-ARIA 1.2, Global States and Properties",url:"https://www.w3.org/TR/wai-aria-1.2/#global_states"},{label:"ACT: ARIA state or property is permitted",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/5c01ea/proposed/"}],recommendation:'Ensure that all elements use only ARIA attributes allowed for their role. For example: <div role="button" aria-pressed="true">Button</div>',severity:1}),Qi=d(145,{description:"WAI-ARIA role should be appropriate for the element",display:"Allowed ARIA role",errorMessage:'Element has an invalid value for the ARIA "role" attribute',level:"Best Practice",key:"aria-allowed-role",references:[{label:"WAI-ARIA Roles",url:"https://www.w3.org/TR/wai-aria-1.1/#roles"}],recommendation:'Ensure all elements that have ARIA "role" attribute have a valid value for it and the value is appropriate for the element in the context of the page',severity:1}),eo=d(146,{description:'All elements with role="link", role="button", or role="menuitem" must have a non-empty accessible name',display:"Accessible name for ARIA command elements",errorMessage:"ARIA command element has no accessible name because it has no content or attribute that can provide it",level:"A",key:"aria-command-name",references:[{label:"4.1.2: Name, Role, Value",url:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},{label:"WCAG 2.1, Technique ARIA14",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},{label:"WCAG 2.1, Technique ARIA16",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"},{label:"ACT: Button has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/"},{label:"ACT: Menuitem has non-empty accessible name",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/m6b1q3/proposed/"}],recommendation:'For each element with role="button", role="link", or role="menuitem", provide an accessible name using an inner text, "title", "aria-label" or "aria-labelledby" attribute',severity:1}),to=d(147,{description:'All elements with role="dialog" and role="alertdialog" must have a non-empty accessible name',display:"ARIA dialog name",errorMessage:"ARIA dialog element has no accessible name because it has no content or attribute that can provide it",level:"Best Practice",key:"aria-dialog-name",references:[],recommendation:'For each element with role="dialog" and role="alertdialog", provide an accessible name using an "aria-label" or "aria-labelledby" attribute',severity:1}),ro=d(148,{description:"Screen readers and other assistive technology cannot understand the context of a <i> element as italic text can play numerous roles",display:"Italic",errorMessage:"A <i> element used to format text",level:"Best Practice",key:"italic",references:[{label:"WCAG 2.1, Technique G115",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G115"},{label:"WCAG 2.1, Technique G140",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G140"},{label:"WCAG 2.1, Technique H49",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H49"}],recommendation:"If the text should be emphasized semantically, use the <em> element instead. If the text should be marked in another language, add 'lang' attribute with a valid value. If the text is highlighted as a visual effect, CSS should be used to do this",severity:1}),no=d(149,{description:"Each section of non-repeated content must have a heading element",display:"Bypass heading",errorMessage:"Section of non-repeated content has no visible heading element or it is excluded from the accessibility tree",level:"A",key:"bypass-heading",references:[{label:"2.4.1 Bypass Blocks",url:"https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"},{label:"WCAG 2.1, Technique H69",url:"https://www.w3.org/WAI/WCAG21/Techniques/html/H69"},{label:"ACT: Document has heading for non-repeated content",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/047fe0/proposed/"}],recommendation:"For each section of non-repeated content, provide a visible heading element that is included in the accessibility tree",severity:1}),ao=d(150,{description:'Page must have a <main> element or element with role="main" that has non-repeated content and is included in the accessibility tree',display:"Bypass landmark",errorMessage:'Page has no <main> element or element with role="main" that has non-repeated content and is included in the accessibility tree',level:"A",key:"bypass-landmark",references:[{label:"WCAG 2.1 Technique ARIA11",url:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"},{label:"ACT: Document has a landmark with non-repeated content",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/b40fd1/proposed/"}],recommendation:'Provide a <main> element or element with role="main" that has non-repeated content and is included in the accessibility tree',severity:1}),io=d(151,{description:"Page must have an instrument to move focus to non-repeated content",display:"Move focus to non-repeated content",errorMessage:"Page has no instrument to move focus to non-repeated content",level:"A",key:"bypass-move-focus",references:[{label:"WCAG 2.1 Technique G1",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G1"},{label:"WCAG 2.1 Technique G123",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G123"},{label:"WCAG 2.1 Technique G124",url:"https://www.w3.org/WAI/WCAG21/Techniques/general/G124"},{label:"ACT: Document has an instrument to move focus to non-repeated content",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/ye5d6e/proposed/"}],recommendation:'Provide an instrument to move focus to non-repeated content (e.g. "Skip to main content" link)',severity:1}),oo=d(152,{description:'Elements should not have "!important" for "line-height" property in "style" attribute, except if it’s at least 1.5 times the font size',display:"Avoid inline line height",errorMessage:'Element has "!important" for "line-height" property in "style" attribute',level:"A",key:"avoid-inline-line-height",references:[{label:"1.4.12 Text Spacing",url:"https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"},{label:"ACT: Line height in style attributes is not !important",url:"https://www.w3.org/WAI/standards-guidelines/act/rules/78fd32/"}],recommendation:'Remove "!important" for "line-height" property in "style" attribute or make it at least 1.5 times the font size',severity:1});const Ue={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",defaultValue:"false"},"aria-autocomplete":{type:"token",values:["inline","list","both","none"],defaultValue:"none"},"aria-busy":{type:"boolean",defaultValue:"false"},"aria-checked":{type:"tristate",defaultValue:"undefined"},"aria-colcount":{type:"integer",minValue:-1},"aria-colindex":{type:"integer",minValue:1},"aria-colspan":{type:"integer",minValue:1},"aria-controls":{type:"idref-list",allowEmpty:!0},"aria-current":{type:"token",allowEmpty:!0,values:["page","step","location","date","time","true","false"],defaultValue:"false"},"aria-describedby":{type:"idref-list",allowEmpty:!0},"aria-details":{type:"idref",allowEmpty:!0},"aria-disabled":{type:"boolean",defaultValue:"false"},"aria-dropeffect":{deprecated:!0,type:"token-list",values:["copy","execute","link","move","none","popup"],defaultValue:"none"},"aria-errormessage":{type:"idref",allowEmpty:!0},"aria-expanded":{type:"boolean-undefined",defaultValue:"undefined"},"aria-flowto":{type:"idref-list",allowEmpty:!0},"aria-grabbed":{deprecated:!0,type:"boolean-undefined",defaultValue:"undefined"},"aria-haspopup":{type:"token",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],defaultValue:"false"},"aria-hidden":{type:"boolean-undefined",defaultValue:"undefined"},"aria-invalid":{type:"token",allowEmpty:!0,values:["grammar","false","spelling","true"],defaultValue:"false"},"aria-keyshortcuts":{type:"string",allowEmpty:!0},"aria-label":{type:"string",allowEmpty:!0},"aria-labelledby":{type:"idref-list",allowEmpty:!0},"aria-level":{type:"integer",minValue:1},"aria-live":{type:"token",values:["assertive","off","polite"],defaultValue:"polite"},"aria-modal":{type:"boolean",defaultValue:"false"},"aria-multiline":{type:"boolean",defaultValue:"false"},"aria-multiselectable":{type:"boolean",defaultValue:"false"},"aria-orientation":{type:"token",values:["horizontal","undefined","vertical"],defaultValue:"undefined"},"aria-owns":{type:"idref-list",allowEmpty:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"integer",minValue:1},"aria-pressed":{type:"tristate",defaultValue:"undefined"},"aria-readonly":{type:"boolean",defaultValue:"false"},"aria-relevant":{type:"token-list",values:["additions","all","removals","text"]},"aria-required":{type:"boolean",defaultValue:"false"},"aria-roledescription":{type:"string",allowEmpty:!0},"aria-rowcount":{type:"integer",minValue:-1},"aria-rowindex":{type:"integer",minValue:1},"aria-rowspan":{type:"integer",minValue:0},"aria-selected":{type:"boolean-undefined",defaultValue:"undefined"},"aria-setsize":{type:"integer",minValue:-1},"aria-sort":{type:"token",values:["ascending","descending","none","other"],defaultValue:"none"},"aria-valuemax":{type:"number"},"aria-valuemin":{type:"number"},"aria-valuenow":{type:"number"},"aria-valuetext":{type:"string"}},so={boolean:["true","false"],"boolean-undefined":["true","false","undefined"],tristate:["true","false","mixed","undefined"]};function pr(){return Object.keys(Ue)}function ye(e){return Ue[e]?{...Ue[e]}:null}function lo(e){return Object.entries(Ue).reduce((t,[r,n])=>(e.includes(n.type)&&(t[r]=n),t),{})}function Z(e,t){let r=e.getAttribute(t);if(typeof r=="string"){if(r=r.trim().toLowerCase(),r==="true"||r==="")return!0;if(r==="false")return!1}return null}function _(e,t){const r=parseInt(e.getAttribute(t)||"",10);return isNaN(r)?null:r}function mr(e){return e[e.length-1]}function pt(e){return[...new Set(e)]}function mt(e,t=(r,n)=>r<n?-1:r>n?1:0){if(e.length<=1)return e;const r=Math.floor(e.length/2),n=e.slice(0,r),a=e.slice(r),i=mt(n,t),o=mt(a,t),s=[];let l=0,u=0;for(;l<i.length&&u<o.length;)t(i[l],o[u])<=0?(s.push(i[l]),l++):(s.push(o[u]),u++);return s.concat(i.slice(l),o.slice(u))}function _e(e,t){if(!e)throw new Error(t)}let qe={};const Ne={set(e,t){uo(e),qe[e]=t},get(e,t=()=>{}){if(co(t),e in qe)return qe[e];if(typeof t=="function"){const r=t();return _e(r!==void 0,"Cache creator function should not return undefined"),this.set(e,r),qe[e]}},clear(){qe={}}};function uo(e){_e(typeof e=="string","key must be a string, "+typeof e+" given"),_e(e!=="","key must not be empty")}function co(e){_e(typeof e=="function"||typeof e>"u","creator must be a function or undefined, "+typeof e+" given")}const fr=typeof window<"u"&&"MutationObserver"in window,ne={},ce={set(e,t){if(ce.exist(e))throw new Error(\`'\${e}' mutation cache is already exist\`);ne[e]={value:t(),recalculateValue:t}},get(e){return(ne[e].isRecalculateNeeded||!fr)&&(ne[e].isRecalculateNeeded=!1,ce.recalculate(e)),ne[e].value},exist(e){return e in ne},recalculate(e){ne[e].value=ne[e].recalculateValue()}};fr&&new MutationObserver(()=>{for(const t in ne)ne[t].isRecalculateNeeded=!0}).observe(document.documentElement,{childList:!0,subtree:!0});function ft(e){return e?e.trim().split("-")[0].toLowerCase():""}class J{constructor(t,r,n,a){Y(this,"hexRegex",/^#[0-9a-f]{3,8}$/i);Y(this,"colorFnRegex",/^((?:rgb|hsl)a?)\\s*\\(([^\\)]*)\\)/i);Y(this,"red");Y(this,"green");Y(this,"blue");Y(this,"alpha");this.red=t===void 0?0:t,this.blue=n===void 0?0:n,this.green=r===void 0?0:r,this.alpha=a===void 0?1:a}parseString(t){return t.match(this.colorFnRegex)?(this.parseColorFnString(t),this):t.match(this.hexRegex)?(this.parseHexString(t),this):(console.error(\`Unable to parse color "\${t}"\`),null)}parseColorFnString(t){const[,r,n]=t.match(this.colorFnRegex)||[];if(!r||!n)return;let i=n.split(/\\s*[,\\/\\s]\\s*/).map(o=>o.replace(",","").trim()).filter(o=>o!=="").map((o,s)=>this.convertColorVal(r,o,s));r.substr(0,3)==="hsl"&&(i=this.hslToRgb(i)),this.red=i[0],this.green=i[1],this.blue=i[2],this.alpha=typeof i[3]=="number"?i[3]:1}parseHexString(t){if(!t.match(this.hexRegex)||[6,8].includes(t.length))return;let r=t.replace("#","");if(r.length<6){const[a,i,o,s]=r;r=a+a+i+i+o+o,s&&(r+=s+s)}const n=r.match(/.{1,2}/g);n&&(this.red=parseInt(n[0],16),this.green=parseInt(n[1],16),this.blue=parseInt(n[2],16)),n&&n[3]?this.alpha=parseInt(n[3],16)/255:this.alpha=1}parseRgbString(t){if(t==="transparent"){this.red=0,this.green=0,this.blue=0,this.alpha=0;return}this.parseColorFnString(t)}getRelativeLuminance(){if(!this.red&&!this.green&&!this.blue)return;const t=this.red/255,r=this.green/255,n=this.blue/255,a=t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4),i=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),o=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4);return .2126*a+.7152*i+.0722*o}toHexString(){const t=Math.round(this.red).toString(16),r=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16);return"#"+(this.red>15.5?t:"0"+t)+(this.green>15.5?r:"0"+r)+(this.blue>15.5?n:"0"+n)}convertColorVal(t,r,n){if(/%$/.test(r))return n===3?parseFloat(r)/100:parseFloat(r)*255/100;if(t[n]==="h"){if(/turn$/.test(r))return parseFloat(r)*360;if(/rad$/.test(r))return parseFloat(r)*57.3}return parseFloat(r)}hslToRgb([t,r,n,a]){r/=255,n/=255;const i=(1-Math.abs(2*n-1))*r,o=i*(1-Math.abs(t/60%2-1)),s=n-i/2;let l;return t<60?l=[i,o,0]:t<120?l=[o,i,0]:t<180?l=[0,i,o]:t<240?l=[0,o,i]:t<300?l=[o,0,i]:l=[i,0,o],l.map(u=>Math.round((u+s)*255)).concat(a)}}function ho(e,t,r){return Math.min(Math.max(t,e),r)}const po={normal(e,t){return t},multiply(e,t){return t*e},screen(e,t){return e+t-e*t},overlay(e,t){return this["hard-light"](t,e)},darken(e,t){return Math.min(e,t)},lighten(e,t){return Math.max(e,t)},"color-dodge"(e,t){return e===0?0:t===1?1:Math.min(1,e/(1-t))},"color-burn"(e,t){return e===1?1:t===0?0:1-Math.min(1,(1-e)/t)},"hard-light"(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light"(e,t){if(t<=.5)return e-(1-2*t)*e*(1-e);{const r=e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e);return e+(2*t-1)*(r-e)}},difference(e,t){return Math.abs(e-t)},exclusion(e,t){return e+t-2*e*t}};function gt(e,t,r,n,a){return t*(1-n)*e+t*n*po[a](r/255,e/255)*255+(1-t)*n*r}function ve(e,t,r="normal"){const n=gt(e.red,e.alpha,t.red,t.alpha,r),a=gt(e.green,e.alpha,t.green,t.alpha,r),i=gt(e.blue,e.alpha,t.blue,t.alpha,r),o=ho(e.alpha+t.alpha*(1-e.alpha),0,1);if(o===0)return new J(n,a,i,o);const s=Math.round(n/o),l=Math.round(a/o),u=Math.round(i/o);return new J(s,l,u,o)}function gr(e,t){const r=e.alpha,n=(1-r)*t.red+r*e.red,a=(1-r)*t.green+r*e.green,i=(1-r)*t.blue+r*e.blue,o=e.alpha+t.alpha*(1-e.alpha);return new J(n,a,i,o)}function wt(e,t,r){const n=y(e),a=n.getPropertyValue("text-shadow"),i=n.getPropertyValue("font-size"),o=parseInt(i);if(a==="none"||isNaN(o))return[];const s=[];return mo(a).forEach(({colorStr:u,pixels:c})=>{u=u||n.getPropertyValue("color");const[p,A,D=0]=c;if((!t||D>=o*t)&&(!r||D<o*r)){const N=fo({colorStr:u,offsetY:p,offsetX:A,blurRadius:D,fontSize:o});s.push(N)}}),s}function mo(e){let t={pixels:[]},r=e.trim();const n=[t];if(!r)return[];for(;r;){const a=r.match(/^rgba?\\([0-9,.\\s]+\\)/i)||r.match(/^[a-z]+/i)||r.match(/^#[0-9a-f]+/i),i=r.match(/^([0-9.-]+)px/i)||r.match(/^(0)/);if(a){if(t.colorStr)return[];r=r.replace(a[0],"").trim(),t.colorStr=a[0]}else if(i){if(!(t.pixels.length<3))return[];r=r.replace(i[0],"").trim();const o=parseFloat((i[1][0]==="."?"0":"")+i[1]);t.pixels.push(o)}else if(r[0]===","){if(!(t.pixels.length>=2))return[];t={pixels:[]},n.push(t),r=r.substr(1).trim()}else return[]}return n}function fo({colorStr:e,offsetX:t,offsetY:r,blurRadius:n,fontSize:a}){if(t>n||r>n)return new J(0,0,0,0);const i=new J;return i.parseString(e),i.alpha*=go(n,a),i}function go(e,t){return e===0?1:.185/(e/t+.4)}let je={};const Q={set:function(e,t){return t&&(je[e]=t),je[e]},get:function(e){return je[e]},clear:function(){je={}}};function wr(e,t){const r=["img","canvas","object","iframe","video","svg"],n=w(e);if(r.includes(n))return Q.set("bgColor","imgNode"),!0;t=t||y(e);const a=t.getPropertyValue("background-image"),i=a!=="none";if(i){const o=/gradient/.test(a);Q.set("bgColor",o?"bgGradient":"bgImage")}return i}const br=new WeakMap;function Ar(e,t=[],r=.1){const n=br.get(e);if(n)return t.push(...n.bgElms),Q.set("bgColor",n.incompleteData),n.bgColor;const a=wo(e,t,r);return br.set(e,{bgColor:a,bgElms:t,incompleteData:Q.get("bgColor")}),a}function wo(e,t,r){const n=wt(e,r);let a=[];n.length&&(a=[{color:n.reduce(gr)}]);const i=Ao(e),o=wn(e);if((i||[]).some(u=>{const c=y(u);if(wr(u,c))return a=null,t.push(u),!0;const p=Se(c);if(p.alpha===0)return!1;if(c.getPropertyValue("display")!=="inline"&&!Dr(u,o))return a=null,t.push(u),Q.set("bgColor","elmPartiallyObscured"),!0;t.push(u);const A=c.getPropertyValue("mix-blend-mode");return a&&a.unshift({color:p,blendMode:bt(A)}),p.alpha===1}),a===null||i===null)return null;const s=bo(e,i.includes(document.body));if(a.unshift(...s),a.length===0)return new J(255,255,255,1);const l=a.reduce((u,c)=>({color:ve(c.color,u.color,c.blendMode)}));return ve(l.color,new J(255,255,255,1))}function Dr(e,t){t=Array.isArray(t)?t:[t];const r=W(e);let{right:n,bottom:a}=r;const o=y(e).getPropertyValue("overflow");return(["scroll","auto"].includes(o)||e instanceof window.HTMLHtmlElement)&&(n=r.left+e.scrollWidth,a=r.top+e.scrollHeight),t.every(s=>s.top>=r.top&&s.bottom<=a&&s.left>=r.left&&s.right<=n)}function bt(e){return e||void 0}function bo(e,t){const r=[];if(!t){const n=document.documentElement,a=document.body,i=y(n),o=y(a),s=Se(i),l=Se(o),u=l.alpha!==0&&Dr(a,W(e));(l.alpha!==0&&s.alpha===0||u&&l.alpha!==1)&&r.unshift({color:l,blendMode:bt(o.getPropertyValue("mix-blend-mode"))}),s.alpha!==0&&(!u||u&&l.alpha!==1)&&r.unshift({color:s,blendMode:bt(i.getPropertyValue("mix-blend-mode"))})}return r}function Ao(e){const t=il(e).map(r=>(r=vo(r,e),r=Do(r),r));for(let r=0;r<t.length;r++){const n=t[r];if(n[0]!==e)return Q.set("bgColor","bgOverlap"),null;if(r!==0&&!yo(n,t[0]))return Q.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function Do(e){const t=e.indexOf(document.body),r=e,n=Se(y(document.documentElement));if(t>1&&n.alpha===0&&!wr(document.documentElement)){t>1&&(r.splice(t,1),r.push(document.body));const a=r.indexOf(document.documentElement);a>0&&(r.splice(a,1),r.push(document.documentElement))}return r}function yo(e,t){if(e===t)return!0;if(e===null||t===null||e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}function vo(e,t){const r=["fixed","sticky"];let n=[],a=!1;for(let i=0;i<e.length;++i){const o=e[i];o===t&&(a=!0);const s=y(o);if(!a&&r.indexOf(s.position)!==-1){n=[];continue}n.push(o)}return n}function $e(e,t){if(!t||!e)return null;t.alpha<1&&(t=ve(t,e));const r=Number(e.getRelativeLuminance()||0),n=Number(t.getRelativeLuminance()||0);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Co(e,t,r){const n=y(e),a=yr(e,n),i=Ro(n,r);if(i&&i.alpha*a===1)return i.alpha=1,i;const o=To(n);let s=i?ve(i,o):o;if(s.alpha*a===1||(s=wt(e,0).reduce((u,c)=>ve(u,c),s),s.alpha*a===1))return s.alpha=1,s;if(t??(t=Ar(e,[])),t===null){const u=Q.get("bgColor");return Q.set("fgColor",u),null}return s.alpha=s.alpha*a,ve(s,t)}function To(e){return new J().parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}function Ro(e,t=0){const r=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"));if(r===0)return null;const n=e.getPropertyValue("font-size"),a=r/parseFloat(n);if(isNaN(a)||a<t)return null;const i=e.getPropertyValue("-webkit-text-stroke-color");return new J().parseString(i)}const At=new WeakMap;function yr(e,t){if(!e)return 1;if(At.has(e))return At.get(e);t??(t=y(e));const n=Number(t.getPropertyValue("opacity"))*yr(e.parentElement);return At.set(e,n),n}function Se(e){const t=new J;if(t.parseString(e.getPropertyValue("background-color")),t.alpha!==0){const r=e.getPropertyValue("opacity");t.alpha=t.alpha*Number(r)}return t}function Eo(e=document){return[e,...an(e)].reduce((r,n)=>{if(typeof n.styleSheets<"u"){let a=r.findIndex(i=>i.root===n);a<0&&(a=r.length);for(const i of n.styleSheets)if(typeof i.cssRules<"u"){r[a]||(r[a]={root:n,cssRules:[]});for(const o of i.cssRules)r[a].cssRules.push(o)}}return r},[])}function y(e,t){const r=Ne.get("computed-styles-cache",()=>new Map),n=t||"main";if(r.has(e)){const i=r.get(e);if(i[n])return i[n]}const a=window.getComputedStyle(e,t);return r.set(e,{[n]:a}),a}const Fo=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]];function ko(e){let t=Fo;for(;e.length<3;)e+="\`";e=e.toLowerCase();for(let r=0;r<=e.length-1;r++){const n=e.charCodeAt(r)-96;if(t=t[n],!t)return!1}return!0}function Io(e,t){const r=Math.min(e.top,t.top),n=Math.max(e.right,t.right),a=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left);return new window.DOMRect(i,r,n-i,a-r)}function Dt(e){return Math.round(e*(180/Math.PI))}function Wo(e){return e=e%400,e<0&&(e+=400),Math.round(e/400*360)}function xo(e){return Math.round(360/(1/e))}function vr(e){const[t]=e.match(/(deg|grad|rad|turn)/)||[];if(!t)return null;const r=parseFloat(e.replace(t,""));switch(t){case"rad":return Dt(r);case"grad":return Wo(r);case"turn":return xo(r);case"deg":default:return Math.trunc(r)}}function qo(e){const t=e.split(",");if(t.length<=6){const[o,s]=t,l=Math.atan2(parseFloat(s),parseFloat(o));return Dt(l)}const r=parseFloat(t[8]),n=Math.asin(r),a=Math.cos(n),i=Math.acos(parseFloat(t[0])/a);return Dt(i)}function Cr(e,t){const r=Math.max(e.left,t.left),n=Math.min(e.right,t.right),a=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom);return r>=n||a>=i?null:new window.DOMRect(r,a,n-r,i-a)}function Tr({left:e,top:t,width:r,height:n}){return new window.DOMPoint(e+r/2,t+n/2)}function No(e,t){const r=W(e),n=W(t),a=So(r,n),i=Mo(a,r,n);return Go(a,i)}function So(e,t){const r=[["x","left","right","width"],["y","top","bottom","height"]],n={x:0,y:0};return r.forEach(a=>{const i=a[0],o=a[1],s=a[2],l=a[3];if(t[o]<e[o]&&t[s]>e[s]){n[i]=e[o]+e[l]/2;return}const u=t[o]+t[l]/2,c=Math.abs(u-e[o]),p=Math.abs(u-e[s]);c>=p?n[i]=e[o]:n[i]=e[s]}),n}function Mo({x:e,y:t},r,n){if(Lo({x:e,y:t},n)){const A=Po({x:e,y:t},r,n);if(A!==null)return A;n=r}const{top:a,right:i,bottom:o,left:s}=n,l=e>=s&&e<=i,u=t>=a&&t<=o,c=Math.abs(s-e)<Math.abs(i-e)?s:i,p=Math.abs(a-t)<Math.abs(o-t)?a:o;return!l&&u?{x:c,y:t}:l&&!u?{x:e,y:p}:!l&&!u?{x:c,y:p}:Math.abs(e-c)<Math.abs(t-p)?{x:c,y:t}:{x:e,y:p}}function Go(e,t){const r=Math.abs(e.x-t.x),n=Math.abs(e.y-t.y);return!r||!n?r||n:Math.sqrt(Math.pow(r,2)+Math.pow(n,2))}function Lo({x:e,y:t},r){return t>=r.top&&e<=r.right&&t<=r.bottom&&e>=r.left}function Po({x:e,y:t},r,n){let a=0,i;if(e===r.left&&r.right<n.right?a=r.right:e===r.right&&r.left>n.left&&(a=r.left),t===r.top&&r.bottom<n.bottom?i=r.bottom:t===r.bottom&&r.top>n.top&&(i=r.top),!a&&!i)return null;if(i){if(!a)return{x:e,y:i}}else return{x:a,y:t};return Math.abs(e-a)<Math.abs(t-i)?{x:a,y:t}:{x:e,y:i}}function Rr({x:e,y:t},{top:r,right:n,bottom:a,left:i}){return t>=r&&e<=n&&t<=a&&e>=i}function Bo(e,t){let r=[e];for(const n of t)r=r.reduce((a,i)=>a.concat(Ho(i,n)),[]);return r}function Ho(e,t){const{top:r,left:n,bottom:a,right:i}=e,o=r<t.bottom&&a>t.top,s=n<t.right&&i>t.left,l=[];return Xe(t.top,r,a)&&s&&l.push({top:r,left:n,bottom:t.top,right:i}),Xe(t.right,n,i)&&o&&l.push({top:r,left:t.right,bottom:a,right:i}),Xe(t.bottom,r,a)&&s&&l.push({top:t.bottom,right:i,bottom:a,left:n}),Xe(t.left,n,i)&&o&&l.push({top:r,left:n,bottom:a,right:t.left}),l.length===0&&l.push(e),l.map(Oo)}const Xe=(e,t,r)=>e>t&&e<r;function Oo(e){return{...e,x:e.left,y:e.top,height:e.bottom-e.top,width:e.right-e.left}}function me(e){if(typeof CSS<"u"&&(CSS!=null&&CSS.escape))return CSS.escape(e);const t=String(e),r=t.charCodeAt(0);let n=-1,a,i="";for(;++n<t.length;){if(a=t.charCodeAt(n),a==0){i+="�";continue}if(a>=1&&a<=31||a==127||n==0&&a>=48&&a<=57||n==1&&a>=48&&a<=57&&r==45){i+="\\\\"+a.toString(16)+" ";continue}if(n==0&&t.length==1&&a==45){i+="\\\\"+t.charAt(n);continue}if(a>=128||a==45||a==95||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122){i+=t.charAt(n);continue}i+="\\\\"+t.charAt(n)}return i}function Vo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zo=function(){return/\\uD83C\\uDFF4\\uDB40\\uDC67\\uDB40\\uDC62(?:\\uDB40\\uDC65\\uDB40\\uDC6E\\uDB40\\uDC67|\\uDB40\\uDC73\\uDB40\\uDC63\\uDB40\\uDC74|\\uDB40\\uDC77\\uDB40\\uDC6C\\uDB40\\uDC73)\\uDB40\\uDC7F|\\uD83D\\uDC68(?:\\uD83C\\uDFFC\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68\\uD83C\\uDFFB|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFF\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB-\\uDFFE])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFE\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB-\\uDFFD])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFD\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB\\uDFFC])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\u200D(?:\\u2764\\uFE0F\\u200D(?:\\uD83D\\uDC8B\\u200D)?\\uD83D\\uDC68|(?:\\uD83D[\\uDC68\\uDC69])\\u200D(?:\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC67\\u200D(?:\\uD83D[\\uDC66\\uDC67]))|\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC67\\u200D(?:\\uD83D[\\uDC66\\uDC67])|(?:\\uD83D[\\uDC68\\uDC69])\\u200D(?:\\uD83D[\\uDC66\\uDC67])|[\\u2695\\u2696\\u2708]\\uFE0F|\\uD83D[\\uDC66\\uDC67]|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|(?:\\uD83C\\uDFFB\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFF\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFE\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFD\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFC\\u200D[\\u2695\\u2696\\u2708])\\uFE0F|\\uD83C\\uDFFB\\u200D(?:\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C[\\uDFFB-\\uDFFF])|(?:\\uD83E\\uDDD1\\uD83C\\uDFFB\\u200D\\uD83E\\uDD1D\\u200D\\uD83E\\uDDD1|\\uD83D\\uDC69\\uD83C\\uDFFC\\u200D\\uD83E\\uDD1D\\u200D\\uD83D\\uDC69)\\uD83C\\uDFFB|\\uD83E\\uDDD1(?:\\uD83C\\uDFFF\\u200D\\uD83E\\uDD1D\\u200D\\uD83E\\uDDD1(?:\\uD83C[\\uDFFB-\\uDFFF])|\\u200D\\uD83E\\uDD1D\\u200D\\uD83E\\uDDD1)|(?:\\uD83E\\uDDD1\\uD83C\\uDFFE\\u200D\\uD83E\\uDD1D\\u200D\\uD83E\\uDDD1|\\uD83D\\uDC69\\uD83C\\uDFFF\\u200D\\uD83E\\uDD1D\\u200D(?:\\uD83D[\\uDC68\\uDC69]))(?:\\uD83C[\\uDFFB-\\uDFFE])|(?:\\uD83E\\uDDD1\\uD83C\\uDFFC\\u200D\\uD83E\\uDD1D\\u200D\\uD83E\\uDDD1|\\uD83D\\uDC69\\uD83C\\uDFFD\\u200D\\uD83E\\uDD1D\\u200D\\uD83D\\uDC69)(?:\\uD83C[\\uDFFB\\uDFFC])|\\uD83D\\uDC69(?:\\uD83C\\uDFFE\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB-\\uDFFD\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFC\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB\\uDFFD-\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFB\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFC-\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFD\\u200D(?:\\uD83E\\uDD1D\\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB\\uDFFC\\uDFFE\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\u200D(?:\\u2764\\uFE0F\\u200D(?:\\uD83D\\uDC8B\\u200D(?:\\uD83D[\\uDC68\\uDC69])|\\uD83D[\\uDC68\\uDC69])|\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFF\\u200D(?:\\uD83C[\\uDF3E\\uDF73\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]))|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D(?:\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC67\\u200D(?:\\uD83D[\\uDC66\\uDC67]))|(?:\\uD83E\\uDDD1\\uD83C\\uDFFD\\u200D\\uD83E\\uDD1D\\u200D\\uD83E\\uDDD1|\\uD83D\\uDC69\\uD83C\\uDFFE\\u200D\\uD83E\\uDD1D\\u200D\\uD83D\\uDC69)(?:\\uD83C[\\uDFFB-\\uDFFD])|\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D(?:\\uD83D[\\uDC66\\uDC67])|(?:\\uD83D\\uDC41\\uFE0F\\u200D\\uD83D\\uDDE8|\\uD83D\\uDC69(?:\\uD83C\\uDFFF\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFE\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFC\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFB\\u200D[\\u2695\\u2696\\u2708]|\\uD83C\\uDFFD\\u200D[\\u2695\\u2696\\u2708]|\\u200D[\\u2695\\u2696\\u2708])|(?:(?:\\u26F9|\\uD83C[\\uDFCB\\uDFCC]|\\uD83D\\uDD75)\\uFE0F|\\uD83D\\uDC6F|\\uD83E[\\uDD3C\\uDDDE\\uDDDF])\\u200D[\\u2640\\u2642]|(?:\\u26F9|\\uD83C[\\uDFCB\\uDFCC]|\\uD83D\\uDD75)(?:\\uD83C[\\uDFFB-\\uDFFF])\\u200D[\\u2640\\u2642]|(?:\\uD83C[\\uDFC3\\uDFC4\\uDFCA]|\\uD83D[\\uDC6E\\uDC71\\uDC73\\uDC77\\uDC81\\uDC82\\uDC86\\uDC87\\uDE45-\\uDE47\\uDE4B\\uDE4D\\uDE4E\\uDEA3\\uDEB4-\\uDEB6]|\\uD83E[\\uDD26\\uDD37-\\uDD39\\uDD3D\\uDD3E\\uDDB8\\uDDB9\\uDDCD-\\uDDCF\\uDDD6-\\uDDDD])(?:(?:\\uD83C[\\uDFFB-\\uDFFF])\\u200D[\\u2640\\u2642]|\\u200D[\\u2640\\u2642])|\\uD83C\\uDFF4\\u200D\\u2620)\\uFE0F|\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D(?:\\uD83D[\\uDC66\\uDC67])|\\uD83C\\uDFF3\\uFE0F\\u200D\\uD83C\\uDF08|\\uD83D\\uDC15\\u200D\\uD83E\\uDDBA|\\uD83D\\uDC69\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83C\\uDDFD\\uD83C\\uDDF0|\\uD83C\\uDDF4\\uD83C\\uDDF2|\\uD83C\\uDDF6\\uD83C\\uDDE6|[#\\*0-9]\\uFE0F\\u20E3|\\uD83C\\uDDE7(?:\\uD83C[\\uDDE6\\uDDE7\\uDDE9-\\uDDEF\\uDDF1-\\uDDF4\\uDDF6-\\uDDF9\\uDDFB\\uDDFC\\uDDFE\\uDDFF])|\\uD83C\\uDDF9(?:\\uD83C[\\uDDE6\\uDDE8\\uDDE9\\uDDEB-\\uDDED\\uDDEF-\\uDDF4\\uDDF7\\uDDF9\\uDDFB\\uDDFC\\uDDFF])|\\uD83C\\uDDEA(?:\\uD83C[\\uDDE6\\uDDE8\\uDDEA\\uDDEC\\uDDED\\uDDF7-\\uDDFA])|\\uD83E\\uDDD1(?:\\uD83C[\\uDFFB-\\uDFFF])|\\uD83C\\uDDF7(?:\\uD83C[\\uDDEA\\uDDF4\\uDDF8\\uDDFA\\uDDFC])|\\uD83D\\uDC69(?:\\uD83C[\\uDFFB-\\uDFFF])|\\uD83C\\uDDF2(?:\\uD83C[\\uDDE6\\uDDE8-\\uDDED\\uDDF0-\\uDDFF])|\\uD83C\\uDDE6(?:\\uD83C[\\uDDE8-\\uDDEC\\uDDEE\\uDDF1\\uDDF2\\uDDF4\\uDDF6-\\uDDFA\\uDDFC\\uDDFD\\uDDFF])|\\uD83C\\uDDF0(?:\\uD83C[\\uDDEA\\uDDEC-\\uDDEE\\uDDF2\\uDDF3\\uDDF5\\uDDF7\\uDDFC\\uDDFE\\uDDFF])|\\uD83C\\uDDED(?:\\uD83C[\\uDDF0\\uDDF2\\uDDF3\\uDDF7\\uDDF9\\uDDFA])|\\uD83C\\uDDE9(?:\\uD83C[\\uDDEA\\uDDEC\\uDDEF\\uDDF0\\uDDF2\\uDDF4\\uDDFF])|\\uD83C\\uDDFE(?:\\uD83C[\\uDDEA\\uDDF9])|\\uD83C\\uDDEC(?:\\uD83C[\\uDDE6\\uDDE7\\uDDE9-\\uDDEE\\uDDF1-\\uDDF3\\uDDF5-\\uDDFA\\uDDFC\\uDDFE])|\\uD83C\\uDDF8(?:\\uD83C[\\uDDE6-\\uDDEA\\uDDEC-\\uDDF4\\uDDF7-\\uDDF9\\uDDFB\\uDDFD-\\uDDFF])|\\uD83C\\uDDEB(?:\\uD83C[\\uDDEE-\\uDDF0\\uDDF2\\uDDF4\\uDDF7])|\\uD83C\\uDDF5(?:\\uD83C[\\uDDE6\\uDDEA-\\uDDED\\uDDF0-\\uDDF3\\uDDF7-\\uDDF9\\uDDFC\\uDDFE])|\\uD83C\\uDDFB(?:\\uD83C[\\uDDE6\\uDDE8\\uDDEA\\uDDEC\\uDDEE\\uDDF3\\uDDFA])|\\uD83C\\uDDF3(?:\\uD83C[\\uDDE6\\uDDE8\\uDDEA-\\uDDEC\\uDDEE\\uDDF1\\uDDF4\\uDDF5\\uDDF7\\uDDFA\\uDDFF])|\\uD83C\\uDDE8(?:\\uD83C[\\uDDE6\\uDDE8\\uDDE9\\uDDEB-\\uDDEE\\uDDF0-\\uDDF5\\uDDF7\\uDDFA-\\uDDFF])|\\uD83C\\uDDF1(?:\\uD83C[\\uDDE6-\\uDDE8\\uDDEE\\uDDF0\\uDDF7-\\uDDFB\\uDDFE])|\\uD83C\\uDDFF(?:\\uD83C[\\uDDE6\\uDDF2\\uDDFC])|\\uD83C\\uDDFC(?:\\uD83C[\\uDDEB\\uDDF8])|\\uD83C\\uDDFA(?:\\uD83C[\\uDDE6\\uDDEC\\uDDF2\\uDDF3\\uDDF8\\uDDFE\\uDDFF])|\\uD83C\\uDDEE(?:\\uD83C[\\uDDE8-\\uDDEA\\uDDF1-\\uDDF4\\uDDF6-\\uDDF9])|\\uD83C\\uDDEF(?:\\uD83C[\\uDDEA\\uDDF2\\uDDF4\\uDDF5])|(?:\\uD83C[\\uDFC3\\uDFC4\\uDFCA]|\\uD83D[\\uDC6E\\uDC71\\uDC73\\uDC77\\uDC81\\uDC82\\uDC86\\uDC87\\uDE45-\\uDE47\\uDE4B\\uDE4D\\uDE4E\\uDEA3\\uDEB4-\\uDEB6]|\\uD83E[\\uDD26\\uDD37-\\uDD39\\uDD3D\\uDD3E\\uDDB8\\uDDB9\\uDDCD-\\uDDCF\\uDDD6-\\uDDDD])(?:\\uD83C[\\uDFFB-\\uDFFF])|(?:\\u26F9|\\uD83C[\\uDFCB\\uDFCC]|\\uD83D\\uDD75)(?:\\uD83C[\\uDFFB-\\uDFFF])|(?:[\\u261D\\u270A-\\u270D]|\\uD83C[\\uDF85\\uDFC2\\uDFC7]|\\uD83D[\\uDC42\\uDC43\\uDC46-\\uDC50\\uDC66\\uDC67\\uDC6B-\\uDC6D\\uDC70\\uDC72\\uDC74-\\uDC76\\uDC78\\uDC7C\\uDC83\\uDC85\\uDCAA\\uDD74\\uDD7A\\uDD90\\uDD95\\uDD96\\uDE4C\\uDE4F\\uDEC0\\uDECC]|\\uD83E[\\uDD0F\\uDD18-\\uDD1C\\uDD1E\\uDD1F\\uDD30-\\uDD36\\uDDB5\\uDDB6\\uDDBB\\uDDD2-\\uDDD5])(?:\\uD83C[\\uDFFB-\\uDFFF])|(?:[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55]|\\uD83C[\\uDC04\\uDCCF\\uDD8E\\uDD91-\\uDD9A\\uDDE6-\\uDDFF\\uDE01\\uDE1A\\uDE2F\\uDE32-\\uDE36\\uDE38-\\uDE3A\\uDE50\\uDE51\\uDF00-\\uDF20\\uDF2D-\\uDF35\\uDF37-\\uDF7C\\uDF7E-\\uDF93\\uDFA0-\\uDFCA\\uDFCF-\\uDFD3\\uDFE0-\\uDFF0\\uDFF4\\uDFF8-\\uDFFF]|\\uD83D[\\uDC00-\\uDC3E\\uDC40\\uDC42-\\uDCFC\\uDCFF-\\uDD3D\\uDD4B-\\uDD4E\\uDD50-\\uDD67\\uDD7A\\uDD95\\uDD96\\uDDA4\\uDDFB-\\uDE4F\\uDE80-\\uDEC5\\uDECC\\uDED0-\\uDED2\\uDED5\\uDEEB\\uDEEC\\uDEF4-\\uDEFA\\uDFE0-\\uDFEB]|\\uD83E[\\uDD0D-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDD71\\uDD73-\\uDD76\\uDD7A-\\uDDA2\\uDDA5-\\uDDAA\\uDDAE-\\uDDCA\\uDDCD-\\uDDFF\\uDE70-\\uDE73\\uDE78-\\uDE7A\\uDE80-\\uDE82\\uDE90-\\uDE95])|(?:[#\\*0-9\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2604\\u260E\\u2611\\u2614\\u2615\\u2618\\u261D\\u2620\\u2622\\u2623\\u2626\\u262A\\u262E\\u262F\\u2638-\\u263A\\u2640\\u2642\\u2648-\\u2653\\u265F\\u2660\\u2663\\u2665\\u2666\\u2668\\u267B\\u267E\\u267F\\u2692-\\u2697\\u2699\\u269B\\u269C\\u26A0\\u26A1\\u26AA\\u26AB\\u26B0\\u26B1\\u26BD\\u26BE\\u26C4\\u26C5\\u26C8\\u26CE\\u26CF\\u26D1\\u26D3\\u26D4\\u26E9\\u26EA\\u26F0-\\u26F5\\u26F7-\\u26FA\\u26FD\\u2702\\u2705\\u2708-\\u270D\\u270F\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763\\u2764\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299]|\\uD83C[\\uDC04\\uDCCF\\uDD70\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDE6-\\uDDFF\\uDE01\\uDE02\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE50\\uDE51\\uDF00-\\uDF21\\uDF24-\\uDF93\\uDF96\\uDF97\\uDF99-\\uDF9B\\uDF9E-\\uDFF0\\uDFF3-\\uDFF5\\uDFF7-\\uDFFF]|\\uD83D[\\uDC00-\\uDCFD\\uDCFF-\\uDD3D\\uDD49-\\uDD4E\\uDD50-\\uDD67\\uDD6F\\uDD70\\uDD73-\\uDD7A\\uDD87\\uDD8A-\\uDD8D\\uDD90\\uDD95\\uDD96\\uDDA4\\uDDA5\\uDDA8\\uDDB1\\uDDB2\\uDDBC\\uDDC2-\\uDDC4\\uDDD1-\\uDDD3\\uDDDC-\\uDDDE\\uDDE1\\uDDE3\\uDDE8\\uDDEF\\uDDF3\\uDDFA-\\uDE4F\\uDE80-\\uDEC5\\uDECB-\\uDED2\\uDED5\\uDEE0-\\uDEE5\\uDEE9\\uDEEB\\uDEEC\\uDEF0\\uDEF3-\\uDEFA\\uDFE0-\\uDFEB]|\\uD83E[\\uDD0D-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDD71\\uDD73-\\uDD76\\uDD7A-\\uDDA2\\uDDA5-\\uDDAA\\uDDAE-\\uDDCA\\uDDCD-\\uDDFF\\uDE70-\\uDE73\\uDE78-\\uDE7A\\uDE80-\\uDE82\\uDE90-\\uDE95])\\uFE0F|(?:[\\u261D\\u26F9\\u270A-\\u270D]|\\uD83C[\\uDF85\\uDFC2-\\uDFC4\\uDFC7\\uDFCA-\\uDFCC]|\\uD83D[\\uDC42\\uDC43\\uDC46-\\uDC50\\uDC66-\\uDC78\\uDC7C\\uDC81-\\uDC83\\uDC85-\\uDC87\\uDC8F\\uDC91\\uDCAA\\uDD74\\uDD75\\uDD7A\\uDD90\\uDD95\\uDD96\\uDE45-\\uDE47\\uDE4B-\\uDE4F\\uDEA3\\uDEB4-\\uDEB6\\uDEC0\\uDECC]|\\uD83E[\\uDD0F\\uDD18-\\uDD1F\\uDD26\\uDD30-\\uDD39\\uDD3C-\\uDD3E\\uDDB5\\uDDB6\\uDDB8\\uDDB9\\uDDBB\\uDDCD-\\uDDCF\\uDDD1-\\uDDDD])/g};const Er=Vo(zo);function Fr(e,{any:t=!1,emoji:r=!0,nonBmp:n=!0,punctuations:a=!0}={}){return t&&Ln().test(e)||r&&Er().test(e)||n&&(Pn().test(e)||Hn().test(e))?!0:!!(a&&Bn().test(e))}function Me(e,{any:t=!1,emoji:r=!0,nonBmp:n=!0,punctuations:a=!0}={}){return t?e.replace(Ln(),""):(r&&(e=e.replace(Er(),"")),n&&(e=e.replace(Pn(),""),e=e.replace(Hn(),"")),a&&(e=e.replace(Bn(),"")),e)}function E(e){return e?e.replace(/\\r\\n/g,\`
\`).replace(/\\u00A0/g," ").replace(/[\\s]{2,}/g," ").trim():""}const Uo=["x","i"];function _o(e){return!e||(e=e.trim(),!(e!=null&&e.length))?!1:!!(Uo.includes(e.toLowerCase())||!E(Me(e)))}function jo(e,t){return e.length===1&&kr(e,t)}function kr(e,t){return Fr(e,t)&&E(Me(e,t))===""}function fe(e){return(e||"").trim().split(/\\s+/)}function $o(e){if(!e)return!1;try{const t=e.replaceAll(/:host\\((?<selector>.+?)\\)/g,"$<selector>").replaceAll(">>>",">");return document.querySelector(t),!0}catch{return!1}}function yt(e,t){return fe(e.getAttribute(t))}function T(e,t){var r;return((r=e.getAttribute(t))==null?void 0:r.trim())||""}function k(e,t){var r;return((r=e.getAttribute(t))==null?void 0:r.trim().toLowerCase())||""}function w(e){return e.nodeName.toLowerCase()}function V(e,t){return e.getAttribute(t)||""}function I(e,{altAttrNames:t,checkAriaLabel:r=!0,checkAriaLabelledBy:n=!0,checkTextContent:a,checkPresentationRole:i,furtherChecker:o}={}){return!!r&&!!Ir(e)||!!n&&!!vt(e)||!!i&&zr(e)||!!t&&t.some(s=>xr(e,s))||!!a&&Je(e)||!!o&&o(e)}function Ir(e){return!!E(kn(e))}function vt(e){return!!E(In(e))}function Ye(e){return Ir(e)||vt(e)}function de(e){if(e.hasAttribute("role")&&Mn(e,["contents","author"]))return!0;const t=te(e);return!!(t!=null&&t.namingMethods&&t.namingMethods.length>0||C(e)==="combobox"&&m(e,'input:not([type="hidden"])').length)}function Ge(e){const t=C(e),r=t?G(t):null;return!t||z(t)||(r==null?void 0:r.accessibleNameRequired)||q(e)}function Ze(e){const t=ke(e,"for");return t!=null&&t.every(r=>!F(r))?S(e).trim()==="":!1}function Ke(e){const t=ge(e);if(!t)return!1;let r=ut(e);return!r&&e.getAttribute("aria-describedby")&&(r=le(e,"aria-describedby").map(n=>n?S(n):"").join()),E(t).toLowerCase()===E(r).toLowerCase()}function Wr(e){const t=e.getAttribute("type");return!(w(e)==="input"&&t&&["hidden","image","button","submit","reset"].includes(t))}function Xo(e,t){const r=S(e);return r?(Array.isArray(t)||(t=[t]),t.some(n=>r.indexOf(n)!==-1)):!1}function Ct(e){return e.indexOf("aria-")===0}function Yo(e,t){return e.hasAttribute(t)&&!e.getAttribute(t)}function xr(e,t){return!e||!t||!e.hasAttribute(t)?!1:!!E(e.getAttribute(t))}const Zo=["lang","xml:lang"];function qr(e){return Zo.some(t=>{const r=T(e,t);if(r!==""&&!E(r))return!1;if(t==="lang"&&e.hasAttribute("xml:lang")&&r==="")return!0;const n=ft(r);return ko(n)})}function Ko(e,t){return ql(e,t)!==!1}const Le={stateTerms:["on","off","none","false","true","disabled","enabled","undefined","null"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","one-time-code","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]};function Jo(e,t,r={}){if(t||(t=k(e,"autocomplete")),t===""||Le.stateTerms.includes(t))return!0;const n=t.split(/\\s+/g);if(n[n.length-1]==="webauthn"&&(!["input","textarea"].includes(w(e))||(n.pop(),n.length===0)))return!1;let a=!0;if(!r.looseTyped&&(n[0].length>8&&n[0].substring(0,8)==="section-"&&n.shift(),Le.locations.includes(n[0])&&n.shift(),Le.qualifiers.includes(n[0])&&(n.shift(),a=!1),n.length!==1))return!1;const i=n[n.length-1];return a&&Le.standaloneTerms.includes(i)||Le.qualifiedTerms.includes(i)}function Nr(e){const t=oe(e,{composed:!0});if(!(t instanceof Document))return!1;const r=t.doctype;return r===null?!1:r.name.toLowerCase()==="html"&&!r.publicId&&!r.systemId}const Pe={xml:["text/xml"],xhtml:["application/xhtml+xml","application/xml"],svg:["image/svg+xml"],math:["application/mathml+xml","application/mathml-presentation+xml","application/mathml-content+xml"]};function Qo(e){return e==="xml"?[...Pe.xml,...Pe.xhtml,...Pe.svg,...Pe.math]:[...Pe[e]]}function Tt(e,t){var n;const r=oe(e,{composed:!0});if(r instanceof Document){const a=(n=r.contentType)==null?void 0:n.trim().toLowerCase();if(a&&Qo(t).includes(a))return!0;if(r.createElement)return r.createElement("A").localName==="A"}return!1}function Sr(e){return M(e,"math",{includeGivenElement:!0})?!0:Tt(e,"math")}function Ce(e){return M(e,"svg",{includeGivenElement:!0})?!0:Tt(e,"svg")}function es(e){return Tt(e,"xhtml")}function ae(e,t={allowEmpty:!0}){return t.allowEmpty?e.nodeType===Node.TEXT_NODE:e.nodeType===Node.TEXT_NODE&&E(e.nodeValue)!==""}function b(e){var t,r;return e instanceof(((r=(t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView)==null?void 0:r.Element)||Element)}function ts(e){var t,r;return e instanceof(((r=(t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView)==null?void 0:r.HTMLIFrameElement)||HTMLIFrameElement)}function ie(e){var t,r;return e instanceof(((r=(t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView)==null?void 0:r.ShadowRoot)||ShadowRoot)}function rs(e){const t=C(e);return t?Nl(t):Pl(e)?w(e)!=="input"||k(e,"type")!=="hidden":!1}function Te(e,t={}){const r=j(e);return r.some(n=>ae(n,{allowEmpty:!1}))||rs(e)||!t.skipAriaLabel&&I(e)||!t.skipRecursion&&r.some(n=>b(n)&&Te(n))}function Re(e){if(!T(e,"list"))return!1;const t=le(e,"list");return t[0]?w(t[0])==="datalist":!1}function Rt(e,t){return!e.parentNode||e.parentNode.children.length===1?!1:Array.from(e.parentNode.children).some(n=>n!==e&&n.matches(t))}function Je(e){return E(we(e))!==""}function Ee(e){let t=!1;return Gn(e)&&e.hasAttribute("disabled")||k(e,"aria-disabled")==="true"?t=!0:e.parentElement&&(t=Ee(e.parentElement)),t}const ns=["input","select","textarea","progress","meter"];function as(e){return ns.includes(w(e))}function Et(e){if(e.nodeType===Node.DOCUMENT_NODE||["style","script","noscript","template"].includes(w(e)))return!1;ie(e)&&(e=e.host);const t=y(e);if(!t)return!1;if(t.getPropertyValue("display")==="none"||["hidden","collapse"].includes(t.getPropertyValue("visibility")))return!0;const n=L(e);return n?Et(n):!1}const is=(e,t)=>{let r=L(e);for(;r&&w(r)!=="html";){if(b(r)&&r.scrollTop&&(t+=r.scrollTop,t>=0))return!1;r=L(r)}return!0};function Mr(e,t){const r=Zr(e);if(r.bottom<0&&(is(e,r.bottom)||t.position==="absolute"))return!0;if(r.left===0&&r.right===0)return!1;if(window.getComputedStyle(document.body||document.documentElement).getPropertyValue("direction")==="ltr"){if(r.right<=0)return!0}else{const a=Math.max(document.documentElement.scrollWidth,Jr().width);if(r.left>=a)return!0}return!1}function os(e){return["style","script","noscript","template"].includes(w(e))}function ss(e){return w(e)==="area"?!1:y(e).getPropertyValue("display")==="none"}function ls(e){const t=y(e);return["hidden","collapse"].includes(t.getPropertyValue("visibility"))}function us(e){return k(e,"aria-hidden")==="true"}function cs(e){return e.getPropertyValue("opacity")==="0"}function ds(e,t){const r=He(e),n=parseInt(t.getPropertyValue("width")),a=parseInt(t.getPropertyValue("height"));return r!==null&&(a===0||n===0)}function hs(e){const t=parseInt(e.getPropertyValue("width"));return(parseInt(e.getPropertyValue("height"))<2||t<2)&&e.getPropertyValue("position")==="absolute"&&e.getPropertyValue("overflow")==="hidden"}function ps(e){if(["fixed","absolute"].includes(e.getPropertyValue("position"))){const n=/rect\\s*\\(([0-9]+)px,?\\s*([0-9]+)px,?\\s*([0-9]+)px,?\\s*([0-9]+)px\\s*\\)/,a=e.getPropertyValue("clip").match(n);if(a&&a.length===5){const i=a.map(o=>parseInt(o));return i[3]-i[1]<=0&&i[2]-i[4]<=0}}const t=/(\\w+)\\((\\d+)/,r=e.getPropertyValue("clip-path").match(t);if(r){const n=r[1],a=parseInt(r[2],10);switch(n){case"inset":return a>=50;case"circle":return a===0}}return!1}function Gr(e,t){const r=e.closest("map");if(!r)return!0;const n=r.getAttribute("name");if(!n)return!0;const a=oe(r);if(!a||a.nodeType!==Node.DOCUMENT_NODE)return!0;const i=document.querySelectorAll('img[usemap="#'+n+'"]');return!i||!i.length?!0:Array.from(i).some(o=>t(o))}function P(e,t=!1){if(e instanceof HTMLAreaElement&&w(e)==="area")return!Gr(e,P);if(!Qe(e,{skipAncestors:!0,isAncestor:t}))return!1;if(b(e)){const r=y(e);if(cs(r)||ds(e,r)||hs(r)||ps(r)||Mr(e,r))return!1}return e.parentNode?P(e.parentNode,!0):!0}function F(e,t=!1){return et(e,{skipAncestors:!0,isAncestor:t})||b(e)&&us(e)?!1:e instanceof HTMLAreaElement&&w(e)==="area"?!Gr(e,F):Qe(e,{skipAncestors:!0,isAncestor:t})?!e.parentNode||q(e)?!0:P(e.parentNode,!0):!1}function Qe(e,{isAncestor:t=!1,skipAncestors:r}={}){let n=e;for(;n;){if(b(e)&&(os(e)||ss(e)||ls(e)))return!1;r?n=null:(t=!0,n=n.parentNode)}return!0}function ms(e,t){const r=W(e),n=W(t);return r.left>=n.right||r.right<=n.left||r.top>=n.bottom||r.bottom<=n.top?!1:on(e,t)>0}function fs(e,t){if(t===void 0&&(t=k(e,"autocomplete")),!t)return!1;const r=w(e);if(!["textarea","input","select"].includes(r)||r==="input"&&["submit","reset","button","hidden"].includes(k(e,"type"))||Ee(e))return!1;const a=C(e),i=_(e,"tabindex");if(a&&i===-1){const o=G(a);if((o==null?void 0:o.type)!=="widget")return!1}return!(i===-1&&!P(e)&&!F(e))}function Ft(e){const t=k(e,"contenteditable");if(t==="true"||t==="")return!0;if(t==="false")return!1;const r=M(e,"[contenteditable]");return r?Ft(r):!1}function Lr(e){return!b(e)||e.namespaceURI==="http://www.w3.org/2000/svg"?!1:Gl(e)}const kt={};let It;function gs(){return It||(It=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})),It}function Wt(e,t=.15,r=3){var X,We;const n=gs();if(!n)return!1;const a=b(e)?e:null,i=a||e.parentElement;if(!i)return!1;const o=window.getComputedStyle(i).getPropertyValue("font-family");kt[o]||(kt[o]={occurrences:0,occurrencesAsIconLigature:0});const s=kt[o];if(s.occurrences>=r){if(s.occurrencesAsIconLigature/s.occurrences===1)return!0;if(s.occurrencesAsIconLigature===0)return!1}s.occurrences++;let l=((X=a?a.textContent:e.nodeValue)==null?void 0:X.trim())||"";if(a&&!l){const H=["::before","::after"];for(const De of H){const he=y(a,De),xe=(We=he==null?void 0:he.content)==null?void 0:We.trim().replace(/^['"\`]|['"\`]$/g,"");if(xe&&xe!=="none"){if(jo(xe))return s.occurrencesAsIconLigature++,!0;l=xe;break}}}if(!l||!E(l)||Fr(l,{punctuations:!1}))return!1;let u=30,c=\`\${u}px \${o}\`;const p=n.canvas;n.font=c;const A=l.charAt(0);let D=n.measureText(A).width||1;if(D<30){const H=30/D;D*=H,u*=H,c=\`\${u}px \${o}\`}p.width=D,p.height=u,n.font=c,n.textAlign="left",n.textBaseline="top",n.fillText(A,0,0);const N=new Uint32Array(n.getImageData(0,0,D,u).data.buffer);if(!N.some(H=>H))return s.occurrencesAsIconLigature++,!0;n.clearRect(0,0,D,u),n.fillText(l,0,0);const x=new Uint32Array(n.getImageData(0,0,D,u).data.buffer),R=N.reduce((H,De,he)=>De===0&&x[he]===0||De!==0&&x[he]!==0?H:++H,0),ue=l.split("").reduce((H,De)=>H+n.measureText(De).width,0),B=n.measureText(l).width,Ae=R/N.length,ht=1-B/ue;return Ae>=t&&ht>=t?(s.occurrencesAsIconLigature++,!0):!1}function ws(e){return Wt(e)||b(e)&&bs(e)}function bs(e){for(const t of e.childNodes)if(!b(t)||w(t)!=="svg")return!1;return!0}let xt;function Fe(e){return V(e,"id")?(xt||(xt=Object.keys(lo(["idref","idref-list"]))),xt.some(t=>{var r;return(r=ke(e,t))==null?void 0:r.length})):!1}const As=["block","list-item","table","flex","grid","inline-block"],Pr=e=>{const t=y(e).getPropertyValue("display");return As.includes(t)||t.startsWith("table-")},Ds=e=>{let t=L(e);for(;t&&b(t)&&!Pr(t);)t=L(t);return t};function Br(e,{noLengthCompare:t}={}){if(Pr(e))return!1;const r=Ds(e);let n="",a="",i=0;return r&&Hr(r,o=>{if(i===2)return!1;if(o.nodeType===3&&(n+=o.nodeValue),!b(o))return;const s=w(e);if(o===e&&(i=1),["br","hr"].includes(s))i===0?(n="",a=""):i=2;else{if(o.style.display==="none"||o.style.overflow==="hidden"||!["",null,"none"].includes(o.style.float)||!["",null,"relative"].includes(o.style.position))return!1;if($(o)==="widget")return a+=o.textContent,!1}}),n=E(n),t?n.length!==0:(a=E(a),n.length>a.length)}function Hr(e,t){t(e)!==!1&&j(e).forEach(r=>Hr(r,t))}function ys(e){var r;if(!((r=e==null?void 0:e.ownerDocument)!=null&&r.createRange))return!0;const t=e.ownerDocument.createRange();return t.getClientRects?(t.setStart(e,0),t.setEnd(e,e.childNodes.length),t.getClientRects().length===0):!0}function q(e){if(b(e)){if(vs(e))return!1;if(Or(e))return!0}else return!1;return _(e,"tabindex")!==null}function vs(e){var r;if(et(e)||Gn(e)&&e.hasAttribute("disabled"))return!0;const t=e.closest("fieldset");return!!(t&&t.hasAttribute("disabled")&&((r=e.closest("legend"))==null?void 0:r.closest("fieldset"))!==t||w(e)!=="area"&&Et(e))}function et(e,{skipAncestors:t,isAncestor:r}={}){if(b(e)&&e.hasAttribute("inert"))return!0;if(!r){const n=ul();if(n&&!n.contains(e))return!0}if(!t){const n=L(e);if(n)return et(n,{skipAncestors:t,isAncestor:!0})}return!1}function Or(e){var t;return!!((t=te(e))!=null&&t.focusable)}function K(e){return!b(e)||parseInt(k(e,"tabindex"),10)<=-1?!1:q(e)}function Vr(e){return m(e,"track").some(r=>(r.getAttribute("kind")||"").toLowerCase()==="captions")}function qt(e){return!!Z(e,"controls")}function z(e,t=!1){return t&&(e=e.trim().toLowerCase()),e==="presentation"||e==="none"}function zr(e){if(["iframe","frame"].includes(w(e))&&(xr(e,"title")||vt(e))){const r=C(e);if(r&&z(r))return!1}const t=v(e);return!!t&&z(t)}function Ur(e){return e.indexOf("doc-")===0}function Be(e,t={}){const r=G(e);return!(!r||!t.allowAbstract&&r.type==="abstract")}const Cs=(e,t,r)=>{if(t===(r||dt(e)))return!1;const n=te(e);if(n&&n.allowedRoles)return n.allowedRoles.includes(t)},Ts=["input","select","textarea"],Rs=["hidden","range","color","checkbox","radio","image"];function _r(e){const t=w(e);if(t==="option"||t==="select"&&!e.options.length||t==="input"&&Rs.includes(k(e,"type"))||Ee(e)||et(e))return!1;if(Ts.includes(t)){const l=y(e),u=parseInt(l.getPropertyValue("text-indent"),10);if(u){const c=W(e);if(!Qr({top:c.top,bottom:c.bottom,left:c.left+u,right:c.right+u},e))return!1}return!0}const r=M(e,"label");if(t==="label"||r){const l=r||e,u=l.htmlFor;if(u){const A=oe(l).getElementById(u);if(A&&Ee(A))return!1}return!m(e,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea').some(p=>Ee(p))}const n=[];let a=e;for(;a;)a.id&&n.push(...ke(a,"aria-labelledby")||[]),a=a.parentElement;if(n.length>0&&n.every(Ee))return!1;const i=be(e);if(!i||!Me(i,{nonBmp:!1}))return!1;const o=document.createRange();j(e).forEach(l=>{ae(l,{allowEmpty:!1})&&o.selectNodeContents(l)});const s=o.getClientRects();for(let l=0;l<s.length;l++)if(Qr(s[l],e))return!0;return!1}function Nt(e,t){if(!P(e))return!1;const s=be(e,{noRecursion:!0});if(kr(s,{nonBmp:!0}))return!1;const l=y(e),u=parseFloat(l.getPropertyValue("font-size")),c=l.getPropertyValue("font-weight"),p=parseFloat(c)>=700||c==="bold",A=Math.ceil(u*72)/96,D=p&&A<14||!p&&A<18,{expected:N,minThreshold:x,maxThreshold:R}=D?t.contrastRatioNormal:t.contrastRatioLarge;if(tl(e,.25))return!1;const B=Ar(e,[],.2),Ae=Co(e,B,.3),ht=wt(e,.001,.2);let X=null,We=null;if(ht.length===0)X=$e(B,Ae);else if(Ae&&B){We=[...ht,B].reduce(gr);const cd=Number($e(B,Ae)),dd=Number($e(B,We)),hd=Number($e(We,Ae));X=Math.max(cd,dd,hd)}const H=typeof X=="number"&&X<N;if(typeof x=="number"&&(typeof X!="number"||X<x)||typeof R=="number"&&(typeof X!="number"||X>R))return!0;const he=Math.floor(Number(X)*100)/100===1,xe=s.length===1;return Ae===null||B===null||he||xe&&H?(Q.clear(),!1):H}function St(e,t){const{cssProperty:r,minValue:n,maxValue:a,normalValue:i=0,noImportant:o,multiLineOnly:s}=t;if(!o&&e.style.getPropertyPriority(r)!=="important"||s&&!ol(e))return!0;const l=e.style.getPropertyValue(r);if(["inherit","unset","revert","revert-layer"].includes(l))return!0;const u=Es(e,r,i);if(typeof u=="number")return(typeof n!="number"||u>=n)&&(typeof a!="number"||u<=a)}function Es(e,t,r){const n=y(e),a=n.getPropertyValue(t);if(a==="normal")return r;const i=parseFloat(a),o=parseFloat(n.getPropertyValue("font-size")),s=Math.round(i/o*100)/100;return isNaN(s)?a:s}const Fs=.05;function ks(e,{minOffset:t=24}={}){const r=[];for(const n of An(e,t))$(n)!=="widget"||!q(n)||Math.round(No(e,n)*10)/10+Fs>=t||r.push(n);if(r.length===0)return!0;if(r.some(K))return K(e)?!1:void 0}const jr=.05;function Is(e,{minSize:t=24}={}){const r=W(e),n=Mt.bind(null,t),a=An(e),i=Ws(e,a),{fullyObscuringElms:o,partialObscuringElms:s}=xs(e,a);if(o.length&&!i.length)return!0;const l=K(e)?!1:void 0;if(!n(r)&&!i.length)return l;const u=Ss(s),c=qs(e,u,t);if(!(i.length&&(o.length||!n(c||r))))return u.length!==0&&c&&!n(c)?u.every(K)?l:void 0:!0}function Ws(e,t){return t.filter(r=>!$r(r,e)&&Xr(e,r))}function xs(e,t){const r=[],n=[];for(const a of t)!Xr(e,a)&&ms(e,a)&&Ms(a)!=="none"&&($r(e,a)?r.push(a):n.push(a));return{fullyObscuringElms:r,partialObscuringElms:n}}function qs(e,t,r){const n=W(e);if(t.length===0)return null;const a=t.map(o=>W(o)),i=Bo(n,a);return Ns(i,r)}function Ns(e,t){return e.reduce((r,n)=>{const a=Mt(t,r),i=Mt(t,n);if(a!==i)return a?r:n;const o=r.width*r.height,s=n.width*n.height;return o>s?r:n})}function Ss(e){return e.filter(t=>$(t)==="widget"&&q(t))}function $r(e,t){const r=W(e),n=W(t);return r.top>=n.top&&r.left>=n.left&&r.bottom<=n.bottom&&r.right<=n.right}function Ms(e){return y(e).getPropertyValue("pointer-events")}function Xr(e,t){return e.contains(t)&&!K(t)}function Mt(e,{width:t,height:r}){return t+jr>=e&&r+jr>=e}function Yr(e){const t=M(e,"table"),r=t?C(t):null;return!!t&&!!r&&["grid","treegrid"].includes(r)}function Gs(e,t){if(!t&&(t=Qt(e),!t))return;const r=Ie(e);if(!r||!["col","row"].includes(r))return;const n=r==="col",a=er(e,t);if(!a)return;const i=n?{x:0,y:1}:{x:1,y:0};let o,s=!1;do{if(a.x+=i.x,a.y+=i.y,o=t[a.y]?t[a.y][a.x]:null,!o)continue;const l=En(o,t);l===void 0&&(s=!0);const u=Ie(o);if((!u||n&&u==="row"||!n&&u==="col")&&(l!=null&&l.includes(e)))return!0}while(o);return s?void 0:!1}function Gt(e){const t=M(e,"table"),r=t?C(t):null;return!!t&&(!r||r==="table")}function Lt(e){var r;if(!e||!e.children.length&&!((r=e.textContent)!=null&&r.trim()))return!1;const t=k(e,"role");return Be(t)?["cell","gridcell"].includes(t):w(e)==="td"}function Pt(e){const t=k(e,"role");if(z(t)&&!q(e))return!1;if(t==="grid"||t==="treegrid"||t==="table"||$(e,t)==="landmark"||Ft(e))return!0;if(k(e,"datatable")==="0")return!1;if(e.getAttribute("summary")||e.tHead||e.tFoot||e.caption||e.querySelector("colgroup"))return!0;let r=!1,n=0;if(Oe(e).some(l=>lt(l).some(u=>{if(w(u)==="th"||T(u,"scope")||T(u,"headers")||T(u,"abbr")||["columnheader","rowheader"].includes(k(u,"role"))||u.children.length===1&&w(u.children[0])==="abbr")return!0;!r&&(u.offsetWidth!==u.clientWidth||u.offsetHeight!==u.clientHeight)&&(r=!0),++n})))return!0;const a=Oe(e),i=lt(a[Math.ceil(a.length/2)]);if(a.length<2||i.length===1&&Jt(i[0])===1||e.getElementsByTagName("table").length)return!1;if(a.length>=20||i.length>=5||r)return!0;let o,s;return a.some(l=>{const u=y(l),c=u.getPropertyValue("background-color").trim();if(!o)o=c;else if(o!==c)return!0;const p=u.getPropertyValue("background-image").trim();if(!s)s=p;else if(s!==p)return!0})?!0:!(n<10||Zr(e).width>Jr().width*.95||e.querySelector("object, embed, iframe, applet"))}function Bt(e){return Ie(e)!==null}const Ls="article, aside, main, nav, section";function tt(e){return e.hasAttribute("role")||!M(e,Ls)}function Ht(e){return e.filter(t=>F(t)&&(!["header","footer"].includes(w(t))||tt(t))).length>1}function rt(e){const t=ar("landmark");let r=L(e);const n=v(e);for(;r;){let a=C(r);if(!a&&w(r)!=="form"&&(a=dt(r)),a&&t.includes(a)&&!(a==="main"&&n==="complementary"))return!1;r=L(r)}return!0}function Ps(e){const t=w(e);if(t==="header"||t==="footer")return tt(e);if(t==="section"||t==="form")return!!S(e);const r=v(e);return r?r==="region"||ar("landmark").includes(r):!1}const Bs=()=>{const e=document.documentElement,t=document.body;return{left:(e==null?void 0:e.scrollLeft)||(t==null?void 0:t.scrollLeft)||0,top:(e==null?void 0:e.scrollTop)||(t==null?void 0:t.scrollTop)||0}};function Zr(e){const t=Bs(),r=W(e);return{top:r.top+t.top,right:r.right+t.left,bottom:r.bottom+t.top,left:r.left+t.left,width:r.right-r.left,height:r.bottom-r.top}}const Kr=(e,t)=>{const r=e.getPropertyValue("overflow-"+t);return["scroll","auto"].includes(r)};function He(e,t=0){if(!b(e))return null;const r=e.scrollWidth>e.clientWidth+t,n=e.scrollHeight>e.clientHeight+t;if(!(r||n))return null;const a=y(e),i=Kr(a,"x"),o=Kr(a,"y");return r&&i||n&&o?{element:e,top:e.scrollTop,left:e.scrollLeft}:null}function Jr(){const e=document.documentElement,t=document.body;return{width:window.innerWidth||(e==null?void 0:e.clientWidth)||(t==null?void 0:t.clientWidth),height:window.innerHeight||(e==null?void 0:e.clientHeight)||(t==null?void 0:t.clientHeight)}}function Qr(e,t){const r=W(t),n=r.top,a=r.left,i={top:n-t.scrollTop,bottom:n-t.scrollTop+t.scrollHeight,left:a-t.scrollLeft,right:a-t.scrollLeft+t.scrollWidth};if(e.left>i.right&&e.left>r.right||e.top>i.bottom&&e.top>r.bottom||e.right<i.left&&e.right<r.left||e.bottom<i.top&&e.bottom<r.top)return!1;const o=y(t);return e.left>r.right||e.top>r.bottom?o.overflow==="scroll"||o.overflow==="auto"||t instanceof window.HTMLBodyElement||t instanceof window.HTMLHtmlElement:!0}let nt=!1;const Ot=200,Vt=new WeakMap,zt=new WeakMap,Ut=new WeakMap,at=new WeakMap;function it(e){return nt||_t(),Vt.get(e)}function en(e){return nt||_t(),at.get(e)}function _t(e=document.body,t,r){if(nt&&!r)return Ot;if(nt=!0,!r){const i=document.documentElement;at.set(i,[0]),t??(t=new jt),tn(t,i),He(i)&&zt.set(i,new jt(i))}const n=document.createTreeWalker(e,window.NodeFilter.SHOW_ELEMENT);let a=r?n.nextNode():n.currentNode;for(;a;){a.parentElement?r=a.parentElement:a.parentNode&&(r=ie(a.parentNode)?a.parentNode.host:a.parentNode),r&&at.set(a,Os(a,r));const i=Vs(a,r||null),o=i?zt.get(i):t;He(a)&&zt.set(a,new jt(a));const s=W(a);s.width!==0&&s.height!==0&&P(a)&&tn(o,a),Bl(a)&&a.shadowRoot&&_t(a.shadowRoot,o,a),a=n.nextNode()}return Ot}function Hs(e,t){const r=y(e),n=r.getPropertyValue("z-index"),a=r.getPropertyValue("position");if(a==="fixed"||a==="sticky"||n!=="auto"&&a!=="static"||r.getPropertyValue("opacity")!=="1"||(r.getPropertyValue("-webkit-transform")||r.getPropertyValue("-ms-transform")||r.getPropertyValue("transform")||"none")!=="none")return!0;const o=r.getPropertyValue("mix-blend-mode");if(o&&o!=="normal")return!0;const s=r.getPropertyValue("filter");if(s&&s!=="none")return!0;const l=r.getPropertyValue("perspective");if(l&&l!=="none")return!0;const u=r.getPropertyValue("clip-path");if(u&&u!=="none"||(r.getPropertyValue("-webkit-mask")||r.getPropertyValue("mask")||"none")!=="none"||(r.getPropertyValue("-webkit-mask-image")||r.getPropertyValue("mask-image")||"none")!=="none"||(r.getPropertyValue("-webkit-mask-border")||r.getPropertyValue("mask-border")||"none")!=="none"||r.getPropertyValue("isolation")==="isolate")return!0;const D=r.getPropertyValue("will-change");if(D==="transform"||D==="opacity"||r.getPropertyValue("-webkit-overflow-scrolling")==="touch")return!0;const N=r.getPropertyValue("contain");if(["layout","paint","strict","content"].includes(N))return!0;if(n!=="auto"&&t){const R=y(t).getPropertyValue("display");if(["flex","inline-flex","inline flex","grid","inline-grid","inline grid"].includes(R))return!0}return!1}function Os(e,t){const r=at.get(t).slice(),n=y(e),a=n.getPropertyValue("z-index"),i=n.getPropertyValue("float")!=="none",o=n.getPropertyValue("position")!=="static";if(o&&!["auto","0"].includes(a)){for(;r.find(s=>s%1!==0);){const s=r.findIndex(l=>l%1!==0);r.splice(s,1)}r[r.length-1]=parseInt(a)}return Hs(e,t)?r.push(0):o?r.push(.5):i&&r.push(.25),r}function Vs(e,t){const r=[e];let n=t,a=null;for(;n;){if(He(n)){a=n;break}if(Ut.has(n)){a=Ut.get(n);break}r.push(n),n=n.parentElement||n.parentNode}return r.forEach(i=>Ut.set(i,a)),a}function tn(e,t){Array.from(t.getClientRects()).forEach(r=>{Vt.has(t)||Vt.set(t,e);const n=e.getGridPositionOfRect(r);e.loopGridPosition(n,a=>{a.includes(t)||a.push(t)})})}class jt{constructor(t){Y(this,"cells");Y(this,"container");Y(this,"boundaries");Y(this,"negativeIndex");this.cells=[],this.container=t||null,this.boundaries=null,this.negativeIndex=new WeakMap}toGridIndex(t){return Math.floor(t/Ot)}getCellFromPoint({x:t,y:r}){if(this.boundaries){const n=this.toGridIndex(r),a=this.toGridIndex(t);if(Rr({y:n,x:a},this.boundaries)){const i=this.negativeIndex.get(this.cells)||0,o=this.cells[n-i]??[],s=this.negativeIndex.get(o)||0;return o[a-s]??[]}}}loopGridPosition(t,r){const{left:n,right:a,top:i,bottom:o}=t;this.boundaries&&(t=Io(this.boundaries,t)),this.boundaries=t,this.loopNegativeIndexMatrix(this.cells,i,o,s=>{this.loopNegativeIndexMatrix(s,n,a,l=>{r(l)})})}getGridPositionOfRect({top:t,right:r,bottom:n,left:a},i=0){return t=this.toGridIndex(t-i),r=this.toGridIndex(r+i-1),n=this.toGridIndex(n+i-1),a=this.toGridIndex(a-i),new window.DOMRect(a,t,r-a,n-t)}loopNegativeIndexMatrix(t,r,n,a){let i=this.negativeIndex.get(t)||0;if(r<i){for(let l=0;l<i-r;l++)t.splice(0,0,[]);this.negativeIndex.set(t,r),i=r}const o=r-i,s=n-i;for(let l=o;l<=s;l++)t[l]??(t[l]=[]),a(t[l],l+i)}}function rn(e){const t=e instanceof Document?e.body:e,r=nn(),n=[];if(b(t)&&!t.children)return[];function a(i,o){const s=r.get(i);o||(o=(s==null?void 0:s.frame)&&t.contains(s.frame)),o&&n.push(i),s!=null&&s.childDocuments&&(s==null||s.childDocuments.forEach(l=>{a(l,o)}))}return a(document),n}function zs(e){var r;return((r=nn().get(e))==null?void 0:r.frame)||null}function nn(){const e="frameMap";return ce.exist(e)||ce.set(e,()=>{const t=new WeakMap;function r(n,a){const i=n.querySelectorAll("iframe"),o=[];i.forEach(l=>{l.contentDocument&&(r(l.contentDocument,l),o.push(l.contentDocument))});const s={};a&&(s.frame=a),o.length&&(s.childDocuments=o),t.set(n,s)}return r(document),t}),ce.get(e)}function j(e){var r,n,a;const t=Array.from(e.childNodes);if(b(e)&&((r=e.shadowRoot)!=null&&r.childNodes.length)&&t.push(...(n=e.shadowRoot)==null?void 0:n.childNodes),ts(e)){const i=(a=e==null?void 0:e.contentDocument)==null?void 0:a.children;i!=null&&i.length&&t.push(...i)}return t.reduce((i,o)=>{if(i.push(o),o instanceof HTMLSlotElement){const s=o.assignedNodes({flatten:!0});s.length>0&&i.push(...s)}return i},[])}function M(e,t,r={}){let n=null;const a=r.includeGivenElement?e:e.parentElement;if(typeof t=="string")n=(a==null?void 0:a.closest(t))||null;else for(n=a;n&&!t(n);)n=n.parentElement;if(n)return n;const i=e.getRootNode();return ie(i)?M(i.host,t,r):null}function L(e){if(b(e)&&e.assignedSlot)return L(e.assignedSlot);if(e.parentNode){const t=e.parentNode;if(b(t))return t;if(ie(t)&&t.host)return t.host}return null}function oe(e,t){const r=e.getRootNode(t);return r===e?document:ie(r)||r.nodeType===Node.DOCUMENT_FRAGMENT_NODE?r:document}function an(e){const t=e instanceof Document?e.body:e;return b(t)&&!t.children?[]:Us().filter(r=>{let n=!1,a=r;for(;!n&&ie(a);)n=t.contains(a.host),n||(a=oe(a.host));return n})}function Us(){const e="shadowRoots";return ce.exist(e)||ce.set(e,()=>{var a,i;const t=[];let r=[document.body],n;for(;n=r.shift();)(a=n.children)!=null&&a.length&&(r=[...Array.from(n.children),...r]),n.shadowRoot&&(t.push(n.shadowRoot),(i=n.shadowRoot.children)!=null&&i.length&&(r=[...Array.from(n.shadowRoot.children),...r]));return t}),ce.get(e)}function $t(e,t){if(e===t)return 0;const r=se(e),n=se(t);if(r===document.documentElement&&n===document.documentElement)return e.compareDocumentPosition(t)&4?-1:1;{let a=r===document.documentElement,i=n===document.documentElement;const o=a?[e]:[r],s=i?[t]:[n];let l=mr(o),u=mr(s);for(;!(a&&i)&&!o.includes(u)&&!s.includes(l);){let p;a||(p=se(l),a=p===document.documentElement,a||(l=p,o.push(p))),i||(p=se(u),i=p===document.documentElement,i||(u=p,s.push(p)))}const c=l===u;return!c&&o.includes(u)?-1:!c&&s.includes(l)?1:l.compareDocumentPosition(u)&4?-1:1}}function on(e,t){var x;const r=en(e),n=en(t),a=Math.max(r.length,n.length);for(let R=0;R<a;R++){if(typeof n[R]>"u")return-1;if(typeof r[R]>"u"||n[R]>r[R])return 1;if(n[R]<r[R])return-1}let i=e,o=t;if(i.getRootNode&&i.getRootNode()!==o.getRootNode()){const R=[];for(;i;)R.push({root:i.getRootNode(),node:i}),i=i.getRootNode().host;for(;o&&!R.find(ue=>ue.root===o.getRootNode());)o=o.getRootNode().host;if(i=(x=R.find(ue=>ue.root===o.getRootNode()))==null?void 0:x.node,i===o)return e.getRootNode()!==i.getRootNode()?-1:1}const{DOCUMENT_POSITION_FOLLOWING:s,DOCUMENT_POSITION_CONTAINS:l,DOCUMENT_POSITION_CONTAINED_BY:u}=window.Node,c=i.compareDocumentPosition(o),p=c&&s?1:-1,A=c&l||c&u,D=sn(e),N=sn(t);return D===N||A?p:N-D}function sn(e){return y(e).getPropertyValue("display").indexOf("inline")!==-1?2:ln(e)?1:0}function ln(e){return e?y(e).getPropertyValue("float")!=="none"?!0:ln(e.parentElement):!1}const _s=(e,t,r)=>typeof e=="string"&&e in js&&t instanceof Document&&Object.keys(r).length===0,js={"*":"*",table:"table",img:"img","a[href], [role=link]":"a[href], [role=link]",'[id]:not([id=""])':'[id]:not([id=""])',"iframe, frame":"iframe, frame","[role]":"[role]"};function m(e,t,r={}){var u,c;const n=Ne.get("selectorsCache",()=>new Map),a=(u=On.get("ignoreSelectors"))==null?void 0:u.join(),i=_s(t,e,r);if(i&&n.has(e)){const p=n.get(e);if(p&&p[t])return p[t]}function o(p){return(!r.excludeRoot||w(p)==="body")&&(r.includeScreenReaderHidden||F(p))}const s=$s(e,a),l=[];if(typeof t=="string")for(const p of s)b(p)&&o(p)&&p.matches(t)&&l.push(p),((c=Array.from(p==null?void 0:p.querySelectorAll(t)))==null?void 0:c.filter(D=>!un(D,a))).forEach(D=>{(r.includeScreenReaderHidden||F(D))&&l.push(D)});else for(const p of s){b(p)&&o(p)&&t(p)&&l.push(p);let A=Array.from(p.children),D;for(;D=A.shift();)a&&D.matches(a)||(t(D)&&(r.includeScreenReaderHidden||F(D))&&l.push(D),D.children.length&&(A=[...Array.from(D.children),...A]))}if(r.keepElementOrder&&l.sort($t),i)if(n.has(e)){const p=n.get(e);p[t]=l}else n.set(e,{[t]:l});return l}function $s(e,t){const r=e instanceof Document?e.body:e;return[r,...an(r),...rn(r).map(a=>a.body)].filter(a=>!un(a,t))}function un(e,t){return t&&b(e)&&e.closest(t)!==null}function Xt(e,t,r){const n={};let a=\`[\${e}]\`;return typeof t=="string"&&(a=\`\${t}[\${e}]\`),m((r==null?void 0:r.root)||document,a,{includeScreenReaderHidden:!0}).forEach(o=>{const s=T(o,e);r!=null&&r.disallowEmptyAttr&&!s||typeof t=="function"&&!t(o)||(n[s]?n[s].push(o):n[s]=[o])}),n}function se(e){const t=e.getRootNode&&e.getRootNode()||null;if(t){if(ie(t))return t.host;if(t.nodeType===Node.DOCUMENT_NODE){const r=zs(t);if(r)return r}else if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.parentElement)return t.parentElement}return document.documentElement}function Yt({elements:e}={}){const t=e||m(document,'[id]:not([id=""])',{includeScreenReaderHidden:!0}),r=new Map;t.forEach(n=>{const a=se(n),i=r.get(a)||{},o=V(n,"id");i[o]?i[o].push(n):i[o]=[n],r.set(a,i)});for(const[n,a]of r){for(const i in a)a[i].length<2&&delete a[i];Object.keys(a).length===0&&r.delete(n)}return r}const Xs=/^\\/\\#/,Ys=/^#[!/]/;function cn(e){var u;const t=e.getAttribute("href");if(!t||t==="#")return!1;if(Xs.test(t))return!0;const{hash:r,protocol:n,hostname:a,port:i,pathname:o}=e;if(Ys.test(r))return!1;if(t.charAt(0)==="#")return!0;if(typeof((u=window.location)==null?void 0:u.origin)!="string"||window.location.origin.indexOf("://")===-1)return null;const s=window.location.origin+window.location.pathname;let l;return a?l=\`\${n}//\${a}\${i?\`:\${i}\`:""}\`:l=window.location.origin,o?l+=(o[0]!=="/"?"/":"")+o:l+=window.location.pathname,l===s}function dn(e,t){let r=e.getAttribute(t);if(!r||t==="href"&&!cn(e))return null;r.includes("#")&&(r=decodeURIComponent(r.substring(r.indexOf("#")+1)));const n=document.getElementById(r);if(n)return n;const a=document.getElementsByName(r);return a.length?a[0]:null}function le(e,t){try{const r=oe(e);return yt(e,t).reduce((n,a)=>{const i=r.getElementById(a);return i&&n.push(i),n},[])}catch{throw new TypeError("Cannot resolve id references for non-DOM nodes")}}function ke(e,t){const r=V(e,"id");if(!r)return null;let n="";if(t==="for")n="idref";else{const o=ye(t);o!=null&&o.type&&(n=o.type)}let a="";switch(n){case"idref":a=\`[\${t}="\${me(r)}"]\`;break;case"idref-list":a=\`[\${t}~="\${me(r)}"]\`;break;default:return null}const i=oe(e);return Array.from(i.querySelectorAll(a))}function hn(e){const t=[];return e?(y(e).getPropertyValue("overflow")==="hidden"&&t.push(e),t.concat(hn(e.parentElement))):t}function Zs(e,t){if(!e.hasAttribute(t))return;const r=w(e);let n=e;(!["a","area"].includes(r)||e instanceof SVGElement&&e.ownerSVGElement)&&(n=document.createElement("a"),n.href=k(e,t));const a=["https:","ftps:"].includes(n.protocol)?n.protocol.replace(/s:$/,":"):n.protocol,i=/^\\//.test(n.pathname)?n.pathname:\`/\${n.pathname}\`,{pathname:o,filename:s}=Js(i);return{protocol:a,hostname:n.hostname,port:Ks(n.port),pathname:/\\/$/.test(o)?o:\`\${o}/\`,search:Qs(n.search),hash:el(n.hash),filename:s}}function Ks(e){return["443","80"].includes(e)?"":e}function Js(e){const t=e.split("/").pop();return!t||t.indexOf(".")===-1?{pathname:e,filename:""}:{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}}function Qs(e){const t={};if(!e||!e.length)return t;const r=e.substring(1).split("&");if(!r||!r.length)return t;for(let n=0;n<r.length;n++){const a=r[n],[i,o=""]=a.split("=");t[decodeURIComponent(i)]=o}return t}function el(e){if(!e)return"";const t=/#!?\\/?/g,r=e.match(t);if(!r)return"";const[n]=r;return n==="#"?"":e}function ot(e){const t=j(e);if(b(e)){const r=Fn(e);r.length&&t.push(...r)}return t}function pn(e){const t=/^([0-9.]+)([a-z]+)$/i,[,r="",n=""]=e.match(t)||[];return{value:parseFloat(r),unit:n.toLowerCase()}}function mn(e,t){const r=y(e,t);if(r.getPropertyValue("content")==="none"||r.getPropertyValue("display")==="none"||r.getPropertyValue("visibility")==="hidden"||r.getPropertyValue("position")==="position"||Se(r).alpha===0&&r.getPropertyValue("background-image")==="none")return 0;const n=pn(r.getPropertyValue("width")),a=pn(r.getPropertyValue("height"));return n.unit!=="px"||a.unit!=="px"?n.value===0||a.value===0?0:1/0:n.value*a.value}function tl(e,t){const r=W(e),n=r.width*r.height*t;do{const a=mn(e,":before"),i=mn(e,":after");if(a+i>n)return e}while(e=e.parentElement)}function fn(e,t,r=!1){const n=Tr(t),a=e.getCellFromPoint(n)||[],i=Math.floor(n.x),o=Math.floor(n.y);let s=a.filter(u=>Array.from(u.getClientRects()).some(c=>{const p=c.left,A=c.top;return i<Math.floor(p+c.width)&&i>=Math.floor(p)&&o<Math.floor(A+c.height)&&o>=Math.floor(A)}));const l=e.container;if(l){const u=it(l),c=W(l);s=fn(u,c,!0).concat(s)}return r||(s=mt(s,on).concat(document.documentElement).filter((u,c,p)=>p.indexOf(u)===c)),s}function gn(e){const t=["[tabindex]",...Ml("focusable")].join(","),r=m(e,t);return e.matches(t)&&r.unshift(e),r.filter(n=>{const a=q(n),i=_(n,"tabindex");return i?a&&i>=0:a})}function wn(e){const t=[],r=W(e),n=hn(e);return j(e).forEach(a=>{if(!ae(a)||E(a.nodeValue)==="")return;const i=rl(a);nl(i,r)||t.push(...al(i,n))}),t.length?t:[r]}function rl(e){const t=document.createRange();return t.selectNodeContents(e),Array.from(t.getClientRects())}function nl(e,t){return e.some(r=>{const n=Tr(r);return!Rr(n,t)})}function al(e,t){const r=[];return e.forEach(n=>{if(n.width<1||n.height<1)return;const a=t.reduce((i,o)=>i&&Cr(i,W(o)),n);a&&r.push(a)}),r}function il(e){const t=it(e);return t?wn(e).map(n=>fn(t,n)):[]}function ol(e,t=2){const r=e.ownerDocument.createRange();r.setStart(e,0),r.setEnd(e,e.childNodes.length);let n=0,a=0;for(const i of r.getClientRects())if(!(i.height<=t))if(n>i.top+t)n=Math.max(n,i.bottom);else if(a===0)n=i.bottom,a++;else return!0;return!1}let st;function bn(e){return e.href?(st===void 0&&(st=sl()),st===null?!0:e.compareDocumentPosition(st)===e.DOCUMENT_POSITION_FOLLOWING):!1}function sl(){let e;return window.location.origin?e=[...document.querySelectorAll('a[href]:not([href^="javascript:"])')].find(t=>!cn(t)):e=[...document.querySelectorAll('a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')][0],e||null}function An(e,t=0){var s;const r=it(e);if(!((s=r==null?void 0:r.cells)!=null&&s.length))return[];const n=W(e),a=Zt(e),i=r.getGridPositionOfRect(n,t),o=[];return r.loopGridPosition(i,l=>{for(const u of l)u&&u!==e&&!l.includes(u)&&a===Zt(u)&&l.push(u)}),o}const Zt=e=>e?y(e).getPropertyValue("position")==="fixed"?!0:Zt(e.parentElement):!1;function ll(e){return K(e)&&!Or(e)}function W(e){const t=Ne.get("get-bounding-client-rect",()=>new Map);if(t.has(e))return t.get(e);const r=e.getBoundingClientRect();return t.set(e,r),r}function ul(){const e=Array.from(document.querySelectorAll("dialog[open]")).filter(r=>{const n=W(r);return document.elementsFromPoint(n.left+1,n.top+1).includes(r)&&P(r)});if(!e.length)return null;const t=e.find(r=>{const n=W(r);return document.elementsFromPoint(n.left-10,n.top-10).includes(r)});return t||(e.find(r=>{const{vNode:n,rect:a}=cl(r)??{};return!n||!a?!1:!document.elementsFromPoint(a.left+1,a.top+1).includes(n)})??null)}function cl(e){const t=it(document.documentElement),r=new window.DOMRect(0,0,window.innerWidth,window.innerHeight);if(t)for(let n=0;n<t.cells.length;n++){const a=t.cells[n];if(a)for(let i=0;i<a.length;i++){const o=a[i];if(o)for(let s=0;s<o.length;s++){const l=o[s],u=W(l),c=Cr(u,r);if(l.nodeName!=="HTML"&&l!==e&&window.getComputedStyle(l).getPropertyValue("pointer-events")!=="none"&&c)return{vNode:l,rect:c}}}}}function Kt(e){if(v(e)==="heading"){const t=_(e,"aria-level"),[,r]=w(e).match(/h([1-6])/)||[];if(r&&!t)return parseInt(r,10);if(!t||t<1)return r?parseInt(r,10):2;if(t)return t}return null}function Dn(e){let t;const r=dl(e.currentSrc);return r?r.length===1?t=Math.abs(e.duration-r[0]):t=Math.abs(r[1]-r[0]):t=Math.abs(e.duration-(e.currentTime||0)),t}function dl(e){const t=e.match(/#t=(.*)/);return t?t[1].split(",").map(n=>{if(n.indexOf(":")!==-1){const a=n.split(":");let i,o=0,s=1;for(;i=a.pop();)o+=s*parseInt(i,10),s*=60;return o}return parseFloat(n)}):null}function yn(e){var t;return((t=e==null?void 0:e.getAttribute("content"))==null?void 0:t.trim().split(/[;,\\s]/))||null}function vn(e){const t=yn(e);return!t||!t[0].match(/^[0-9.]+$/)?null:parseFloat(t[0])}function hl(e,t){return t.map(r=>\`[\${e}="\${r}"]\`).join(",")}function U(e){return typeof e=="string"?\`[role="\${e}"]\`:\`[role="\${e.join('"], [role="')}"]\`}function pl(e){var u;const t=" >>> ",r=["frame","iframe"],n=["html","head","body"],a=[];let i=e,o=!1,s=se(e),l=ie(i.getRootNode&&i.getRootNode());do{for(;i&&!(i.nodeType===Node.DOCUMENT_NODE||i.nodeType===Node.DOCUMENT_FRAGMENT_NODE);){const c=me(w(i)),p=b(i)&&V(i,"id"),A=p&&!/\\s/.test(p)?me(p):null,D=A&&s.querySelectorAll("#"+A).length===1,N=n.includes(c);let x="";if(D)x=\`\${r.includes(c)?c:""}#\${A}\`;else if(N)x=c;else if(b(i)){const R=!(i instanceof SVGElement)&&((u=i.className)!=null&&u.trim)&&i.className.trim()&&i.parentNode?"."+ml(i.classList):"";if(R&&!Rt(i,R))x=c+R;else if(!Rt(i,c))x=c;else{let ue=1,B=i.previousSibling;for(;B;)b(B)&&++ue,B=B.previousSibling;x=\`\${c}:nth-child(\${ue})\`}}if(x&&o&&(x=\`:host(\${x})\`,o=!1),$o(x)&&a.push(x),D||N)break;i=i.parentNode||null}if(s===document.documentElement)break;i=s,o=l,s=se(i),l=ie(i.getRootNode&&i.getRootNode()),a.push(t)}while(i);return a.reverse().reduce((c,p,A)=>(p===t?A>0&&(c+=t):(A>0&&!c.endsWith(t)&&(c+=" > "),c+=p),c),"")}function ml(e){return Array.from(e).reduce((t,r)=>{const n=me(r);return t?\`\${t}.\${n}\`:n},"")}function fl(e){const t=" >>> ",r=[];let n=e,a=se(e);do{for(;n&&!(n.nodeType===Node.DOCUMENT_NODE||n.nodeType===Node.DOCUMENT_FRAGMENT_NODE);){const i=me(w(n)),o=b(n)&&V(n,"id"),s=o&&!/\\s/.test(o)?me(o):null,l=s&&a.querySelectorAll("#"+s).length===1,u=i==="html";let c="";if(l)c=\`/*[@id="\${s}"]\`;else if(u)c=i;else if(b(n))if(!Rt(n,i))c=i;else{let p=1,A=n.previousElementSibling;for(;A;)w(A)===i&&++p,A=A.previousElementSibling;c=\`\${i}[\${p}]\`}if(c&&r.push(c),l||u)break;n=n.parentNode||null}if(a===document.documentElement)break;n=a,a=se(n),r.push(t)}while(n);return"/"+r.reverse().reduce((i,o,s)=>(o===t?s>0&&(i+=t):(i.endsWith(t)?i=i.replace(new RegExp(t+"$"),t+"/"):s>0&&(i+="/"),i+=o),i),"")}function lt(e){return Array.from(e.cells||e.querySelectorAll("th, td, "+U(["cell","columnheader","gridcell","rowheader"])))}function Jt(e){return e.colSpan||_(e,"colspan")||1}function Cn(e,t=0){const r=e.rowSpan||_(e,"rowspan")||1;return r===0?t:r}function Oe(e){return Array.from(e.rows||e.querySelectorAll('tr, [role="row"]'))}function Ve(e){const t=[],r=Oe(e);for(let n=0;n<r.length;n++){const a=r[n];t[n]=t[n]||[];const i=lt(a);for(const o of i){const s=Jt(o),l=Cn(o,r.length);let u=0;for(let c=0;c<s;++c)for(let p=n;p<l+n;++p){for(t[p]||(t[p]=[]);t[p][u];)++u;t[p][u]=o}}}return t}function Qt(e){const t=e.closest("table");return t?Ve(t):void 0}function er(e,t){if(!t&&(t=Qt(e),!t))return null;for(let r=0;r<t.length;r++)if(t[r]){const n=t[r].indexOf(e);if(n!==-1)return{x:n,y:r}}return null}function Tn(e){return Oe(e).reduce((t,r)=>(t.push(...lt(r)),t),[])}function Ie(e){const t=k(e,"scope")||k(e,"role");switch(t){case"colgroup":case"rowgroup":return t;case"col":case"columnheader":return"col";case"row":case"rowheader":return"row";case"auto":default:const r=e.closest("table"),n=r?Ve(r):[],a=er(e,n);if(a){if(n[a.y].every(i=>!Lt(i)))return"col";if(n.every(i=>!Lt(i[a.x])))return"row"}}return null}function Rn(e,t,r){const n=er(e,t);if(!n)return[];const a=r==="row",i=n.y+Cn(e)-1,o=n.x+Jt(e)-1,s=a?n.y:0,l=a?0:n.x,u=[];for(let c=i;c>=s;c--)for(let p=o;p>=l;p--){const A=t[c][p];!A||Ie(A)!==r||u.push(A)}return u.reverse()}function En(e,t){if(!t&&(t=Qt(e),!t))return[];if(e.hasAttribute("headers")){if(T(e,"headers")==="")return;const r=le(e,"headers");if(r.length)return r}return[...Rn(e,t,"row"),...Rn(e,t,"col")]}function Fn(e){return e.hasAttribute("aria-owns")?le(e,"aria-owns"):[]}function gl(e){const t=[];let r=e;for(;r;){const n=ke(r,"aria-owns");n!=null&&n.length&&t.push(...n),r=r.parentElement}return t}function S(e,t={}){return t=wl(e,t),bl(e,t)||Al(e,t)?"":[In,kn,El,yl,we,Dl,ut].reduce((a,i)=>(t.startNode===e&&(a=E(a)),a!==""?a:i(e,t)),"")}S.alreadyProcessed=(e,t)=>(t.processed=t.processed||[],t.processed.includes(e)?!0:(t.processed.push(e),!1));const wl=(e,t)=>(t.startNode||(t.startNode=e),b(e)&&t.inLabelledbyContext&&t.includeHidden===void 0&&(t.includeHidden=!F(e)),t),bl=(e,t)=>!b(e)||t.includeHidden?!1:!F(e),Al=(e,t)=>t.ignoreLigatures&&b(e)?Wt(e):!1,Dl=e=>ae(e)&&e.nodeValue?e.nodeValue:"";function kn(e){return b(e)&&e.getAttribute("aria-label")||""}function In(e,t={}){return!b(e)||t.inLabelledbyContext||t.inControlContext||!e.hasAttribute("aria-labelledby")?"":le(e,"aria-labelledby").reduce((n,a)=>{const i=S(a,{inLabelledbyContext:!0,startNode:t.startNode||a,...t});return n?n+" "+i:i},"")}const Wn={nativeTextboxValue:e=>{const t=w(e);return(t==="textarea"||t==="input"&&!["button","checkbox","color","file","hidden","image","password","radio","reset","submit"].includes(k(e,"type")))&&e.value||""},nativeSelectValue:e=>{if(w(e)!=="select")return"";const r=Array.from(e.querySelectorAll("option")),n=r.filter(a=>a.selected);return n.length||n.push(r[0]),n.map(a=>be(a)).join(" ")||""},ariaTextboxValue:e=>C(e)!=="textbox"?"":Et(e)?e.textContent??"":be(e,{screenReader:!0}),ariaListboxValue:(e,t)=>{if(C(e)!=="listbox")return"";const n=ot(e).filter(a=>b(a)&&v(a)==="option"&&k(a,"aria-selected")==="true");return n.length===0?"":S(n[0],t)},ariaComboboxValue:(e,t)=>{if(C(e)!=="combobox")return"";const n=ot(e).filter(a=>b(a)&&v(a)==="listbox");return n.length===0?"":Wn.ariaListboxValue(n[0],t)},ariaRangeValue:e=>{const t=["progressbar","scrollbar","slider","spinbutton"],r=C(e)??"";if(!t.includes(r)||!e.hasAttribute("aria-valuenow"))return"";const n=Number(e.getAttribute("aria-valuenow"));return isNaN(n)?"0":String(n)}};function yl(e,t={}){if(!b(e))return"";const r=v(e)??"";return t.startNode===e||!["textbox","scrollbar","slider","spinbutton"].includes(r)?"":Object.values(Wn).reduce((a,i)=>a||i(e,t),"")}function ge(e,t={}){var a;if(t.inControlContext||t.inLabelledbyContext||S.alreadyProcessed(e,t))return"";t.startNode||(t.startNode=e);let r=null;if(w(e)==="label")r=[e];else if(as(e)){r=ke(e,"for")||[];const i=(a=e.parentElement)==null?void 0:a.closest("label");i&&(r.push(i),r.sort($t))}const n={inControlContext:!0,...t};return(r==null?void 0:r.map(i=>S(i,n)).filter(i=>i!=="").join(" "))||""}const vl=(e,t)=>{var a;const r=v(e)??"",n=r?G(r):null;return(a=n==null?void 0:n.accessibleNameFrom)!=null&&a.includes("contents")?!0:t.strict?!1:!n||z(r)};function we(e,t={}){var n;if(!b(e))return"";t.startNode=t.startNode||e;const r=te(e);return S.alreadyProcessed(e,t)||(n=r==null?void 0:r.contentTypes)!=null&&n.includes("embedded")||!t.subtreeDescendant&&!vl(e,t)?"":(t.strict||(t.subtreeDescendant=!t.inControlContext&&!t.inLabelledbyContext),ot(e).reduce((a,i)=>{let o=S(i,t);return o?(Ll(i,"phrasing")||(o[0]!==" "&&(o+=" "),a&&a[a.length-1]!==" "&&(o=" "+o)),a+o):a},""))}const Cl=["iframe"];function ut(e){return!b(e)||!e.hasAttribute("title")||!Cl.includes(w(e))&&z(v(e)||"")?"":T(e,"title")}const ct=(e,t)=>{e=e.toLowerCase();const r=[e,w(t)].join(","),n=t.querySelector(r);return!n||w(n)!==e?"":S(n)},Tl=["svgTitleText","altText","titleText"],xn={valueText:e=>e instanceof HTMLInputElement?e.value:"",buttonDefaultText:e=>{if(e instanceof HTMLButtonElement)switch(e.type){case"submit":return"Submit";case"reset":return"Reset";default:return""}return""},tableCaptionText:ct.bind(null,"caption"),figureText:ct.bind(null,"figcaption"),svgTitleText:ct.bind(null,"title"),fieldsetLegendText:ct.bind(null,"legend"),altText:e=>e.getAttribute("alt")||"",tableSummaryText:e=>e.getAttribute("summary")||"",titleText:ut,subtreeText:we,labelText:ge,singleSpace:()=>" ",placeholderText:e=>e.getAttribute("placeholder")||""};function Rl(e,t=!1){return e.reduce((r,n)=>{if(n in xn)(!t||!Tl.includes(n))&&r.push(xn[n]);else throw new Error(\`missing native text method \${n}\`);return r},[])}function El(e,t){if(!b(e)||z(v(e)||""))return"";const r=te(e);return(r!=null&&r.namingMethods?Rl(r==null?void 0:r.namingMethods,t.ignoreNonVisibleText):[]).reduce((a,i)=>a||i(e,t),"")}const Fl=e=>\`sr:\${e.screenReader||""}:nr:\${e.noRecursion||""}\`;function be(e,t={}){const r=Ne.get("visible-text-cache",()=>new Map),n=Fl(t);if(r.has(e)){const s=r.get(e);if(s[n])return s[n]}const a=t.screenReader?F(e):P(e),i=Array.from(e.childNodes).map(s=>{const{nodeValue:l}=s;if(ae(s)){if(l&&a)return l}else if(!t.noRecursion)return be(s,{screenReader:t.screenReader})}).join(""),o=E(i);return r.set(e,{[n]:o}),o}function kl(e,t){if(!Lr(e))return[];const r=w(e);let n=dt(e);!n&&r==="header"&&(n="banner"),!n&&r==="footer"&&(n="contentinfo");const a=Il(e),i=o=>{var s;return t!=null&&t.allowImplicit&&o===n?!0:Ur(o)&&$(e,o)!==n&&!((s=G(o,e))!=null&&s.superclassRole.includes(n||""))?!1:Cs(e,o)};return a.filter(o=>!i(o))}function Il(e){return yt(e,"role").filter(t=>Be(t.toLowerCase()))}function C(e,t={}){if(!b(e))return null;const r=k(e,"role");return(t.allowFallback?fe(r):[r]).find(i=>!t.dpub&&Ur(i)?!1:Be(i,t))||null}function dt(e){if(!b(e))return null;const t=te(e);return(t==null?void 0:t.implicitRole)||null}function v(e,t={}){function r(s){if(!b(s))return null;const l=C(s,t);return l&&(!z(l)||!n(s))?l:a(s)}function n(s){return nr(s)||q(s)}function a(s){const l=dt(s);return i(s)||l||null}function i(s){const l=s.parentElement;if(!l)return null;const u=te(s);if(!(u!=null&&u.inheritsPresentationChain)||!u.inheritsPresentationChain.includes(w(l)))return null;const c=C(l,t);return c&&z(c)&&!n(l)?c:c?null:i(l)}const o=r(e);return o!==null&&t.noPresentational&&z(o)?null:o}const tr={type:"abstract",superclassRole:[],supportedAttrs:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]},rr={alert:{type:"live",superclassRole:["section"],implicitAttrs:{"aria-live":"assertive","aria-atomic":"true"},accessibleNameFrom:["author"]},alertdialog:{type:"window",superclassRole:["alert","dialog"],accessibleNameFrom:["author"],accessibleNameRequired:!0},application:{type:"structure",superclassRole:["structure"],supportedAttrs:["aria-activedescendant"],accessibleNameFrom:["author"],accessibleNameRequired:!0},article:{type:"structure",superclassRole:["document"],supportedAttrs:["aria-posinset","aria-setsize"],accessibleNameFrom:["author"]},banner:{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},button:{type:"widget",superclassRole:["command"],supportedAttrs:["aria-expanded","aria-pressed"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0,childrenPresentational:!0},cell:{type:"structure",superclassRole:["section"],requiredContextRole:["row"],supportedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan"],accessibleNameFrom:["contents","author"]},checkbox:{type:"widget",superclassRole:["input"],requiredAttrs:["aria-checked"],supportedAttrs:["aria-readonly"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0,childrenPresentational:!0,visualContent:!0},columnheader:{type:"structure",superclassRole:["cell","gridcell","sectionhead"],requiredContextRole:["row"],supportedAttrs:["aria-sort"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},combobox:{variants:{hasAriaExpanded:{selector:e=>k(e,"aria-expanded")==="true",requiredOwnedElements:["textbox","listbox","tree","grid","dialog"]}},type:"widget",superclassRole:["select"],requiredOwnedElements:["textbox"],requiredAttrs:["aria-controls","aria-expanded"],supportedAttrs:["aria-autocomplete","aria-readonly","aria-required"],implicitAttrs:{"aria-haspopup":"listbox"},accessibleNameFrom:["author"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"],accessibleNameFrom:["author"]},complementary:{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},composite:{type:"abstract",superclassRole:["widget"],supportedAttrs:["aria-activedescendant"],accessibleNameFrom:["author"]},contentinfo:{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},definition:{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},dialog:{type:"window",superclassRole:["window"],accessibleNameFrom:["author"],accessibleNameRequired:!0},directory:{type:"structure",superclassRole:["list"],accessibleNameFrom:["author"]},document:{type:"structure",superclassRole:["structure"],supportedAttrs:["aria-expanded"],accessibleNameFrom:["author"]},feed:{type:"structure",superclassRole:["list"],requiredOwnedElements:["article"],accessibleNameFrom:["author"]},figure:{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},form:{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},grid:{type:"widget",superclassRole:["composite","table"],requiredOwnedElements:["row","rowgroup"],supportedAttrs:["aria-level","aria-multiselectable","aria-readonly"],accessibleNameFrom:["author"]},gridcell:{type:"widget",superclassRole:["cell","widget"],requiredContextRole:["row"],supportedAttrs:["aria-readonly","aria-required","aria-selected"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},group:{type:"structure",superclassRole:["section"],supportedAttrs:["aria-activedescendant"],accessibleNameFrom:["author"]},heading:{type:"structure",superclassRole:["sectionhead"],requiredAttrs:["aria-level"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},img:{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"],accessibleNameRequired:!0,childrenPresentational:!0,visualContent:!0},input:{type:"abstract",superclassRole:["widget"],accessibleNameFrom:["author"]},landmark:{type:"abstract",superclassRole:["section"],accessibleNameFrom:["author"]},link:{type:"widget",superclassRole:["command"],supportedAttrs:["aria-expanded"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},list:{type:"structure",superclassRole:["section"],requiredOwnedElements:["group","listitem"],accessibleNameFrom:["author"]},listbox:{type:"widget",superclassRole:["select"],requiredOwnedElements:["option"],supportedAttrs:["aria-multiselectable","aria-readonly","aria-required"],implicitAttrs:{"aria-orientation":"vertical"},accessibleNameFrom:["author"],accessibleNameRequired:!0},listitem:{type:"structure",superclassRole:["section"],requiredContextRole:["group","list"],supportedAttrs:["aria-level","aria-posinset","aria-setsize"],accessibleNameFrom:["author"]},log:{type:"live",superclassRole:["section"],implicitAttrs:{"aria-live":"polite"},accessibleNameFrom:["author"],accessibleNameRequired:!0},main:{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},marquee:{type:"live",superclassRole:["section"],accessibleNameFrom:["author"],accessibleNameRequired:!0},math:{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"],childrenPresentational:!0},menu:{type:"widget",superclassRole:["select"],requiredOwnedElements:["group","menuitem","menuitemcheckbox","menuitemradio"],implicitAttrs:{"aria-orientation":"vertical"},accessibleNameFrom:["author"]},menubar:{type:"widget",superclassRole:["menu"],requiredOwnedElements:["group","menuitem","menuitemcheckbox","menuitemradio"],implicitAttrs:{"aria-orientation":"horizontal"},accessibleNameFrom:["author"]},menuitem:{type:"widget",superclassRole:["command"],requiredContextRole:["menu","menubar","group"],supportedAttrs:["aria-posinset","aria-setsize"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},menuitemcheckbox:{type:"widget",superclassRole:["checkbox","menuitem"],requiredContextRole:["menu","menubar"],implicitAttrs:{"aria-checked":"false"},accessibleNameFrom:["contents","author"],accessibleNameRequired:!0,childrenPresentational:!0,visualContent:!0},menuitemradio:{type:"widget",superclassRole:["menuitemcheckbox","radio"],requiredContextRole:["menu","menubar","group"],implicitAttrs:{"aria-checked":"false"},accessibleNameFrom:["contents","author"],accessibleNameRequired:!0,childrenPresentational:!0,visualContent:!0},navigation:{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},none:{type:"structure",superclassRole:["structure"]},note:{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},option:{type:"widget",superclassRole:["input"],requiredContextRole:["group","listbox"],requiredAttrs:["aria-selected"],supportedAttrs:["aria-checked","aria-posinset","aria-setsize"],implicitAttrs:{"aria-selected":"false"},accessibleNameFrom:["contents","author"],accessibleNameRequired:!0,childrenPresentational:!0},presentation:{type:"structure",superclassRole:["structure"]},progressbar:{type:"widget",superclassRole:["range"],accessibleNameFrom:["author"],accessibleNameRequired:!0,childrenPresentational:!0,visualContent:!0},radio:{type:"widget",superclassRole:["input"],requiredAttrs:["aria-checked"],supportedAttrs:["aria-posinset","aria-setsize"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0,childrenPresentational:!0,visualContent:!0},radiogroup:{type:"widget",superclassRole:["select"],requiredOwnedElements:["radio"],supportedAttrs:["aria-readonly","aria-required"],accessibleNameFrom:["author"],accessibleNameRequired:!0},range:{type:"abstract",superclassRole:["widget"],supportedAttrs:["aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],accessibleNameFrom:["author"]},region:{type:"landmark",superclassRole:["landmark"],supportedAttrs:["aria-expanded"],accessibleNameFrom:["author"],accessibleNameRequired:!0},row:{type:"structure",superclassRole:["group","widget"],requiredContextRole:["grid","rowgroup","table","treegrid"],requiredOwnedElements:["cell","columnheader","gridcell","rowheader"],supportedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected"],accessibleNameFrom:["contents","author"]},rowgroup:{type:"structure",superclassRole:["structure"],requiredContextRole:["grid","table","treegrid"],requiredOwnedElements:["row"],accessibleNameFrom:["contents","author"]},rowheader:{type:"structure",superclassRole:["cell","gridcell","sectionhead"],requiredContextRole:["row"],supportedAttrs:["aria-sort"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},scrollbar:{type:"widget",superclassRole:["range"],requiredAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuenow"],implicitAttrs:{"aria-orientation":"vertical","aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":qn},accessibleNameFrom:["author"],childrenPresentational:!0,visualContent:!0},search:{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},searchbox:{type:"widget",superclassRole:["textbox"],accessibleNameFrom:["author"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],supportedAttrs:["aria-expanded"]},sectionhead:{type:"abstract",superclassRole:["structure"],supportedAttrs:["aria-expanded"],accessibleNameFrom:["contents","author"]},select:{type:"abstract",superclassRole:["composite","group"],supportedAttrs:["aria-orientation"],accessibleNameFrom:["author"]},separator:{variants:{focusable:{selector:e=>q(e),type:"widget",superclassRole:["widget"],requiredAttrs:["aria-valuemax","aria-valuemin","aria-valuenow"],supportedAttrs:["aria-orientation","aria-valuetext"]}},type:"structure",superclassRole:["structure"],supportedAttrs:["aria-orientation"],implicitAttrs:{"aria-orientation":"horizontal","aria-valuemin":"0","aria-valuemax":"100"},accessibleNameFrom:["author"],childrenPresentational:!0},slider:{type:"widget",superclassRole:["input","range"],requiredAttrs:["aria-valuemax","aria-valuemin","aria-valuenow"],supportedAttrs:["aria-orientation","aria-readonly"],implicitAttrs:{"aria-orientation":"horizontal","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":qn},accessibleNameFrom:["author"],accessibleNameRequired:!0,childrenPresentational:!0,visualContent:!0},spinbutton:{type:"widget",superclassRole:["composite","input","range"],requiredAttrs:["aria-valuemax","aria-valuemin","aria-valuenow"],supportedAttrs:["aria-readonly","aria-required"],implicitAttrs:{"aria-valuenow":"0"},accessibleNameFrom:["author"],accessibleNameRequired:!0,visualContent:!0},status:{type:"live",superclassRole:["section"],implicitAttrs:{"aria-live":"polite","aria-atomic":"true"},accessibleNameFrom:["author"]},structure:{type:"abstract",superclassRole:["roletype"]},switch:{type:"widget",superclassRole:["checkbox"],requiredAttrs:["aria-checked"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0,childrenPresentational:!0},tab:{type:"widget",superclassRole:["sectionhead","widget"],requiredContextRole:["tablist"],supportedAttrs:["aria-posinset","aria-selected","aria-setsize"],implicitAttrs:{"aria-selected":"false"},accessibleNameFrom:["contents","author"],childrenPresentational:!0},table:{type:"structure",superclassRole:["section"],requiredOwnedElements:["rowgroup","row"],supportedAttrs:["aria-colcount","aria-rowcount"],accessibleNameFrom:["author"],accessibleNameRequired:!0},tablist:{type:"widget",superclassRole:["composite"],requiredOwnedElements:["tab"],supportedAttrs:["aria-level","aria-multiselectable","aria-orientation"],implicitAttrs:{"aria-orientation":"horizontal"},accessibleNameFrom:["author"]},tabpanel:{type:"widget",superclassRole:["section"],accessibleNameFrom:["author"],accessibleNameRequired:!0},term:{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},textbox:{type:"widget",superclassRole:["input"],supportedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],accessibleNameFrom:["author"],accessibleNameRequired:!0,visualContent:!0},timer:{type:"live",superclassRole:["status"],accessibleNameFrom:["author"],accessibleNameRequired:!0},toolbar:{type:"structure",superclassRole:["group"],supportedAttrs:["aria-orientation"],implicitAttrs:{"aria-orientation":"horizontal"},accessibleNameFrom:["author"]},tooltip:{type:"structure",superclassRole:["section"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},tree:{type:"widget",superclassRole:["select"],requiredOwnedElements:["group","treeitem"],supportedAttrs:["aria-multiselectable","aria-required"],implicitAttrs:{"aria-orientation":"vertical"},accessibleNameFrom:["author"],accessibleNameRequired:!0},treegrid:{type:"widget",superclassRole:["grid","tree"],requiredOwnedElements:["rowgroup","row"],accessibleNameFrom:["author"],accessibleNameRequired:!0},treeitem:{type:"widget",superclassRole:["listitem","option"],requiredContextRole:["group","tree"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"],supportedAttrs:["aria-expanded","aria-modal"],accessibleNameFrom:["author"]}},Wl={"doc-abstract":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-acknowledgments":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-afterword":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-appendix":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-backlink":{type:"widget",superclassRole:["link"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},"doc-biblioentry":{type:"structure",superclassRole:["listitem"],requiredContextRole:["doc-bibliography"],accessibleNameFrom:["author"],accessibleNameRequired:!0},"doc-bibliography":{type:"landmark",superclassRole:["landmark"],requiredOwnedElements:["doc-biblioentry"],accessibleNameFrom:["author"]},"doc-biblioref":{type:"widget",superclassRole:["link"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},"doc-chapter":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-colophon":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-conclusion":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-cover":{type:"structure",superclassRole:["img"],accessibleNameFrom:["author"]},"doc-credit":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-credits":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-dedication":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-endnote":{type:"structure",superclassRole:["listitem"],requiredContextRole:["doc-endnotes"],accessibleNameFrom:["author"]},"doc-endnotes":{type:"landmark",superclassRole:["landmark"],requiredOwnedElements:["doc-endnote"],accessibleNameFrom:["author"]},"doc-epigraph":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-epilogue":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-errata":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-example":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-footnote":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-foreword":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-glossary":{type:"landmark",superclassRole:["landmark"],requiredOwnedElements:["term","definition"],accessibleNameFrom:["author"]},"doc-glossref":{type:"widget",superclassRole:["link"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},"doc-index":{type:"landmark",superclassRole:["navigation"],accessibleNameFrom:["author"]},"doc-introduction":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-noteref":{type:"widget",superclassRole:["link"],accessibleNameFrom:["contents","author"],accessibleNameRequired:!0},"doc-notice":{type:"structure",superclassRole:["note"],accessibleNameFrom:["author"]},"doc-pagebreak":{variants:{focusable:{selector:q,type:"widget"}},type:"structure",superclassRole:["separator"],accessibleNameFrom:["author"],accessibleNameRequired:!0,childrenPresentational:!0},"doc-pagelist":{type:"landmark",superclassRole:["navigation"],accessibleNameFrom:["author"]},"doc-part":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"],accessibleNameRequired:!0},"doc-preface":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-prologue":{type:"landmark",superclassRole:["landmark"],accessibleNameFrom:["author"]},"doc-pullquote":{type:"structure",superclassRole:["none"],accessibleNameFrom:["author"]},"doc-qna":{type:"structure",superclassRole:["section"],accessibleNameFrom:["author"]},"doc-subtitle":{type:"structure",superclassRole:["sectionhead"],accessibleNameFrom:["author"]},"doc-tip":{type:"structure",superclassRole:["note"],accessibleNameFrom:["author"]},"doc-toc":{type:"landmark",superclassRole:["navigation"],accessibleNameFrom:["author"]}},xl={"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameFrom:["author"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],accessibleNameFrom:["contents","author"]},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameFrom:["author"],accessibleNameRequired:!0,childrenPresentational:!0}};function qn(e){const t=parseInt(e.getAttribute("aria-valuemin")||"0"),r=parseInt(e.getAttribute("aria-valuemin")||"100");return Math.floor((r-t)/2).toString()}function Nn(){return tr.supportedAttrs?[...tr.supportedAttrs]:[]}function nr(e){return b(e)&&Nn().some(t=>e.hasAttribute(t))}function ql(e,t){const r=ye(t);if(!r)return;if(r.deprecated)return!1;const n=E(T(e,t));if(r.allowEmpty&&!n)return!0;switch(r.type){case"boolean":case"boolean-undefined":case"tristate":case"token":const a=r.type==="token"?r.values:so[r.type];return a==null?void 0:a.includes(n.toLowerCase());case"token-list":const i=fe(n);return i.length>0&&i.every(l=>r.values!==void 0&&r.values.includes(l));case"idref":try{const l=oe(e);return!!(n&&l.getElementById(n))}catch{throw new TypeError("Cannot resolve id references for partial DOM")}case"idref-list":return le(e,t).some(l=>!!l);case"integer":const o=r.minValue?r.minValue:-1/0;return/^[-+]?[0-9]+$/.test(n)&&parseInt(n)>=o;case"number":const s=n.match(/^[-+]?([0-9]*)\\.?([0-9]*)$/);return!!(s&&(s[1]||s[2]));case"string":return n!=="";default:return!1}}function G(e,t){const r=rr[e]||Wl[e]||xl[e];if(!r||r.deprecated)return null;const{variants:n,...a}=r;if(!t||!n)return a;let i=null;for(const o in n){const{selector:s,...l}=n[o];if(typeof s=="string"?t.matches(s):s(t)){i=l;break}}return i?{...a,...i}:a}function Sn(e,t){var o,s,l,u;if(!t&&(t=v(e,{dpub:!0,allowAbstract:!0})||void 0,!t))return null;const r=G(t,e);if(!r)return null;const n=[t],a=[...r.superclassRole];let i;for(;i=a.pop();){if(n.includes(i))continue;n.push(i);const c=i==="roletype"?tr:G(i,e);c&&(a.push(...c.superclassRole),(o=c.requiredAttrs)!=null&&o.length&&((s=r.requiredAttrs)!=null&&s.length?r.requiredAttrs.push(...c.requiredAttrs):r.requiredAttrs=c.requiredAttrs),(l=c.supportedAttrs)!=null&&l.length&&((u=r.supportedAttrs)!=null&&u.length?r.supportedAttrs.push(...c.supportedAttrs):r.supportedAttrs=c.supportedAttrs))}return r.requiredAttrs&&(r.requiredAttrs=pt(r.requiredAttrs)),r.supportedAttrs&&(r.supportedAttrs=pt(r.supportedAttrs)),r}function $(e,t){var r;return!t&&(t=v(e,{dpub:!0,allowAbstract:!0})||void 0,!t)?null:((r=G(t,e))==null?void 0:r.type)||null}function Mn(e,t){const r=v(e)??"";if(!r)return!1;const n=G(r);return(Array.isArray(t)?t:[t]).some(a=>{var i;return(i=n==null?void 0:n.accessibleNameFrom)==null?void 0:i.includes(a)})}function ar(e){return Object.keys(rr).filter(t=>rr[t].type===e)}function Nl(e){var t;return!!((t=G(e))!=null&&t.visualContent)}const ee={a:{variants:{href:{selector:"[href]",implicitRole:"link",allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],contentTypes:["flow","phrasing","interactive"],namingMethods:["subtreeText"],focusable:!0}},implicitRole:"generic",contentTypes:["flow","phrasing"]},abbr:{contentTypes:["flow","phrasing"]},address:{implicitRole:"group",contentTypes:["flow"]},area:{variants:{href:{selector:"[href]",implicitRole:"link",allowedRoles:["link"],focusable:!0}},implicitRole:"generic",allowedRoles:["button","link","generic"],contentTypes:["flow","phrasing"],namingMethods:["altText"]},article:{implicitRole:"article",allowedRoles:["application","article","document","feed","main","none","presentation","region"],contentTypes:["flow","sectioning"],allowedShadowDom:!0},aside:{variants:{hasSectioningParent:{selector:e=>!!or(e)&&!Ye(e),implicitRole:"generic"}},implicitRole:"complementary",allowedRoles:["complementary","feed","none","note","presentation","region","search","doc-dedication","doc-example","doc-footnote","doc-pullquote","doc-tip"],contentTypes:["flow","sectioning"],allowedShadowDom:!0},audio:{variants:{controls:{selector:"[controls]",contentTypes:["flow","phrasing","embedded","interactive"]}},allowedRoles:["application"],contentTypes:["flow","phrasing","embedded"],visualContent:!0,hiddenText:!0},b:{implicitRole:"generic",contentTypes:["flow","phrasing"]},base:{allowedRoles:null,allowedAttrs:null,contentTypes:["metadata"]},bdi:{implicitRole:"generic",contentTypes:["flow","phrasing"]},bdo:{implicitRole:"generic",contentTypes:["flow","phrasing"]},blockquote:{implicitRole:"blockquote",contentTypes:["flow"],allowedShadowDom:!0},body:{implicitRole:"generic",allowedRoles:["generic"],allowedShadowDom:!0},br:{allowedRoles:["presentation","none"],allowedAttrs:["aria-hidden"],contentTypes:["flow","phrasing"],namingMethods:["titleText","singleSpace"]},button:{implicitRole:"button",contentTypes:["flow","phrasing","interactive"],allowedRoles:["button","checkbox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"],allowedDisabledAttr:!0,namingMethods:["subtreeText"],focusable:!0,visualContent:!0},canvas:{contentTypes:["flow","phrasing","embedded"],visualContent:!0},caption:{implicitRole:"caption",allowedRoles:["caption"]},cite:{contentTypes:["flow","phrasing"]},code:{implicitRole:"code",contentTypes:["flow","phrasing"]},col:{allowedRoles:null,allowedAttrs:null},colgroup:{allowedRoles:null,allowedAttrs:null},data:{implicitRole:"generic",contentTypes:["flow","phrasing"]},datalist:{implicitRole:"listbox",implicitAttrs:{"aria-multiselectable":"false"},allowedRoles:["listbox"],allowedAttrs:["aria-multiselectable"],contentTypes:["flow","phrasing"]},dd:{implicitRole:"definition",allowedRoles:null,inheritsPresentationChain:["dl","div"]},del:{implicitRole:"deletion",contentTypes:["flow","phrasing"]},details:{variants:{hasSummary:{selector:e=>!!e.querySelector("summary"),focusable:!0}},implicitRole:"group",allowedRoles:["group"],contentTypes:["flow","interactive"]},dfn:{implicitRole:"term",contentTypes:["flow","phrasing"]},dialog:{implicitRole:"dialog",allowedRoles:["dialog","alertdialog"],contentTypes:["flow"]},div:{variants:{dlChild:{selector:e=>!!e.parentElement&&w(e.parentElement)==="dl",allowedRoles:["generic","none","presentation"]}},implicitRole:"generic",contentTypes:["flow"],inheritsPresentationChain:["dl"],allowedShadowDom:!0},dl:{allowedRoles:["group","list","none","presentation"],contentTypes:["flow"]},dt:{implicitRole:"term",allowedRoles:["term","listitem"],inheritsPresentationChain:["dl","div"]},em:{implicitRole:"emphasis",contentTypes:["flow","phrasing"]},embed:{implicitRole:"group",allowedRoles:["application","document","img","group","none","presentation"],contentTypes:["flow","phrasing","embedded","interactive"]},fieldset:{implicitRole:"group",allowedRoles:["group","none","presentation","radiogroup"],allowedDisabledAttr:!0,contentTypes:["flow"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{variants:{hasFigcaption:{selector:e=>!!e.querySelector("figcaption"),allowedRoles:["figure"]}},implicitRole:"figure",contentTypes:["flow"],namingMethods:["figureText","titleText"]},footer:{variants:{hasSectioningParent:{selector:e=>!!or(e,!0),implicitRole:"generic",allowedRoles:["generic","group","none","presentation","doc-footnote"]}},implicitRole:"contentinfo",contentTypes:["flow"],allowedRoles:["contentinfo","group","none","presentation","doc-footnote"],allowedShadowDom:!0},form:{implicitRole:"form",contentTypes:["flow"],allowedRoles:["form","search","none","presentation"]},h1:{implicitRole:"heading",implicitAttrs:{"aria-level":"1"},allowedRoles:["heading","none","presentation","tab","doc-subtitle"],contentTypes:["flow","heading"],allowedShadowDom:!0},h2:{implicitRole:"heading",implicitAttrs:{"aria-level":"2"},allowedRoles:["heading","none","presentation","tab","doc-subtitle"],contentTypes:["flow","heading"],allowedShadowDom:!0},h3:{implicitRole:"heading",implicitAttrs:{"aria-level":"3"},allowedRoles:["heading","none","presentation","tab","doc-subtitle"],contentTypes:["flow","heading"],allowedShadowDom:!0},h4:{implicitRole:"heading",implicitAttrs:{"aria-level":"4"},allowedRoles:["heading","none","presentation","tab","doc-subtitle"],contentTypes:["flow","heading"],allowedShadowDom:!0},h5:{implicitRole:"heading",implicitAttrs:{"aria-level":"5"},allowedRoles:["heading","none","presentation","tab","doc-subtitle"],contentTypes:["flow","heading"],allowedShadowDom:!0},h6:{implicitRole:"heading",implicitAttrs:{"aria-level":"6"},allowedRoles:["heading","none","presentation","tab","doc-subtitle"],contentTypes:["flow","heading"],allowedShadowDom:!0},head:{allowedRoles:null,allowedAttrs:null,hiddenText:!0},header:{variants:{hasSectioningParent:{selector:e=>!!or(e,!0),implicitRole:"generic",allowedRoles:["generic","group","none","presentation","doc-footnote"]}},implicitRole:"banner",contentTypes:["flow"],allowedRoles:["banner","group","none","presentation","doc-footnote"],allowedShadowDom:!0},hgroup:{implicitRole:"generic",contentTypes:["flow","heading"]},hr:{implicitRole:"separator",allowedRoles:["none","presentation","doc-pagebreak"],contentTypes:["flow"],namingMethods:["titleText","singleSpace"]},html:{implicitRole:"document",allowedRoles:null,allowedAttrs:null},i:{implicitRole:"generic",contentTypes:["flow","phrasing"]},iframe:{allowedRoles:["application","document","img","none","presentation"],contentTypes:["flow","phrasing","embedded","interactive"],visualContent:!0,hiddenText:!0},img:{variants:{nonEmptyAlt:{selector:e=>!!T(e,"alt"),implicitRole:"img",allowedRoles:["button","checkbox","img","link","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},emptyAlt:{selector:e=>Yo(e,"alt"),implicitRole:"presentation",allowedRoles:["presentation"],allowedAttrs:["aria-hidden"]},usemap:{selector:"[usemap]",contentTypes:["flow","phrasing","embedded","interactive"]}},implicitRole:"img",allowedRoles:["img"],allowedAttrs:["aria-hidden"],contentTypes:["flow","phrasing","embedded"],namingMethods:["altText"],visualContent:!0},input:{variants:{button:{selector:'[type="button"]',implicitRole:"button",allowedRoles:["button","checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{selector:sr(["submit","reset"]),implicitRole:"button",allowedRoles:["button"],namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxAriaPressed:{selector:'[type="checkbox"][aria-pressed]',implicitRole:"checkbox",implicitAttrs:{"aria-checked":"false"},allowedRoles:["button","menuitemcheckbox","option","switch"]},checkboxNoAriaPressed:{selector:'[type="checkbox"]:not([aria-pressed])',implicitRole:"checkbox",implicitAttrs:{"aria-checked":"false"},allowedRoles:["menuitemcheckbox","option","switch"]},hidden:{selector:'[type="hidden"]',allowedRoles:null,allowedAttrs:null,contentTypes:["flow","phrasing"],focusable:!1},image:{selector:'[type="image"]',implicitRole:"button",allowedRoles:["button","link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},number:{selector:'[type="number"]',implicitRole:"spinbutton"},radio:{selector:'[type="radio"]',implicitRole:"radio",implicitAttrs:{"aria-checked":"false","aria-setsize":"1","aria-posinset":"1"},allowedRoles:["radio","menuitemradio"]},range:{selector:'[type="range"]',implicitRole:"slider",allowedRoles:["slider"]},email:{selector:e=>e.matches('[type="email"]')&&!Re(e),implicitRole:"textbox",allowedRoles:["textbox"]},search:{selector:e=>e.matches('[type="search"]')&&!Re(e),implicitRole:"searchbox",allowedRoles:["searchbox"]},tel:{selector:e=>e.matches('[type="tel"]')&&!Re(e),implicitRole:"textbox",allowedRoles:["textbox","spinbutton"]},url:{selector:e=>e.matches('[type="url"]')&&!Re(e),implicitRole:"textbox",allowedRoles:["textbox"]},hasDatalist:{selector:e=>e.matches(sr(["text","search","tel","url","email"]))&&Re(e),implicitRole:"combobox",allowedRoles:["combobox"],disallowedAttrs:["aria-haspopup"]},noRoles:{selector:sr(["color","file","password","date","datetime-local","month","week","time"]),allowedRoles:null},text:{selector:e=>e.matches('[type="text"], :not([type])')&&!Re(e)}},implicitRole:"textbox",allowedRoles:["textbox","combobox","searchbox","spinbutton"],allowedDisabledAttr:!0,contentTypes:["flow","phrasing","interactive"],namingMethods:["labelText","placeholderText"],focusable:!0,visualContent:!0},ins:{implicitRole:"insertion",contentTypes:["flow","phrasing"]},kbd:{contentTypes:["flow","phrasing"]},label:{contentTypes:["flow","phrasing","interactive"]},legend:{},li:{implicitRole:"listitem",implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"},allowedRoles:["listitem","menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem"],inheritsPresentationChain:["ol","ul"]},link:{variants:{allowedInBody:{selector:"[rel], [itemprop]",contentTypes:["metadata","flow","phrasing"]}},allowedRoles:null,allowedAttrs:null,contentTypes:["metadata"]},main:{implicitRole:"main",allowedRoles:["main"],contentTypes:["flow"],allowedShadowDom:!0},map:{allowedRoles:null,allowedAttrs:null,contentTypes:["flow","phrasing"]},mark:{implicitRole:"mark",contentTypes:["flow","phrasing"]},math:{implicitRole:"math",allowedRoles:["math"],contentTypes:["phrasing","flow","embedded"],visualContent:!0},menu:{implicitRole:"list",contentTypes:["flow"],allowedRoles:["group","list","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variants:{itemprop:{selector:"[itemprop]",contentTypes:["metadata","flow","phrasing"]}},allowedRoles:null,allowedAttrs:null,contentTypes:["metadata"]},meter:{implicitRole:"meter",allowedRoles:["meter"],disallowedAttrs:["aria-valuemax","aria-valuemin"],contentTypes:["flow","phrasing"],visualContent:!0},nav:{implicitRole:"navigation",allowedRoles:["menu","menubar","navigation","none","presentation","tablist","doc-index","doc-pagelist","doc-toc"],contentTypes:["flow","sectioning"],allowedShadowDom:!0},noscript:{contentTypes:["metadata","flow","phrasing"],allowedRoles:null,allowedAttrs:null,hiddenText:!0},object:{variants:{usemap:{selector:"[usemap]",contentTypes:["flow","phrasing","embedded","interactive"]}},allowedRoles:["application","document","img"],contentTypes:["flow","phrasing","embedded"],visualContent:!0,hiddenText:!0},ol:{implicitRole:"list",contentTypes:["flow"],allowedRoles:["group","list","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{implicitRole:"group",allowedRoles:["group"],allowedDisabledAttr:!0},option:{implicitRole:"option",implicitAttrs:{"aria-selected":"false"},allowedRoles:["option"],disallowedAttrs:["aria-selected"],allowedDisabledAttr:!0},output:{implicitRole:"status",contentTypes:["flow","phrasing"],namingMethods:["subtreeText"]},p:{implicitRole:"paragraph",contentTypes:["flow"],allowedShadowDom:!0},param:{allowedRoles:null,allowedAttrs:null},picture:{allowedRoles:null,allowedAttrs:["aria-hidden"],contentTypes:["flow","phrasing","embedded"]},pre:{implicitRole:"generic",contentTypes:["flow"]},progress:{implicitRole:"progressbar",implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"},allowedRoles:["progressbar"],disallowedAttrs:["aria-valuemax"],contentTypes:["flow","phrasing"],visualContent:!0},q:{implicitRole:"generic",contentTypes:["flow","phrasing"]},rp:{},rt:{},ruby:{contentTypes:["flow","phrasing"]},s:{implicitRole:"deletion",contentTypes:["flow","phrasing"]},samp:{implicitRole:"generic",contentTypes:["flow","phrasing"]},script:{allowedRoles:null,allowedAttrs:null,contentTypes:["metadata","flow","phrasing"],hiddenText:!0},section:{variants:{hasAriaLabel:{selector:Ye,implicitRole:"region",allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","region","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"]}},allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],contentTypes:["flow","sectioning"],allowedShadowDom:!0},select:{variants:{combobox:{selector:e=>{const t=_(e,"size");return!e.hasAttribute("multiple")&&(!t||t<=1)},implicitRole:"combobox",allowedRoles:["combobox","menu"],disallowedAttrs:["aria-multiselectable"]},listbox:{selector:e=>e.hasAttribute("multiple")||(_(e,"size")||0)>1,implicitRole:"listbox",allowedRoles:["listbox"],disallowedAttrs:["aria-multiselectable"]},hasAriaLabel:{selector:Ye,implicitRole:"region"}},implicitRole:"generic",implicitAttrs:{"aria-valuenow":""},allowedDisabledAttr:!0,contentTypes:["flow","phrasing","interactive"],namingMethods:["labelText"],focusable:!0,visualContent:!0},slot:{allowedRoles:null,allowedAttrs:null,contentTypes:["flow","phrasing"]},small:{implicitRole:"generic",allowedRoles:null,contentTypes:["flow","phrasing"]},source:{allowedRoles:null,allowedAttrs:null},span:{implicitRole:"generic",contentTypes:["flow","phrasing"],allowedShadowDom:!0},strong:{implicitRole:"strong",contentTypes:["flow","phrasing"]},style:{allowedRoles:null,allowedAttrs:null,contentTypes:["metadata"],hiddenText:!0},sub:{implicitRole:"subscript",contentTypes:["flow","phrasing"]},summary:{allowedRoles:null,namingMethods:["subtreeText"],focusable:!0},sup:{implicitRole:"superscript",contentTypes:["flow","phrasing"]},svg:{implicitRole:"graphics-document",contentTypes:["flow","phrasing","embedded"],namingMethods:["svgTitleText"],visualContent:!0},table:{implicitRole:"table",contentTypes:["flow"],namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{implicitRole:"rowgroup",inheritsPresentationChain:["table"]},td:{variants:{inTable:{selector:Gt,implicitRole:"cell",allowedRoles:["cell"]},inGrid:{selector:Yr,implicitRole:"gridcell",allowedRoles:["gridcell"]}},inheritsPresentationChain:["tr"]},template:{allowedRoles:null,allowedAttrs:null,contentTypes:["metadata","flow","phrasing"],hiddenText:!0},textarea:{implicitRole:"textbox",implicitAttrs:{"aria-multiline":"true"},allowedRoles:["textbox"],allowedDisabledAttr:!0,contentTypes:["flow","phrasing","interactive"],namingMethods:["labelText","placeholderText"],focusable:!0,visualContent:!0},tfoot:{implicitRole:"rowgroup",inheritsPresentationChain:["table"]},th:{variants:{nonHeaderInTable:{selector:e=>e instanceof HTMLTableCellElement&&!Bt(e)&&Gt(e),implicitRole:"cell",allowedRoles:["columnheader","rowheader","cell"]},nonHeaderInGrid:{selector:e=>e instanceof HTMLTableCellElement&&!Bt(e)&&Yr(e),implicitRole:"gridcell",allowedRoles:["columnheader","rowheader","gridcell"]},colHeader:{selector:e=>{const t=e instanceof HTMLTableCellElement?Ie(e):null;return!!t&&["col","colgroup"].includes(t)},implicitRole:"columnheader",allowedRoles:["columnheader"]},rowHeader:{selector:e=>{const t=e instanceof HTMLTableCellElement?Ie(e):null;return!!t&&["row","rowgroup"].includes(t)},implicitRole:"rowheader",allowedRoles:["rowheader"]}},inheritsPresentationChain:["tr"]},thead:{implicitRole:"rowgroup",inheritsPresentationChain:["table"]},time:{implicitRole:"time",contentTypes:["flow","phrasing"]},title:{allowedRoles:null,allowedAttrs:null,contentTypes:["metadata"],hiddenText:!0},tr:{variants:{inTable:{selector:Gt,allowedRoles:["row"]}},implicitRole:"row",inheritsPresentationChain:["thead","tbody","tfoot","table"]},track:{allowedRoles:null,allowedAttrs:null},u:{implicitRole:"generic",contentTypes:["flow","phrasing"]},ul:{implicitRole:"list",contentTypes:["flow"],allowedRoles:["group","list","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["flow","phrasing"]},video:{variants:{controls:{selector:"[controls]",contentTypes:["flow","phrasing","embedded","interactive"]}},allowedRoles:["application"],contentTypes:["flow","phrasing","embedded"],visualContent:!0,hiddenText:!0},wbr:{allowedRoles:["presentation","none"],allowedAttrs:["aria-hidden"],contentTypes:["flow","phrasing"]}};let ir="";function or(e,t=!1){return ir||(ir=Sl("sectioning").map(r=>\`\${r}:not([role])\`).join(", ")+", "+hl("role",["article","complementary","navigation","region"])),e.closest(ir+(t?', main:not([role]), [role="main"]':""))}function Sl(e){return Object.keys(ee).filter(t=>{const r={...ee[t]};return r.contentTypes?r.contentTypes.includes(e):!1})}function sr(e){return e.map(t=>\`[type="\${t}"]\`).join(",")}function te(e,t={}){const r=w(e),n=ee[r];if(n){if(!n.variants||t.skipMergingVariant)return n}else return null;const{variants:a,...i}=n;let o=null;for(const s in a){const{selector:l,...u}=a[s];if(typeof l=="string"?e.matches(l):l(e)){o=u;break}}return o?{...i,...o}:i}function Ml(e){return Object.keys(ee).filter(t=>{var r;if(ee[t][e]!==void 0)return!0;if(ee[t].variants){const n=(r=ee[t])==null?void 0:r.variants;for(const a in n)if(n[a][e]!==void 0)return!0}return!1})}function Gl(e){const t=w(e);return!!ee[t]}function Ll(e,t){var r,n;return b(e)?!!((n=(r=te(e))==null?void 0:r.contentTypes)!=null&&n.includes(t)):ae(e,{allowEmpty:!0})?t==="phrasing":!1}function Pl(e){var t;return!!((t=te(e))!=null&&t.visualContent)}function Gn(e){var t;return!!((t=ee[w(e)||""])!=null&&t.allowedDisabledAttr)}function Bl(e){var t;return!!((t=ee[w(e)||""])!=null&&t.allowedShadowDom)}function Ln(){return/[\\u0000-\\uFFFF]/g}function Pn(){return/[\\u1D00-\\u1D7F\\u1D80-\\u1DBF\\u1DC0-\\u1DFF\\u20A0-\\u20CF\\u20D0-\\u20FF\\u2100-\\u214F\\u2150-\\u218F\\u2190-\\u21FF\\u2200-\\u22FF\\u2300-\\u23FF\\u2400-\\u243F\\u2440-\\u245F\\u2460-\\u24FF\\u2500-\\u257F\\u2580-\\u259F\\u25A0-\\u25FF\\u2600-\\u26FF\\u2700-\\u27BF\\uE000-\\uF8FF]/g}function Bn(){return/[\\u2000-\\u206F\\u2E00-\\u2E7F\\\\'!"#$%&£¢¥§€()*+,\\-.\\/:;<=>?@\\[\\]^_\`{|}~±]/g}function Hn(){return/[\\uDB80-\\uDBBF][\\uDC00-\\uDFFF]/g}function Hl(){let e={};return{get(t){return e[t]},set(t,r){e[t]=r},reset(){e={}}}}const On=Hl();function Ol(e){const t=e?e.getAttribute("content"):null;return!e||!t?null:t.split(/[;,]/).reduce((r,n)=>{const a=n.trim();if(!a)return r;const[i,o]=a.split("=");if(!i||!o)return r;const s=i.toLowerCase().trim();let l=o.toLowerCase().trim();return s==="maximum-scale"&&l==="yes"&&(l="1"),s==="maximum-scale"&&parseFloat(l)<0||(r[s]=l),r},{})}function Vl(e,t=80){var o;const r=e.outerHTML,n=e.innerHTML||"";if(!e.childElementCount||n.length<t)return r;const i=e.lastElementChild;return r.replace(n,\`...\${(o=i==null?void 0:i.outerHTML)==null?void 0:o.replace(i.innerHTML,"")}\`)}function zl(e){const t=[e.id,e.xpath];return e.group&&t.push(e.group),String(Ul(t.join("-")))}function Ul(e,t=0){let r=3735928559^t,n=1103547991^t;for(let a=0,i;a<e.length;a++)i=e.charCodeAt(a),r=Math.imul(r^i,2654435761),n=Math.imul(n^i,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&n)+(r>>>0)}var g=(e=>(e.violation="violation",e.inapplicable="inapplicable",e.incomplete="incomplete",e))(g||{});function Vn({element:e,type:t="violation",variant:r,id:n,group:a}){const i=pl(e),o=fl(e),s=zl({id:n,xpath:o,group:a}),l={element:e,selector:i,type:t,xpath:o,fingerprint:s};return r&&(l.variant=r),l.snippet=e instanceof Element?Vl(e):"",l}function lr(e){let t=[];return{add:(r,n,a)=>{t.push(Vn({element:r,type:n,variant:a,id:e.id,group:e.group}))},set:(r,n,a)=>{t=r.map(i=>Vn({element:i,type:n,variant:a,id:e.id,group:e.group}))},get:()=>t,getCount:()=>t.length,getCountOfType:r=>t.filter(({type:n})=>n===r).length}}function _l(e){const t=new Map;let r=0;return{add:(n,a,i)=>{t.has(a)||t.set(a,lr({...e,group:a}));const o=t.get(a);o&&o.add(n,i),r++},set:(n,a,i)=>{t.has(a)||t.set(a,lr({...e,group:a}));const o=t.get(a);o&&o.set(n,i),r+=n.length},get:()=>Array.from(t.entries()).reduce((n,[a,i])=>({...n,[a]:i.get()}),{}),getCount:()=>r,getCountOfType:n=>Array.from(t.values()).reduce((a,i)=>a+i.getCountOfType(n),0)}}function jl(e,t,r){const n={reviewed:0,passed:0,violation:0,inapplicable:0,incomplete:0};return{addReviewed:(a=1)=>{n.reviewed+=a},setReviewed:a=>{n.reviewed=a},get:()=>{const a=e.getCount()+t.getCount();if(a>n.reviewed){const i=new $l(\`[\${r.id}] use addReviewed or setReviewed method of count store, or check why there are more issues than reviewed elements: { issuesCount: \${a}, "count.reviewed": \${n.reviewed} }\`);console.error(i)}n.passed=n.reviewed-a;for(const i in g)n[i]=e.getCountOfType(g[i])+t.getCountOfType(g[i]);return n}}}class $l extends Error{constructor(){super(...arguments);Y(this,"name","StoreCountMismatchError")}}const zn={};for(const e of Object.values(hr))zn[e.key]=e;var f=(e=>(e.A="A",e.AA="AA",e.AAA="AAA",e.BestPractice="Best Practice",e.Experimental="Experimental",e))(f||{});function h(e){const{analyze:t,id:r,outputType:n,actIds:a}=e,i=zn[r];if(!i)throw new Error(\`Can't find the rule descriptor for id \${e.id}\`);return{description:i.description,display:i.display,errorMessage:i.errorMessage,id:r,actIds:a,level:i.level,outputType:n,recommendation:i.recommendation,references:i.references,severity:i.severity,uwId:i.id,analyze:function(s,l){const u=lr({id:r}),c=_l({id:r}),p=jl(u,c,{id:r});return t({issues:u,count:p,issuesGroup:c,ruleSpecificOptions:s},l),{count:p.get(),issues:u.get(),issuesGroup:c.get()}}}}const Xl=h({id:"accesskeys",uwId:42,severity:10,level:f.BestPractice,outputType:"group",description:"All accesskey attribute values in a document must be unique. Put another way, accesskeys must not be repeated to prevent unexpected effects for keyboard users.",analyze(e){const t=Xt("accesskey");Object.keys(t).forEach(r=>{const n=t[r];e.count.addReviewed(n.length),n.length>1&&n.forEach(a=>{e.issuesGroup.add(a,r)})})}}),Yl=h({id:"area-alt",actIds:["c487ae"],errorHandle:{},analyze(e){const r=m(document,"map area[href]",{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{I(n,{altAttrNames:["alt","title"]})||e.issues.add(n,g.violation,n.hasAttribute("alt")?"emptyAlt":"missingAlt")})}}),Zl=h({id:"aria-allowed-attr",uwId:144,actIds:["5c01ea"],severity:1,level:f.A,description:"Not all ARIA role-attribute combinations are valid. This Rule checks that each role is supplied with allowed attributes.",analyze(e){const r=pr().map(a=>\`[\${a}]\`).join(","),n=m(document,r).filter(a=>a.getAttributeNames().length>0);e.count.setReviewed(n.length),n.forEach(a=>{const i=v(a),o=a.getAttributeNames();e1(a,i,o)?!i&&!Lr(a)&&!q(a)?e.issues.add(a,g.incomplete):e.issues.add(a):t1(a,i,o)&&(E(we(a,{subtreeDescendant:!0}))!==""?e.issues.add(a,g.incomplete):e.issues.add(a))})}}),Kl=["aria-posinset","aria-setsize","aria-expanded","aria-level"],Jl=["applet","input"],Ql=["aria-label","aria-labelledby"];function e1(e,t,r){let n=[];if(!t||!Be(t))n=Nn();else{const a=Sn(e,t);a!=null&&a.supportedAttrs&&n.push(...a.supportedAttrs),a!=null&&a.requiredAttrs&&n.push(...a.requiredAttrs)}return n=pt(n),r.some(a=>{if(ye(a)){if(!n.includes(a)||Kl.includes(a)&&r1(e,t))return!0}else return!1;return!1})}function t1(e,t,r){var i;if(r.some(o=>Ql.includes(o))){if(Jl.includes(w(e)))return!1}else return!1;const a=t?G(t):null;return!((i=a==null?void 0:a.accessibleNameFrom)!=null&&i.includes("author"))}function r1(e,t){if(t==="row"&&e.parentElement){const r=e.parentElement.closest("table, "+U(["treegrid","table","grid"])),n=r?v(r):null;if(n&&["table","grid"].includes(n))return!0}return!1}const n1=h({id:"aria-allowed-role",uwId:145,severity:1,level:f.BestPractice,description:"Values assigned to WAI-ARIA role attributes must be valid. This means values must be spelled correctly, correspond to existing ARIA role values, and must not be abstract roles in order to correctly expose the purpose of the element.",analyze(e){m(document,"[role]",{includeScreenReaderHidden:!0}).forEach(t=>{C(t,{dpub:!0,allowFallback:!0})!==null&&(e.count.addReviewed(),kl(t,{allowImplicit:!0}).length&&(F(t)?e.issues.add(t):e.issues.add(t,g.incomplete)))})}}),a1=h({id:"aria-command-name",uwId:146,actIds:["97a4e1","m6b1q3"],severity:1,level:f.A,description:"ARIA command elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",analyze(e){const t=U(["link","button","menuitem"]),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{de(n)?I(n,{altAttrNames:["title"],checkTextContent:!0})||e.issues.add(n):e.issues.add(n,g.inapplicable)})}}),i1=h({id:"aria-dialog-name",uwId:147,severity:1,level:f.BestPractice,description:"ARIA dialog elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",analyze(e){const t=U(["dialog","alertdialog"]),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{de(n)?I(n,{altAttrNames:["title"]})||e.issues.add(n):e.issues.add(n,g.inapplicable)})}}),o1=h({id:"aria-hidden-body",uwId:58,severity:1,level:f.A,description:"Document content is not accessible to assistive technology if aria-hidden=true is present on the document body” would be more user friendly.",analyze(e){e.count.addReviewed(),document.body.getAttribute("aria-hidden")==="true"&&e.issues.add(document.body)}}),s1=h({id:"aria-hidden-focus",uwId:59,actIds:["6cfa84"],severity:4,level:f.A,description:"This rule checks aria-hidden elements do not contain focusable elements.",analyze(e){const t='[aria-hidden="true"]',r=m(document,t,{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{!M(n,t)&&gn(n).length&&e.issues.add(n)})}}),l1=h({id:"aria-input-field-name",uwId:84,actIds:["e086e5"],severity:1,level:f.A,description:"Ensures every ARIA input field has an accessible name.",analyze(e){const t=U(["combobox","listbox","searchbox","slider","spinbutton","textbox"]),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{de(n)?(Ke(n)||Ze(n)||!I(n,{altAttrNames:["title"],furtherChecker:a=>!!ge(a)}))&&e.issues.add(n):e.issues.add(n,g.inapplicable)})}}),u1=h({id:"aria-meter-name",uwId:85,severity:1,level:f.A,description:"ARIA meter elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",analyze(e){const t=U(["meter"]),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{I(n,{altAttrNames:["title"]})||e.issues.add(n)})}}),c1=h({id:"aria-progressbar-name",uwId:86,severity:1,level:f.A,description:"ARIA progressbar elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",analyze(e){const t=U("progressbar"),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{de(n)?I(n,{altAttrNames:["title"]})||e.issues.add(n):e.issues.add(n,g.inapplicable)})}}),d1=h({id:"aria-required-attr",uwId:87,actIds:["4e8ab6"],severity:1,level:f.A,description:"ARIA widget roles must have appropriate attributes describing the state or properties of the widget.",analyze(e){const r=m(document,"[role]");e.count.setReviewed(r.length),r.forEach(n=>{var c;const a=C(n);if(!a){e.issues.add(n,g.inapplicable);return}const{implicitRole:i,implicitAttrs:o}=te(n)||{};if(a===i){e.issues.add(n,g.inapplicable);return}const s=((c=Sn(n,a))==null?void 0:c.requiredAttrs)||[];if(!s.length)return;const l=h1(a,o);s.some(p=>!l.includes(p)&&!n.getAttribute(p))&&e.issues.add(n)})}});function h1(e,t){var a;const r=new Set;t&&Object.keys(t).forEach(r.add,r);const n=((a=G(e))==null?void 0:a.implicitAttrs)||{};return n&&Object.keys(n).forEach(r.add,r),Array.from(r)}const p1=["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"],m1=h({id:"aria-required-children",uwId:88,actIds:["bc4a75"],severity:1,level:f.A,description:"Some ARIA parent role values applied to elements must contain specific child elements and role values to perform intended accessibility function.",analyze(e){const r=m(document,'[role]:not([aria-busy="true"])');e.count.setReviewed(r.length),r.forEach(n=>{if(k(n,"aria-busy")==="true")return;const a=C(n),i=a?G(a,n):null;if(!a||!(i!=null&&i.requiredOwnedElements))return;const o=i.requiredOwnedElements,s=f1(n,o);s.some(u=>u&&o.includes(u))||(p1.includes(a)&&!Je(n)&&!s.length&&!Fn(n).length?e.issues.add(n,g.incomplete):e.issues.add(n))})}});function f1(e,t){const r=new Set,n=ot(e);for(const a of n){if(!b(a))continue;const i=v(a,{noPresentational:!0}),o=nr(a)||q(a);!i&&!o||i&&["group","rowgroup"].includes(i)&&t.includes(i)?n.push(...j(a)):i&&r.add(i)}return Array.from(r)}const g1=["listitem","treeitem"],w1=h({id:"aria-required-parent",uwId:89,actIds:["ff89c9"],severity:1,level:f.A,description:"Certain ARIA roles must be contained by particular parent roles in order to perform the intended accessibility functions.",analyze(e){const r=m(document,"[role]");e.count.setReviewed(r.length),r.forEach(n=>{b1(n)||e.issues.add(n)})}});function b1(e){const t=C(e),r=t?G(t):null;if(!(r!=null&&r.requiredContextRole))return!0;let n=[...r.requiredContextRole];const a=n.includes("group");let i=!1,o=[e],s;for(;s=o.shift();){const l=i?C(s):t;let u=i?s:L(s);for(;u;){const c=v(u,{noPresentational:!0});if(!c||c==="generic")u=L(u);else if(c==="group"&&a)l&&g1.includes(l)&&n.push(l),n=n.filter(p=>p!=="group"),u=L(u);else if(n.includes(c)){n=[];break}else break}if(!n.length)return!0;i||(i=!0,o=gl(e))}return!1}const A1=["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"],D1=h({id:"aria-roledescription",uwId:90,severity:1,level:f.A,description:"Ensures that the aria-roledescription attribute is only used on elements with an implicit or explicit role values.",analyze(e){const r=m(document,"[aria-roledescription]");e.count.setReviewed(r.length),r.forEach(n=>{const a=v(n);a&&A1.includes(a)||(a==="generic"||a==="presentation"||a==="none"?e.issues.add(n):e.issues.add(n,g.incomplete))})}}),y1=h({id:"aria-roles",uwId:91,actIds:["674b10"],severity:1,level:f.A,description:"Values assigned to ARIA role values must be valid. Role values must be spelled correctly, correspond to existing ARIA role values, and must not be abstract roles to correctly expose the purpose of the element.",analyze(e){const r=m(document,"[role]");e.count.setReviewed(r.length),r.forEach(n=>{var u,c;const a=(u=n.getAttribute("role"))==null?void 0:u.trim();if(!a){e.issues.add(n,g.inapplicable);return}const i=fe(a),o=i.every(p=>!Be(p,{allowAbstract:!0})),s=i.some(p=>$(n,p)==="abstract");if(o||s){e.issues.add(n);return}const l=C(n,{dpub:!0,allowFallback:!0});l&&((c=G(l))!=null&&c.deprecated)&&e.issues.add(n)})}}),v1=h({id:"aria-text",uwId:92,severity:1,level:f.BestPractice,description:'Elements with role="text" must not have focusable descendants.',analyze(e){const r=m(document,"[role=text]");e.count.setReviewed(r.length),r.forEach(n=>{const a=j(n);if(!a.length)return e.issues.add(n,g.incomplete);Un(a)&&e.issues.add(n)})}});function Un(e){if(!e)return!1;for(const t of e)if(b(t)&&($(t)==="widget"&&q(t)||Un(j(t))))return!0;return!1}const C1=h({id:"aria-toggle-field-name",uwId:93,actIds:["e086e5"],severity:1,level:f.A,description:"Ensures every ARIA toggle field has an accessible name.",analyze(e){const t=U(["checkbox","menu","menuitemcheckbox","menuitemradio","radio","radiogroup","switch","option"]),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{de(n)?(Ke(n)||Ze(n)||!I(n,{altAttrNames:["title"],checkTextContent:!0,furtherChecker:a=>!!ge(a)}))&&e.issues.add(n):e.issues.add(n,g.inapplicable)})}}),T1=h({id:"aria-tooltip-name",uwId:94,severity:1,level:f.A,description:"ARIA tooltip elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",analyze(e){const t=U("tooltip"),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{de(n)?I(n,{altAttrNames:["title"],checkTextContent:!0})||e.issues.add(n):e.issues.add(n,g.inapplicable)})}}),R1=h({id:"aria-treeitem-name",uwId:95,severity:1,level:f.BestPractice,description:"ARIA treeitem elements must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",analyze(e){const t=U("treeitem"),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{de(n)?I(n,{altAttrNames:["title"],checkTextContent:!0})||e.issues.add(n):e.issues.add(n,g.inapplicable)})}}),E1=h({id:"aria-valid-attr",uwId:96,actIds:["5f99a7"],severity:1,level:f.A,description:"ARIA attributes starting with aria-must have valid names. Referring to a misspelled attribute or to one that does not exist will result in an invalid attribute and thus failure of this rule.",analyze(e){const r=m(document,n=>n.getAttributeNames().some(Ct));e.count.setReviewed(r.length),r.forEach(n=>{F1(n)&&e.issues.add(n)})}});function F1(e){return e.getAttributeNames().some(r=>Ct(r)&&!ye(r))}const k1=["aria-current","aria-describedby","aria-labelledby"],I1=h({id:"aria-valid-attr-value",actIds:["6a7281"],analyze(e){const t=pr().map(n=>\`[\${n}]\`).join(","),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{const a=n.getAttributeNames();let i=!1,o=0;for(;o<a.length&&!i;){const s=a[o];++o,Ct(s)&&!W1(n,s)&&(s==="aria-errormessage"?x1(e,n)||(i=!0):s==="aria-checked"&&n.getAttribute("aria-checked")===""?(e.issues.add(n,g.inapplicable),i=!0):Ko(n,s)?s==="aria-level"&&(q1(e,n)||(i=!0)):(k1.includes(s)?e.issues.add(n,g.incomplete):e.issues.add(n),i=!0))}})}});function W1(e,t){switch(t){case"aria-controls":return e.getAttribute("aria-expanded")==="false"||e.getAttribute("aria-selected")==="false";case"aria-owns":return e.getAttribute("aria-expanded")==="false";default:return!1}}function x1(e,t){var n,a;const r=(n=t.getAttribute("aria-errormessage"))==null?void 0:n.trim();if(r){if(r.includes(" "))return e.issues.add(t),!1}else return(a=ye("aria-errormessage"))!=null&&a.allowEmpty?!0:(e.issues.add(t),!1);try{const i=le(t,"aria-errormessage")[0];if(i){if(!F(i)||!(i.getAttribute("role")==="alert"||i.getAttribute("aria-live")==="assertive"||i.getAttribute("aria-live")==="polite"||fe(t.getAttribute("aria-describedby")||"").indexOf(r)>-1))return e.issues.add(t),!1}else return e.issues.add(t,g.incomplete),!1}catch{return e.issues.add(t,g.incomplete),!1}finally{return!0}}function q1(e,t){const r=t.getAttribute("aria-level")||"";return parseInt(r,10)>6?(e.issues.add(t,g.incomplete),!1):!0}const N1=h({id:"audio-caption",uwId:97,actIds:["e7aa44","2eb176","afb423"],severity:1,level:f.A,description:'The track element must be present for each HTML5 audio element, with kind="captions" set as a property. Captions are text—synchronized with the audio file—of the dialog, narration, and any important auditory information, for the benefit of deaf users.',analyze(e){const r=m(document,"audio",{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{if(!F(n)||!P(n)||!(Z(n,"autoplay")||qt(n))){e.issues.add(n,g.inapplicable);return}Vr(n)||e.issues.add(n,g.incomplete)})}}),S1=h({id:"autocomplete-valid",uwId:98,actIds:["73f2c2"],severity:1,level:f.AA,description:"The purpose for each common input field that collects an individual's personal data is programmatically defined based on the list of 53 Input Purposes for User Interface Components. The autocomplete attribute values must be valid and correctly applied for screen readers to function correctly.",analyze(e){const t=m(document,"[autocomplete]");e.count.setReviewed(t.length),t.forEach(r=>{const n=k(r,"autocomplete");!fs(r,n)||n==="off"?e.issues.add(r,g.inapplicable):Jo(r,n)||e.issues.add(r)})}}),M1=h({id:"avoid-inline-spacing",uwId:99,actIds:["24afc2","78fd32","9e45ec"],severity:1,level:f.AA,description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets.",analyze(e){const t={"letter-spacing":{cssProperty:"letter-spacing",minValue:.12},"word-spacing":{cssProperty:"word-spacing",minValue:.16},"line-height":{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},r=m(document,"[style]");e.count.setReviewed(r.length),r.forEach(n=>{if(typeof CSS<"u"&&G1(n,["letter-spacing","word-spacing","line-height"]))return;!(St(n,t["letter-spacing"])&&St(n,t["word-spacing"])&&St(n,t["line-height"]))&&e.issues.add(n)})}}),G1=(e,t)=>t.every(r=>CSS==null?void 0:CSS.supports(r,e.style.getPropertyValue(r))),L1=h({id:"blink",uwId:74,severity:10,level:f.A,description:"This rule requires that no blink elements are present. Flashing text can be difficult to read and blinking objects can be difficult to activate. The associated automated check finds the presence of all blink elements so that they can be removed.",analyze(e){const t="blink",r=m(document,t,{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{M(n,t)||e.issues.add(n)})}}),P1=h({id:"bold",uwId:142,severity:1,level:f.A,description:"The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.",analyze(e){const t="b",r=m(document,t,{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{M(n,t)||e.issues.add(n)})}}),B1=h({id:"button-name",uwId:36,actIds:["97a4e1"],severity:10,level:f.A,description:"Buttons must have discernible text that clearly describes the destination, purpose, function, or action for screen reader users.",analyze(e){const t="button",r=m(document.body,t);e.count.setReviewed(r.length),r.forEach(n=>{Ge(n)&&!I(n,{altAttrNames:["title"],checkPresentationRole:!0,checkTextContent:!0})&&e.issues.add(n)})}}),H1=h({id:"bypass",uwId:100,actIds:["cf77f2","3e12e1","b40fd1","ye5d6e","047fe0"],severity:1,level:f.A,description:"Each page must have a main landmark to provide a mechanism to bypass repeated blocks of content or interface elements (like header and navigation) and quickly arrive at the main content.",analyze(e){const t="a[href]",r=":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]",n="main, [role=main]",a=m(document,t),i=m(document,r),o=m(document,n);e.count.setReviewed(a.length+i.length+o.length),!(a.some(l=>/^#[^/!]/.test(T(l,"href")))||i.length||o.length<=1)&&e.issues.add(document.body)}}),O1=h({id:"color-contrast",uwId:43,actIds:["afw4f7"],severity:7,level:f.AA,description:"All text elements must have sufficient contrast between text in the foreground and background colors behind it in accordance with WCAG 2 AA contrast ratio thresholds.",analyze(e){const t={contrastRatioNormal:{expected:4.5},contrastRatioLarge:{expected:3}},r=m(document,"*");e.count.setReviewed(r.length),r.forEach(n=>{_r(n)&&Nt(n,t)&&e.issues.add(n)})}}),V1=h({id:"color-contrast-enhanced",uwId:101,actIds:["09o5cg"],severity:1,level:f.AAA,description:"All text elements must have sufficient contrast between text in the foreground and background colors behind it in accordance with WCAG 2 AAA contrast ratio thresholds.",analyze(e){const t={contrastRatioNormal:{expected:7,minThreshold:4.5},contrastRatioLarge:{expected:4.5,minThreshold:3}},r=m(document,"*");e.count.setReviewed(r.length),r.forEach(n=>{_r(n)&&Nt(n,t)&&e.issues.add(n)})}}),_n=2,z1=/orientation:\\s*(landscape|portrait)/i,U1=/(rotate|rotateZ|rotate3d|matrix|matrix3d)\\([^)]+\\)/gi,_1=h({id:"css-orientation-lock",uwId:102,actIds:["b33eff"],severity:1,level:f.Experimental,description:"The screen orientation (e.g. portrait or landscape) of mobile applications should not be locked in one mode. Users should be able to change the orientation of their device between portrait and landscape with the page adjusting accordingly in order to remain understandable. Also, when opening a page, it should display in the user’s current orientation.",analyze(e){const t=document.documentElement;e.count.addReviewed();const r=Eo();for(const{cssRules:n}of r)for(const a of n)if(j1(a)&&$1(a)){e.issues.add(t);return}}});function j1(e){return e instanceof CSSMediaRule&&z1.test(e.cssText)}function $1({cssRules:e}){for(const t of e){if(!(t instanceof CSSStyleRule))continue;const{selectorText:r,style:n}=t;if(!r||n.length<=0)continue;const a=n.transform||!1;if(!a)continue;const i=X1(a);if(!(!i||Math.abs(i-180)%180<=_n)&&Math.abs(i-90)%90<=_n)return!0}return!1}function X1(e){const t=e.match(U1);return t?Math.abs(t.reduce((r,n)=>{const[a,i]=n.replace(")","").split("("),o=Y1(a,i);return o&&(r+=o),r},0)):0}function Y1(e,t){switch(e){case"rotate":case"rotateZ":return vr(t);case"rotate3d":const[,,r,n]=t.split(",").map(a=>a.trim());return parseInt(r)===0?null:vr(n);case"matrix":case"matrix3d":return qo(t);default:return null}}const Z1=["a","input","button","select","textarea","link"],K1=h({id:"custom-focusable-elements",uwId:17,severity:10,level:f.A,description:"Custom focusable elements need to have tabindex attribute with zero or a positive number value, so the elements are accessible by keyboard.",analyze(e){const r=m(document,'*[role="link"], *[role="button"], *[role="checkbox"], *[onclick]');e.count.setReviewed(r.length),r.forEach(n=>{const a=_(n,"tabindex"),i=a===null||a<0;!Z1.includes(w(n))&&i&&e.issues.add(n)})}}),J1=h({id:"definition-list",uwId:103,severity:1,level:f.A,description:"Definition lists (dl) must contain only properly-ordered dt and dd groups, div, script, or template elements.",analyze(e){const r=m(document,"dl");e.count.setReviewed(r.length),r.forEach(n=>{T(n,"role")===""&&(Q1(n)||!eu(n))&&e.issues.add(n)})}});function Q1(e){const t=Array.from(e.children);if(!t.length)return!1;let r=!1,n=!1,a;for(const i of t){if(a=w(i),a==="dt"&&(r=!0),r&&a==="dd")return!1;a==="dd"&&(n=!0)}return r||n}function eu(e){const t=["definition","term","list"],r=j(e).reduce((n,a)=>w(a)==="div"&&C(a)===null?n.concat(Array.from(a.childNodes)):n.concat(a),[]);for(const n of r)if(b(n)&&F(n)){const a=w(n),i=C(n);if((a!=="dt"&&a!=="dd"||i)&&!t.includes(i))return!1}else if(ae(n,{allowEmpty:!1}))return!1;return!0}const tu=h({id:"dlitem",uwId:104,severity:1,level:f.A,description:"Definition list items (dt and/or dd) must be wrapped in parent dl elements to be valid. This enables screen reader users to understand the proper hierarchy of information in the list.",analyze(e){const r=m(document,"dt, dd");e.count.setReviewed(r.length),r.forEach(n=>{if(T(n,"role")!=="")return;let a=L(n),i=a==null?void 0:a.nodeName.toLowerCase(),o=a?C(a,{allowAbstract:!1}):null;a&&i==="div"&&(o===null||z(o))&&(a=L(a),i=a==null?void 0:a.nodeName.toLowerCase(),o=a?C(a,{allowAbstract:!1}):null),!(i==="dl"&&(!o||o==="list"||z(o)))&&e.issues.add(n)})}}),ru=h({id:"document-title",uwId:25,actIds:["2779a5"],severity:7,level:f.A,description:"The HTML document must have a title element to provide users with an overview of its content, and when present, it must not be empty.",analyze(e,t=document){if(!(t instanceof Document))throw new Error("Only HTML document can be provided as a root element for 'document-title' rule check");const r=t.documentElement;e.count.addReviewed(),Ce(r)?e.issues.add(r,g.inapplicable):E(t.title)||e.issues.add(t.querySelector("title")||r)}}),nu=h({id:"duplicate-id",uwId:41,actIds:["3ea0c8"],severity:1,level:f.A,outputType:"group",description:"The value assigned to an ID attribute must be unique to prevent the second instance from being overlooked by assistive technology. Put another way; ID attributes may not be used more than once in the same document to differentiate each element from another.",analyze(e){const t=m(document,'[id]:not([id=""])',{includeScreenReaderHidden:!0});e.count.setReviewed(t.length);const r=Yt({elements:t});for(const[,n]of r)for(const a in n){const i=n[a].some(q);n[a].forEach(o=>{V(o,"id")&&!Fe(o)&&!i?e.issuesGroup.add(o,a):e.issuesGroup.add(o,a,g.inapplicable);const s=t.indexOf(o);s>-1&&t.splice(s,1)})}t.forEach(n=>{(!T(n,"id")||Fe(n)||q(n))&&e.issues.add(n,g.inapplicable)})}}),au=h({id:"duplicate-id-active",uwId:105,actIds:["3ea0c8"],severity:1,level:f.A,outputType:"group",description:"The value assigned to active ID attributes on focusable elements must be unique to prevent the second instance from being overlooked by assistive technology.",analyze(e){const t=m(document,'[id]:not([id=""])',{includeScreenReaderHidden:!0});e.count.setReviewed(t.length);const r=Yt({elements:t});for(const[,n]of r)for(const a in n){const i=n[a].some(q);n[a].forEach(o=>{V(o,"id")&&!Fe(o)&&i?e.issuesGroup.add(o,a):e.issuesGroup.add(o,a,g.inapplicable);const s=t.indexOf(o);s>-1&&t.splice(s,1)})}t.forEach(n=>{(!T(n,"id")||Fe(n)||!q(n))&&e.issues.add(n,g.inapplicable)})}}),iu=h({id:"duplicate-id-aria",uwId:106,actIds:["3ea0c8"],severity:1,level:f.A,outputType:"group",description:"The value assigned to an id attribute used in ARIA or in form labels must be unique to prevent the second instance from being overlooked by assistive technology.",analyze(e){const t=m(document,'[id]:not([id=""])',{includeScreenReaderHidden:!0});e.count.setReviewed(t.length);const r=Yt({elements:t});for(const[,n]of r)for(const a in n)n[a].forEach(i=>{V(i,"id")&&Fe(i)?e.issuesGroup.add(i,a):e.issuesGroup.add(i,a,g.inapplicable);const o=t.indexOf(i);o>-1&&t.splice(o,1)});t.forEach(n=>{(!T(n,"id")||!Fe(n))&&e.issues.add(n,g.inapplicable)})}}),ou=h({id:"empty-heading",uwId:32,actIds:["ffd0e9"],severity:5,level:f.BestPractice,description:"When at least one heading element (marked by <h1> through <h6>) is present, it is a best practice to ensure it contains content.",analyze(e){m(document,'h1, h2, h3, h4, h5, h6, [role~="heading"]').forEach(n=>{v(n)==="heading"&&(e.count.addReviewed(),I(n,{altAttrNames:["title"],checkTextContent:!0})||e.issues.add(n))})}}),su=h({id:"empty-table-header",uwId:11,severity:1,level:f.BestPractice,description:"Table header elements should have visible text. Ensure that the table header can be used by screen reader users. If the element is not a header, marking it up with a \`td\` is more appropriate.",analyze(e){const t="th:not([role]), "+U(["rowheader","columnheader"]),r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{Je(n)||e.issues.add(n)})}}),lu=h({id:"fieldset-legend",uwId:12,severity:10,level:f.A,description:"The fieldset element represents a set of form controls (or other content) grouped together, optionally with a caption. The caption is given by the first legend element that is a child of the fieldset element, if any. The remainder of the descendants form the group.",analyze(e){const r=m(document,"fieldset");e.count.setReviewed(r.length),r.forEach(n=>{const a=Array.from(n.children).filter(i=>w(i)==="legend");(a.length===0||a.length>1)&&e.issues.add(n)})}}),uu=h({id:"focus-order-semantics",uwId:107,severity:1,level:f.BestPractice,description:"User input elements must have appropriate roles, whether native HTML or a custom widget, to convey to screen reader users their meaning when landed on and given focus.",analyze(e){const t="div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",n=m(document,a=>a.matches(t)&&ll(a));e.count.setReviewed(n.length),n.forEach(a=>{cu(a)||pu(a)||e.issues.add(a)})}});function cu(e){return v(e)===null?!1:$(e)==="widget"}const du={article:!0,aside:!0,nav:!0,section:!0},hu={application:!0,banner:!1,complementary:!0,contentinfo:!0,form:!0,main:!0,navigation:!0,region:!0,search:!1};function pu(e){const t=w(e);if(du[t])return!0;const r=C(e);return r&&hu[r]||!1}const mu=h({id:"form-field-multiple-labels",uwId:108,severity:1,level:f.A,description:"Ensures form field does not have multiple labels.",analyze(e,t=document){const n=m(t,"input, select, textarea");e.count.setReviewed(n.length),n.forEach(a=>{if(!Wr(a))return;let i=a.parentElement;const o=(ke(a,"for")||[]).filter(s=>Qe(s));for(;i;)w(i)==="label"&&!o.find(s=>s==i)&&b(i)&&o.push(i),i=i.parentElement;if(o.length>1){const s=o.filter(u=>F(u));if(s.length>1){e.issues.add(a,g.incomplete);return}(le(a,"aria-labelledby")||[]).includes(s[0])||e.issues.add(a,g.incomplete)}})}}),fu=h({id:"frame-focusable-content",uwId:109,actIds:["akn7bn"],severity:1,level:f.A,description:'<frame> and <iframe> elements with focusable content must not have tabindex="-1".',analyze(e){const r=m(document,"iframe, frame");e.count.setReviewed(r.length),r.forEach(n=>{const{width:a,height:i}=W(n);if(a===0||i===0)return;const o=j(n);if(!o.length)return;o.some(l=>jn(l))&&!K(n)&&e.issues.add(n)})}});function jn(e){if(K(e))return!0;const t=j(e);return t==null?void 0:t.some(r=>jn(r))}const gu=h({id:"frame-title",uwId:23,actIds:["cae760"],severity:7,level:f.A,description:"All frame or iframe elements in the document must have a title that is not empty to describe their contents to screen reader users.",analyze(e){const t=m(document,"frame, iframe");e.count.setReviewed(t.length),t.forEach(r=>{I(r,{altAttrNames:["title"],checkPresentationRole:!0})||e.issues.add(r)})}}),wu=h({id:"frame-title-unique",uwId:24,actIds:["4b1c6c"],severity:7,level:f.A,outputType:"group",description:"All frame or iframe elements in the document must have a unique title to describe their contents to screen reader users.",analyze(e){const t=Xt("title","frame, iframe");Object.keys(t).forEach(r=>{const n=t[r];e.count.addReviewed(n.length),n.length>1&&n.forEach(a=>{e.issuesGroup.add(a,r)})})}}),bu=h({id:"heading-order",uwId:33,severity:5,level:f.BestPractice,description:"Headings must be in a valid logical order, meaning h1 through h6 element tags must appear in a sequentially-descending order.",analyze(e){const r=m(document,'h1, h2, h3, h4, h5, h6, [role~="heading"]');e.count.setReviewed(r.length),r.sort($t),e.issues.set(Au(r))}});function Au(e){const t=[];if(e.length>0){let r=0,n=r+1;for(;r<e.length&&n<e.length;){const a=e[r],i=e[n],o=Kt(a),s=Kt(i);o==null||s==null||s-o<=1?(r++,n=r+1):s-o>1&&(t.push(i),n++)}}return t}const Du=h({id:"hidden-content",uwId:110,severity:1,level:f.Experimental,description:"Informs users about hidden content that cannot be analyzed for accessibility violations.",analyze(e){const r=m(document,"*:not(script, head, title, noscript, style, template)",{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{if(!Te(n))return;const a=y(n);if(a.getPropertyValue("display")==="none"){e.issues.add(n,g.incomplete);return}else if(a.getPropertyValue("visibility")==="hidden"){const i=L(n),o=i&&b(i)&&y(i);(!o||o.getPropertyValue("visibility")!=="hidden")&&e.issues.add(n,g.incomplete)}})}}),yu=h({id:"html-has-lang",uwId:37,actIds:["b5c3f8"],severity:5,level:f.A,description:"The HTML document element must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default.",analyze(e){const t=document.documentElement;if(e.count.addReviewed(),Ce(t)||Sr(t)){e.issues.add(t,g.inapplicable);return}const r=T(t,"lang"),n=T(t,"xml:lang");(!r&&!n||Nr(t)&&!r&&n)&&e.issues.add(t)}}),vu=h({id:"html-lang-valid",uwId:38,actIds:["bf051a"],severity:1,level:f.A,description:"The HTML document must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default.",analyze(e){const t=document.documentElement;e.count.addReviewed(),Ce(t)?e.issues.add(t,g.inapplicable):qr(t)||e.issues.add(t)}}),Cu=h({id:"html-xml-lang-mismatch",uwId:39,actIds:["5b7ae0"],severity:4,level:f.A,description:"The HTML document must contain a valid lang attribute or must correspond to a valid lang code for multilingual screen reader users who may prefer a language other than the default. The xml:lang attribute value, if included on the html element, must duplicate the value of the lang exactly.",analyze(e){const t=document.documentElement;e.count.addReviewed();const r=T(t,"xml:lang");if(Ce(t)||Sr(t)||es(t)||!r){e.issues.add(t,g.inapplicable);return}const n=T(t,"lang");n&&r&&ft(n)!==ft(r)&&e.issues.add(t)}}),Tu=h({id:"identical-links-same-purpose",uwId:30,actIds:["b20e66"],severity:1,level:f.AAA,outputType:"group",description:"Ensure that links with the same accessible name serve a similar purpose.",analyze(e,t=document){const n=m(t,'a[href], area[href], [role="link"]',{includeScreenReaderHidden:!0});e.count.setReviewed(n.length);const a=[];n.forEach(i=>{const o=v(i);if(o&&o!=="link"){e.issuesGroup.add(i,"incorrect role attribute",g.inapplicable);return}const s=E(Me(S(i))).toLowerCase();if(!s){e.issuesGroup.add(i,"missed accessible text",g.inapplicable);return}const l=Zs(i,"href"),u=a.find(c=>s===c.accessibleText||ur(l,c.urlProps));if(!u){a.push({elements:[i],accessibleText:s,urlProps:l});return}if(u.usedIssueType){e.issuesGroup.add(i,s,u.usedIssueType);return}s!==u.accessibleText?u.usedIssueType=g.inapplicable:ur(l,u.urlProps)||(u.usedIssueType=g.incomplete),u.usedIssueType?(e.issuesGroup.add(i,s,u.usedIssueType),u.elements.forEach(c=>e.issuesGroup.add(c,s,u.usedIssueType))):u.elements.push(i)})}});function ur(e,t){if(!e||!t||typeof e!="object"||typeof t!="object")return!1;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);return r.length!==n.length?!1:r.every(i=>{const o=i in e?e[i]:void 0,s=i in t?t[i]:void 0;return typeof o!=typeof s?!1:typeof o=="object"||typeof s=="object"?ur(o,s):o===s})}const Ru=h({id:"image-alt",actIds:["23a2a8"],errorHandle:{},analyze(e,t=document.body){const n=m(t,"img");e.count.setReviewed(n.length),n.forEach(a=>{var i;Ge(a)&&!((i=e.ruleSpecificOptions)!=null&&i.emptyAltAsPresentationalRole)&&!I(a,{altAttrNames:["title","alt"],checkPresentationRole:!0})&&e.issues.add(a,g.violation,a.hasAttribute("alt")?"emptyAlt":"missingAlt")})}}),Eu=255,Fu=h({id:"image-alt-long",uwId:4,severity:2,level:f.A,description:"Images must have short accessible name",analyze(e,t=document){const n=m(t,"img");e.count.setReviewed(n.length),n.forEach(a=>{T(a,"alt").length>Eu&&e.issues.add(a)})}}),ku=h({id:"image-alt-suspicious",uwId:7,severity:1,level:f.A,description:"Images must don't have suspicious alt text like: image, icon, graphic, drawing, painting, artwork",analyze(e,t=document){const n=m(t,"img[alt]");e.count.setReviewed(n.length),n.forEach(a=>{const i=T(a,"alt");(i.startsWith("graphic of")||i.startsWith("bullet")||i.startsWith("image of")||Iu.includes(i)||Wu(i))&&e.issues.add(a)})}}),Iu=["photo","photograph","drawing","painting","artwork","logo","bullet","button","arrow","more","spacer","blank","chart","table","diagram","graph","*"],Wu=e=>e.endsWith("image")||e.endsWith("graphic")||e.endsWith("icon")||e.endsWith(".gif")||e.endsWith(".jpg")||e.endsWith(".jpeg")||e.endsWith(".png")||e.endsWith(".svg"),xu=h({id:"image-link-without-text",uwId:29,severity:8,level:f.A,description:"Image links must have an accessible text",analyze(e,t=document){const n=m(document,'a > img, a > *[role="img"], *[role="link"] > img, *[role="link"] > *[role="img"]');e.count.setReviewed(n.length),n.forEach(a=>{const i=qu(a);i&&!S(i)&&e.issues.add(i)})}});function qu(e){let t=e;for(;t&&w(t)!=="a"&&T(t,"role")!=="link";)t=t.parentElement;return t}const Nu=h({id:"image-redundant-alt",uwId:2,severity:1,level:f.BestPractice,description:"When button and link text repeats in an alt attribute value, screen reader users hear the same information twice, which renders the alt text meaningless and confusing.",analyze(e,t=document){m(t,"img").forEach(a=>{var l;if(zr(a)||(l=e.ruleSpecificOptions)!=null&&l.emptyAltAsPresentationalRole)return;e.count.addReviewed();const o=M(a,"button, [role=button], a[href], p, li, td, th");if(!o)return;const s=be(o,{screenReader:!0});s!==""&&s.toLowerCase()===S(a).toLowerCase()&&e.issues.add(a)})}}),Su=h({id:"image-same-alt",uwId:3,severity:1,level:f.A,description:"Images must have unique alt text for different src",outputType:"group",analyze(e,t){const r=Xt("alt","img",{root:t});Object.keys(r).forEach(n=>{const a=r[n];e.count.addReviewed(a.length),a.length>1&&a.filter((o,s)=>!a.some((l,u)=>u!==s&&o.src==l.src)).forEach(o=>e.issuesGroup.add(o,n))})}}),Mu=h({id:"input-button-name",uwId:35,actIds:["97a4e1"],severity:10,level:f.A,description:"The input-button-name rule separates functionality from the button-name rule to ensure that input buttons have discernible text; advise relevant to input button names was incorrect for button elements.",analyze(e){const r=m(document,'input[type="button"], input[type="submit"], input[type="reset"]');e.count.setReviewed(r.length),r.forEach(n=>{Ge(n)&&!I(n,{altAttrNames:["title","value"],checkPresentationRole:!0,furtherChecker:Gu})&&e.issues.add(n)})}});function Gu(e){return["submit","reset"].includes(k(e,"type"))?e.getAttribute("value")===null:!1}const Lu=h({id:"input-image-alt",actIds:["59796f"],errorHandle:{},analyze(e){const r=m(document,'input[type="image"]');e.count.setReviewed(r.length),r.forEach(n=>{Ge(n)&&!I(n,{altAttrNames:["title","alt"]})&&e.issues.add(n,g.violation,n.hasAttribute("alt")?"emptyAlt":"missingAlt")})}}),Pu=h({id:"invalid-id",uwId:45,severity:5,level:f.A,description:"When specified on HTML elements, the id attribute value must be unique amongst all the IDs in the element's tree and must contain at least one character. The value must not contain any ASCII whitespace.",analyze(e){const r=m(document,"[id]");e.count.setReviewed(r.length),r.forEach(n=>{const a=V(n,"id");(!(a!=null&&a.trim())||/\\s/.test(a))&&e.issues.add(n)})}}),Bu=h({id:"italic",uwId:148,severity:1,level:f.A,description:"The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.",analyze(e){const t="i",r=m(document,t);e.count.setReviewed(r.length),r.forEach(n=>{!M(n,t)&&!ws(n)&&e.issues.add(n)})}}),Hu=h({id:"label",uwId:111,actIds:["e086e5"],severity:1,level:f.A,description:"Each form element must have a programmatically associated label element.",analyze(e,t=document){const n=m(t,"input, textarea");e.count.setReviewed(n.length),n.forEach(a=>{Wr(a)&&!I(a,{altAttrNames:["title","placeholder"],checkPresentationRole:!0,furtherChecker:i=>!!ge(i)||Ke(i)||Ze(i)})&&e.issues.add(a)})}}),$n=e=>E(Me(e)).toLowerCase(),Ou=(e,t)=>{const r=$n(t),n=$n(e);return!r||!n?!1:r.includes(n)},Vu=h({id:"label-content-name-mismatch",uwId:81,actIds:["2ee8b8"],severity:1,level:f.Experimental,description:"Interactive elements labeled through their content must have their visible label as part of their accessible name",analyze(e,t=document){const r=m(t,n=>de(n));e.count.setReviewed(r.length),r.forEach(n=>{if($(n)!=="widget"){e.issues.add(n,g.inapplicable);return}if(Wt(n))return;const a=we(n,{subtreeDescendant:!0,ignoreLigatures:!0,ignoreNonVisibleText:!0});if(a&&_o(a))return;if(!E(a)||!Mn(n,"contents")){e.issues.add(n,g.inapplicable);return}const i=S(n,{ignoreLigatures:!0});console.log(a,i),i&&!Ou(a,i)&&e.issues.add(n)})}}),zu=h({id:"label-title-only",uwId:34,severity:10,level:f.BestPractice,description:"Form <input> elements may be given a title using the title or aria-describedby attributes (but not both). These attributes are used to provide additional information such as a hint.",analyze(e,t=document){const n=m(t,"input,select,textarea");e.count.setReviewed(n.length),n.forEach(a=>{const i=ut(a),o=le(a,"aria-describedby").filter(l=>Qe(l)&&be(l)).length>0;(!(ge(a)||I(a))||i&&o)&&e.issues.add(a)})}}),Uu=h({id:"landmark-banner-is-top-level",uwId:113,severity:1,level:f.BestPractice,description:"Banner landmark must not be contained in another landmark.",analyze(e){const r=m(document,"header:not([role]), [role=banner]");e.count.setReviewed(r.length),r.forEach(n=>{tt(n)&&(rt(n)||e.issues.add(n))})}}),_u=h({id:"landmark-complementary-is-top-level",uwId:114,severity:1,level:f.BestPractice,description:"Ensures the complementary landmark or aside is at top level",analyze(e){const r=m(document,"aside:not([role]), [role=complementary]");e.count.setReviewed(r.length),r.forEach(n=>{rt(n)||e.issues.add(n)})}}),ju=h({id:"landmark-contentinfo-is-top-level",uwId:115,severity:1,level:f.BestPractice,description:"Contentinfo landmark must be at top level.",analyze(e){const r=m(document,"footer:not([role]), [role=contentinfo]");e.count.setReviewed(r.length),r.forEach(n=>{tt(n)&&(rt(n)||e.issues.add(n))})}}),$u=h({id:"landmark-main-is-top-level",uwId:116,severity:1,level:f.BestPractice,description:'It is a best practice to ensure the main landmark is not contained within another landmark. All content should be contained within distinct regions such as the header (role="banner"), content (role="main"), and footer (role="contentinfo").',analyze(e){const r=m(document,"main:not([role]), [role=main]");e.count.setReviewed(r.length),r.forEach(n=>{rt(n)||e.issues.add(n)})}}),Xu=h({id:"landmark-no-duplicate-banner",uwId:117,severity:1,level:f.BestPractice,description:"Ensures the page has at most one banner landmark.",analyze(e){const r=m(document,"header:not([role]), [role=banner]");e.count.setReviewed(r.length),Ht(r)&&e.issues.set(r)}}),Yu=h({id:"landmark-no-duplicate-contentinfo",uwId:118,severity:1,level:f.BestPractice,description:"Ensures the page has at most one contentinfo landmark.",analyze(e){const r=m(document,"footer:not([role]), [role=contentinfo]");e.count.setReviewed(r.length),Ht(r)&&e.issues.set(r)}}),Zu=h({id:"landmark-no-duplicate-main",uwId:119,severity:1,level:f.BestPractice,description:"It is a best practice to ensure that there is only one main landmark to navigate to the primary content of the page and that if the page contains iframe elements, each should either contain no landmarks, or just a single landmark.",analyze(e){const r=m(document,"main:not([role]), [role='main']");e.count.setReviewed(r.length),Ht(r)&&e.issues.set(r)}}),Ku=h({id:"landmark-one-main",uwId:120,severity:1,level:f.BestPractice,description:"It is a best practice to ensure that there is only one main landmark to navigate to the primary content of the page and that if the page contains iframe elements, each should either contain no landmarks, or just a single landmark.",analyze(e){const r=m(document,'main:not([role]), [role="main"]'),n=[document,...rn(document)];e.count.setReviewed(n.length),n.forEach(a=>{r.some(i=>a.contains(i))||e.issues.add(a.body)})}}),Ju=h({id:"landmark-unique",uwId:121,severity:1,level:f.BestPractice,outputType:"group",description:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination.",analyze(e){const t=U(["banner","complementary","contentinfo","main","navigation","region","search","form"])+", form, footer, header, aside, main, nav, section",r=m(document,t);e.count.setReviewed(r.length);const n=Qu(r.filter(a=>Ps(a)&&F(a)));Object.keys(n).forEach(a=>{e.issuesGroup.set(n[a],a)})}});function Qu(e){const t=new Map;e.forEach(n=>{const a=v(n),i=S(n).toLowerCase(),o=t.get(i);if(!o){t.set(i,new Map([[a,[n]]]));return}const s=o.get(a);s?(s.push(n),o.set(a,s),t.set(i,o)):(o.set(a,[n]),t.set(i,o))});const r={};return t.forEach((n,a)=>{n.forEach(i=>{i.length>1&&(r[a]=r[a]||[],r[a].push(...i))})}),r}const ec=["here","click here","download","download now","click","click this","this","link","more","please click here","continue reading"],tc=h({id:"link-ambiguous-text",uwId:47,severity:1,level:f.BestPractice,description:"Links must have not an ambiguous text",analyze(e,t=document){const n=m(t,'a, *[role="link"]');e.count.setReviewed(n.length),n.forEach(a=>{const i=S(a);i&&ec.includes(i)&&e.issues.add(a)})}}),rc=h({id:"link-in-text-block",uwId:122,severity:1,level:f.A,description:"Ensures users who cannot distinguish between colors can tell when text is a link by verifying the link has either a distinct style that does not rely on color or has a contrast difference of greater than 3:1 (which alerts you that manual testing is required).",analyze(e,t=document){const r={contrastRatioNormal:{expected:3},contrastRatioLarge:{expected:3}},n="a[href], [role=link]",a=m(t,i=>i.matches(n));e.count.setReviewed(a.length),a.forEach(i=>{const o=v(i);o&&o==="link"&&Br(i)&&Je(i)&&P(i)&&Nt(i,r)&&e.issues.add(i)})}}),nc=h({id:"link-name",uwId:27,actIds:["c487ae"],severity:7,level:f.A,description:"Link text and alternate text for images, when used as links, must be discernible by a screen reader, must not have a duplicate label, and must be focusable.",analyze(e,t=document){const r=m(t,'a[href], [role="link"]');e.count.setReviewed(r.length),r.forEach(n=>{I(n,{altAttrNames:["title"],checkTextContent:!0})||e.issues.add(n)})}}),ac=["new tab","new window"],ic=h({id:"link-no-mention-target-blank",uwId:44,severity:1,level:f.AAA,description:"Ensure that every a[target=_blank] links should mention in accessible text that the link opens in new tab",analyze(e,t=document){const n=m(t,'a[target="_blank"]');e.count.setReviewed(n.length),n.forEach(a=>{Xo(a,ac)||e.issues.add(a)})}}),oc=h({id:"link-refer-to-image",uwId:28,severity:5,level:f.A,description:"The link should not be referenced to the image file",analyze(e,t=document){const n=m(t,'a:not([tabindex="-1"]), *[role="link"]:not([tabindex="-1"])');e.count.setReviewed(n.length),n.forEach(a=>{const i=T(a,"href");(i.endsWith(".jpeg")||i.endsWith(".jpg")||i.endsWith(".png")||i.endsWith(".svg")||i.endsWith(".gif"))&&e.issues.add(a)})}}),sc=["ul","ol","script","template","style","meta","link","map","area","datalist"],lc=h({id:"list",uwId:13,severity:8,level:f.A,description:"Lists must be marked up correctly, meaning they must not contain content elements other than li elements.",analyze(e){const r=m(document,'ul, ol, [role="list"]');e.count.setReviewed(r.length),r.forEach(n=>{uc(n)&&e.issues.add(n)})}}),uc=e=>Array.from(e.childNodes).some(t=>ae(t)?E(t.nodeValue)!=="":b(t)&&F(t)&&v(t)!=="listitem"&&!sc.includes(w(t))),cc=["presentation","none","list"],dc=["ul","ol","menu"],hc=h({id:"listitem",uwId:14,severity:8,level:f.A,description:"All list items (li) must be contained within ul or ol parent elements.",analyze(e){const r=m(document,'li, [role="listitem"]');e.count.setReviewed(r.length),r.forEach(n=>{pc(n)||e.issues.add(n)})}}),pc=e=>{const t=e.parentElement;if(!t)return!1;const r=C(t);return r&&cc.includes(r)||dc.includes(w(t))},mc=h({id:"marquee",uwId:22,severity:10,level:f.A,description:"<marquee> elements must not be present because they are deprecated, increase difficulty for users with limited dexterity, and are distracting for users with cognitive or attention deficits.",analyze(e){const t="marquee",r=m(document,t,{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{M(n,t)||e.issues.add(n)})}}),fc=h({id:"meta-refresh",uwId:21,actIds:["bc659a"],severity:10,level:f.A,description:'The document must not use <meta http-equiv="refresh"> with a refresh time of less than 20 hours because it can prevent control over when the refresh occurs for users with disabilities.',analyze(e){const t='meta[http-equiv="refresh"]',r=Array.from(document.querySelectorAll(t));if(!r.length){e.count.addReviewed();const n=document.querySelector("meta[content]");n&&_(n,"content")!==null&&e.issues.add(n,g.inapplicable);return}e.count.setReviewed(r.length),r.forEach(n=>{if(!n.hasAttribute("content")){e.issues.add(n,g.inapplicable);return}const a=vn(n);a===null?e.issues.add(n,g.inapplicable):a&&a<=72e3&&e.issues.add(n)})}}),gc=h({id:"meta-refresh-no-exceptions",uwId:123,actIds:["bisz58"],severity:1,level:f.AAA,description:'The document must not use <meta http-equiv="refresh"> because it can prevent control over when the refresh occurs for users with disabilities.',analyze(e){const t='meta[http-equiv="refresh"]',r=Array.from(document.querySelectorAll(t));if(!r.length){e.count.addReviewed();const n=document.querySelector("meta[content]");n&&_(n,"content")!==null&&e.issues.add(n,g.inapplicable);return}e.count.setReviewed(r.length),r.forEach(n=>{if(!n.hasAttribute("content")){e.issues.add(n,g.inapplicable);return}const a=vn(n);a===null?e.issues.add(n,g.inapplicable):a&&e.issues.add(n)})}}),wc=h({id:"meta-viewport",uwId:78,actIds:["b4f0c3"],severity:10,level:f.AA,description:'The document must not use the user-scalable="no" parameter in the <meta name="viewport"> element because it disables text scaling and zooming which is essential to users with low vision.',analyze(e){const t=document.documentElement;e.count.addReviewed();const r='meta[name="viewport"]',n=document.querySelector(r);if(!n){e.issues.add(t,g.inapplicable);return}const a=bc(n);if(!a||!a["user-scalable"]&&!a["maximum-scale"]){e.issues.add(t,g.inapplicable);return}if(a["user-scalable"]==="no"){e.issues.add(n);return}const i=parseFloat(a["user-scalable"]);if(a["user-scalable"]&&(i||i===0)&&i>-1&&i<1){e.issues.add(n);return}const o=parseFloat(a["maximum-scale"]);if(a["maximum-scale"]&&0<=o&&o<2){e.issues.add(n);return}}});function bc(e){const t=yn(e);return t?t.reduce((r,n)=>{const a=n.trim();if(!a)return r;const[i,o]=a.split("=");if(!i||!o)return r;const s=i.toLowerCase().trim();let l=o.toLowerCase().trim();return s==="maximum-scale"&&l==="yes"&&(l="1"),r[s]=l,r},{}):null}const Ac=h({id:"meta-viewport-large",uwId:124,severity:1,level:f.BestPractice,description:'The document must not use the user-scalable="no" parameter in the <meta name="viewport"> element because it disables text scaling and zooming which is essential to users with low vision.',analyze(e){const t='meta[name="viewport"]',r=document.querySelector(t);if(!r)return;e.count.addReviewed();const n=5,a=2,i=Ol(r);!r||!i||(i["user-scalable"]==="no"&&e.issues.add(r),!(i["maximum-scale"]&&parseFloat(i["maximum-scale"])<a)&&i["maximum-scale"]&&parseFloat(i["maximum-scale"])<n&&e.issues.add(r))}}),Dc=h({id:"nested-interactive",uwId:141,actIds:["307n5z"],severity:10,level:f.A,description:"Nested interactive controls are not announced by screen readers",analyze(e){const t=m(document,r=>{var a;const n=v(r);return n?!!((a=G(n))!=null&&a.childrenPresentational)||n==="button"||n==="link":!1});e.count.setReviewed(t.length),t.forEach(r=>{m(r,"*",{excludeRoot:!0}).some(n=>{const a=v(n);return $(n)==="widget"&&q(n)||a==="button"||a==="link"})&&e.issues.add(r)})}}),yc=h({id:"no-autoplay-audio",uwId:70,actIds:["80f0bf","4c31df"],severity:10,level:f.A,description:"Ensures <video> or <audio> elements do not autoplay audio for more than three seconds without a control mechanism to stop or mute the audio.",analyze(e){const r=m(document,"audio[autoplay], video[autoplay]",{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{if(!n.currentSrc||!Z(n,"autoplay")||Z(n,"muted")||Z(n,"paused")){e.issues.add(n,g.inapplicable);return}const a=Dn(n);!qt(n)&&(a>3||Z(n,"loop"))&&e.issues.add(n,g.incomplete)})}}),vc=h({id:"no-autoplay-audio-no-exceptions",uwId:143,actIds:["aaa1bf"],severity:10,level:f.A,description:"Ensures <video> or <audio> elements do not autoplay audio for more than three seconds.",analyze(e){const r=m(document,"audio[autoplay], video[autoplay]",{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{if(!n.currentSrc||!Z(n,"autoplay")||Z(n,"muted")||Z(n,"paused")){e.issues.add(n,g.inapplicable);return}(Dn(n)>3||Z(n,"loop"))&&e.issues.add(n,g.incomplete)})}}),Cc=h({id:"object-alt",actIds:["8fc3b6"],errorHandle:{},analyze(e){m(document,"object[data]").forEach(n=>{var i;if(!Ge(n)||!ys(n))return;e.count.addReviewed();const a=C(n);a&&(z(a)||a==="img")||(i=T(n,"data"))!=null&&i.endsWith(".html")?e.issues.add(n,g.inapplicable):I(n,{altAttrNames:["title"],checkPresentationRole:!0})||e.issues.add(n,g.violation,n.hasAttribute("alt")?"emptyAlt":"missingAlt")})}}),Tc=h({id:"p-as-heading",uwId:126,severity:1,level:f.Experimental,description:"Styled p elements must not be used to represent headings because the structure of the document cannot otherwise be determined by screen reader users.",analyze(e){const t=m(document,r=>(r==null?void 0:r.nodeName)==="P"&&Rc(r));e.count.setReviewed(t.length),t.forEach(r=>{const n=kc(r);n?e.issues.add(r):n===void 0&&e.issues.add(r,g.incomplete)})}});function Rc(e){var i,o;const t=Array.from(((i=e.parentNode)==null?void 0:i.childNodes)||[]),r=(o=e.textContent)==null?void 0:o.trim(),n=/[.!?:;](?![.!?:;])/g;return r&&(r.length===0||(r.match(n)||[]).length>=2)?!1:t.slice(t.indexOf(e)+1).filter(s=>{var l;return s.nodeName.toUpperCase()==="P"&&((l=s.textContent)==null?void 0:l.trim())!==""}).length!==0}function Ec(e){switch(e){case"lighter":return 100;case"normal":return 400;case"bold":return 700;case"bolder":return 900}const t=parseInt(e);return isNaN(t)?400:t}function Fc(e){var a,i,o;let t=e;const r=(a=e.textContent)==null?void 0:a.trim();let n=r;for(;n===r&&t!==void 0;){let s=-1;if(e=t,e.children.length===0)return e;do s++,n=(o=(i=e.children[s])==null?void 0:i.textContent)==null?void 0:o.trim();while(n===""&&s+1<e.children.length);t=e.children[s]}return e}function cr(e){const t=y(Fc(e));return{fontWeight:Ec(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:t.getPropertyValue("font-style")==="italic"}}function Xn(e,t,r){return r.reduce((n,a)=>n||(!a.size||e.fontSize/a.size>t.fontSize)&&(!a.weight||e.fontWeight-a.weight>t.fontWeight)&&(!a.italic||e.isItalic&&!t.isItalic),!1)}const dr={margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5};function kc(e){var D,N,x;const t=Array.from(((D=e.parentNode)==null?void 0:D.children)||[]),r=t.indexOf(e),n=dr.margins||[],a=t.slice(r+1).find(R=>R.nodeName.toUpperCase()==="P"),i=t.slice(0,r).reverse().find(R=>R.nodeName.toUpperCase()==="P"),o=cr(e),s=a?cr(a):null,l=i?cr(i):null,u=dr.passLength,c=dr.failLength,p=(N=e.textContent)==null?void 0:N.trim().length,A=(x=a==null?void 0:a.textContent)==null?void 0:x.trim().length;if(p&&A&&p>A*u||!s||!Xn(o,s,n))return!1;if(!(l&&!Xn(o,l,n))&&!(p&&A&&p>A*c))return!0}const Ic=h({id:"page-has-heading-one",uwId:31,severity:5,level:f.BestPractice,description:"Ensures that the page, or at least one of its frames, contains an h1 element that appears before the start of the main content to allow screen reader users to use keyboard shortcuts to navigate the heading structure instead of wasting time listening to more of the web page to understand its structure.",analyze(e){const n=m(document,'h1, [role~="heading"]').some(a=>Kt(a)===1);e.count.addReviewed(),n||e.issues.add(document.body)}}),Wc=h({id:"presentation-role-conflict",uwId:127,actIds:["46ca7f"],severity:1,level:f.BestPractice,description:"Ensures elements which are marked to be removed from the accessibility tree are consistently ignored: does not use any global ARIA attribute and are not focusable.",analyze(e){const r=m(document,'img[alt=""], [role="none"], [role="presentation"]',{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{F(n)&&(nr(n)||q(n))&&e.issues.add(n)})}}),xc=h({id:"region",uwId:128,severity:1,level:f.BestPractice,description:"It is best practice to contain all content excepting skip links, within distinct regions such as the header, nav, main, and footer.",analyze(e){const r=m(document,"*");e.count.setReviewed(r.length);const n=qc();r.forEach(a=>{n.includes(a)&&e.issues.add(a)})}});function qc(){return Yn(document.body).map(t=>{for(;t.parentElement&&!t.parentElement.hasRegionDescendant&&t.parentElement!==document.body;)t=t.parentElement;return t}).filter((t,r,n)=>n.indexOf(t)===r)}function Yn(e){const t=w(e),r=["iframe","frame"].includes(t);if(v(e)==="button"||Nc(e)||r||bn(e)&&dn(e,"href")){let n=e;for(;n;)n.hasRegionDescendant=!0,n=n.parentElement;return r?n?[n]:[]:[]}else return e!==document.body&&Te(e)?[e]:[...e.children].filter(n=>b(n)).map(n=>Yn(n)).reduce((n,a)=>n.concat(a),[])}function Nc(e){const t=ar("landmark"),r=["alert","log","status"],n=v(e)||"",a=T(e,"aria-live");return!!(["assertive","polite"].includes(a)||r.includes(n)||t.includes(n)||e.matches("dialog, [role=dialog], [role=alertdialog], svg"))}const Sc=h({id:"role-img-alt",actIds:["23a2a8"],errorHandle:{},analyze(e,t=document){m(t,'[role="img"]:not(img, area, input, object)').forEach(a=>{Ce(a)||(e.count.addReviewed(),I(a,{altAttrNames:["title"]})||e.issues.add(a,g.violation,a.hasAttribute("alt")?"emptyAlt":"missingAlt"))})}}),Mc=["row","col","rowgroup","colgroup"],Gc=h({id:"scope-attr-valid",errorHandle:{},analyze(e){const r=m(document,"td[scope], th[scope]");e.count.setReviewed(r.length),r.forEach(n=>{Nr(n)&&w(n)!=="th"&&e.issues.add(n,g.violation,"thOnly");const a=k(n,"scope");(!a||!Mc.includes(a))&&e.issues.add(n,g.violation,"invalidScopeValue")})}}),Lc=h({id:"scrollable-region-focusable",uwId:131,actIds:["0ssw9k"],severity:1,level:f.A,description:"Elements that have scrollable content should be accessible by keyboard",analyze(e){const r=m(document,"*:not(select,textarea)");e.count.setReviewed(r.length),r.forEach(n=>{var l,u;if(!He(n,13))return!1;const a=C(n);if(a&&((u=(l=ye("aria-haspopup"))==null?void 0:l.values)!=null&&u.includes(a))){if(M(n,'[role~="combobox"]'))return!1;const c=V(n,"id");if(c){const p=oe(n);if(Array.from(p.querySelectorAll(\`[aria-owns~="\${c}"], [aria-controls~="\${c}"]\`)).some(N=>fe(N.getAttribute("role")).includes("combobox")))return!1}}if(!Te(n,{skipAriaLabel:!0}))return!1;(!(gn(n).length>0)||!Ft(n)||!K(n))&&e.issues.add(n)})}}),Pc=h({id:"select-name",uwId:132,actIds:["e086e5"],severity:1,level:f.A,description:"Each select element must have a programmatically associated label element.",analyze(e){const r=m(document,"select");e.count.setReviewed(r.length),r.forEach(n=>{(Ke(n)||Ze(n)||!I(n,{altAttrNames:["title"],checkPresentationRole:!0,furtherChecker:a=>!!ge(a)}))&&e.issues.add(n)})}}),Bc=h({id:"server-side-image-map",uwId:133,severity:1,level:f.A,description:"The document contains an image map that is server-side instead of client-side.",analyze(e){const r=m(document,"img[ismap]");e.count.setReviewed(r.length),e.issues.set(r)}}),Hc=h({id:"skip-link",uwId:50,severity:8,level:f.BestPractice,description:"The page must have a link at the top before the navigation that allows users to skip lengthy navigation and proceed to a page's main content to save time.",analyze(e,t=document){const r=m(t,'a[href^="#"], a[href^="/#"], a[href*="#"]');e.count.setReviewed(r.length),r.forEach(n=>{const a=y(n);if(bn(n)&&Mr(n,a))return;const i=dn(n,"href");i&&F(i)||e.issues.add(n)})}}),Oc=h({id:"svg-img-alt",uwId:134,actIds:["7d6734"],severity:1,level:f.A,description:"Ensures SVG elements with an <img>, graphics-document or graphics-symbol role have an accessible text alternative.",analyze(e,t=document){m(t,'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]').forEach(a=>{Ce(a)&&(e.count.addReviewed(),I(a,{altAttrNames:["title"],furtherChecker:Vc})||e.issues.add(a))})}});function Vc(e){const t=e.querySelector("title");return!!t&&we(t,{includeHidden:!0}).trim()!==""}const zc=h({id:"tabindex",uwId:26,severity:10,level:f.BestPractice,description:"A tabindex attribute must never have a value greater than 0 to prevent an unexpected tab order that can give the appearance of skipping some elements entirely.",analyze(e){const r=m(document,"[tabindex]");e.count.setReviewed(r.length),r.forEach(n=>{const a=_(n,"tabindex");a!==null&&a>0&&e.issues.add(n)})}}),Uc=h({id:"table-duplicate-name",uwId:10,severity:3,level:f.BestPractice,outputType:"group",description:"Data table markup can be tedious and confusing. Make sure the caption and summary table attributes are not identical. Screen readers have some features to manage table navigation, but tables must be marked up accurately for these features to work correctly.",analyze(e){const r=m(document,"table");e.count.setReviewed(r.length),r.forEach(n=>{if(!j(n).length){e.issues.add(n,g.incomplete);return}const a=E(n.getAttribute("summary")).toLowerCase();if(!a)return;const i=n.caption?E(we(n.caption)).toLowerCase():"";i&&a===i&&e.issuesGroup.add(n,a)})}}),_c=h({id:"table-fake-caption",uwId:135,severity:1,level:f.Experimental,description:"Data table markup can be tedious and confusing. Screen readers have some features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",analyze(e){const r=m(document,"table");e.count.setReviewed(r.length),r.forEach(n=>{if(!Pt(n)||n.caption||Oe(n).length<=1)return;const a=Ve(n),i=a[0];a.length>1&&i.length>1&&i.every(o=>o===i[0])&&e.issues.add(n)})}}),jc=h({id:"target-size",uwId:136,severity:1,level:f.AA,description:"Touch targets must be at least 24 by 24 CSS pixels in size. Size is computed by taking the largest unobscured area of the touch target. If the size of the target is insufficient, then it must be at least 24 CSS pixels away from any other touch target.",analyze(e){const t=m(document,r=>$c(r));e.count.setReviewed(t.length),t.forEach(r=>{(!ks(r)||!Is(r))&&e.issues.add(r)})}});function $c(e){return $(e)==="widget"&&Xc(e)&&!Yc(e)&&q(e)&&(K(e)||!Zn(e))&&!Br(e,{noLengthCompare:!0})}function Xc(e){return w(e)!=="area"}function Yc(e){return w(e)==="svg"||!!M(e,"svg")}function Zn(e){return!e||!e.parentElement?!1:$(e)==="widget"&&K(e)?!0:Zn(e.parentElement)}const Kn=3,Zc=h({id:"td-has-header",uwId:137,severity:5,level:f.Experimental,description:"Data table markup can be tedious and confusing. Tables must be marked up done semantically and with the correct header structure. Screen readers have features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",analyze(e){const r=m(document,"table");e.count.setReviewed(r.length),r.forEach(n=>{if(!Pt(n))return;const a=Ve(n);a.length<Kn||a.some(i=>i.length<Kn)||Kc(a)&&e.issues.add(n)})}});function Kc(e){return e.some(t=>t.some(r=>{if(Lt(r)&&Te(r)&&!Ye(r)){const n=En(r,e);return n===void 0?!1:!n.some(a=>Te(a))}return!1}))}const Jc=h({id:"td-headers-attr",uwId:138,actIds:["a25f45"],severity:1,level:f.A,description:"Data table markup can be tedious and confusing. Markup tables semantically and with the correct header structure. Screen readers have features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",analyze(e){m(document,"table",{includeScreenReaderHidden:!0}).forEach(n=>{if(!n.querySelector("th[headers], td[headers]"))return;if(e.count.addReviewed(),!F(n)||!P(n)){e.issues.add(n,g.inapplicable);return}const a=v(n);if(!a||!["table","treegrid","grid"].includes(a)){e.issues.add(n,g.inapplicable);return}const i=Tn(n),o=i.reduce((s,l)=>{const u=V(l,"id");return u&&s.push(u),s},[]);for(const s of i){if(!s.hasAttribute("headers")||!F(s))continue;const l=T(s,"headers");if(!l){e.issues.add(n,g.incomplete);return}const u=fe(l),c=V(s,"id");if(c&&u.includes(c)||u.some(p=>!o.includes(p))){e.issues.add(n);return}}})}}),Qc=h({id:"th-has-data-cells",uwId:139,actIds:["d0f69e"],severity:1,level:f.A,description:"Data table markup can be tedious and confusing. Markup tables semantically and with the correct header structure. Screen readers have features to ease table navigation, but tables must be marked up accurately for these features to work correctly.",analyze(e){const t="table, "+U(["table","treegrid","grid"]);m(document,t,{includeScreenReaderHidden:!0}).forEach(n=>{if(!Pt(n))return;if(e.count.addReviewed(),!F(n)||!P(n)){e.issues.add(n,g.inapplicable);return}const a=ed(n),i=Ve(n);let o=0;for(const s of i)for(const l of s){if(!Bt(l)||!F(l))continue;++o;const u=V(l,"id");if(l.hasAttribute("headers")){e.issues.add(n);return}else{if(u&&a.includes(u))continue;{const c=Gs(l,i);if(c===!1){e.issues.add(n);return}else if(c===void 0){e.issues.add(n,g.incomplete);return}}}}o===0&&e.issues.add(n,g.inapplicable)})}});function ed(e){const t=Tn(e),r=["headers","aria-labelledby"],n=[];return r.forEach(a=>{t.forEach(i=>{const o=yt(i,a);o.length&&n.push(...o)})}),n}const td=h({id:"valid-lang",uwId:40,actIds:["de46e4"],severity:5,level:f.A,description:"The language specified in the HTML document must be one of the valid languages to ensure text is pronounced correctly for screen reader users.",analyze(e){const t="[lang], [xml\\\\:lang]",r=m(document.body,t);e.count.setReviewed(r.length),r.forEach(n=>{rd(n)||!nd(n)?e.issues.add(n,g.inapplicable):qr(n)||e.issues.add(n)})}});function rd(e){return(!e.hasAttribute("lang")||e.getAttribute("lang")==="")&&(!e.hasAttribute("xml:lang")||e.getAttribute("xml:lang")==="")}function nd(e){let t;const r=Array.from(e.childNodes);for(;t=r.shift();){if(ae(t,{allowEmpty:!1}))return!0;if(b(t)&&!t.hasAttribute("lang")&&!t.hasAttribute("xml:lang")&&(P(t)||F(t))){if(I(t,{altAttrNames:["title","alt","value","placeholder"],checkTextContent:!1}))return!0;t.childNodes.length>0&&r.push(...Array.from(t.childNodes))}}return!1}const ad=h({id:"video-caption",uwId:140,actIds:["eac66b","ab4d13","f51b46"],severity:1,level:f.A,description:'An HTML5 video element must include a track element with kind="captions" set as a property. The captions should convey all meaningful auditory information in the video including dialogue, musical cues, sound effects, and other relevant information for deaf users.',analyze(e){const r=m(document,"video",{includeScreenReaderHidden:!0});e.count.setReviewed(r.length),r.forEach(n=>{if(!F(n)||!P(n)||!(Z(n,"autoplay")||qt(n))){e.issues.add(n,g.inapplicable);return}Vr(n)||e.issues.add(n,g.incomplete)})}});var Jn=(e=>(e.Accesskeys="accesskeys",e.AreaAlt="area-alt",e.AriaAllowedAttr="aria-allowed-attr",e.AriaAllowedRole="aria-allowed-role",e.AriaCommandName="aria-command-name",e.AriaDialogName="aria-dialog-name",e.AriaHiddenBody="aria-hidden-body",e.AriaHiddenFocus="aria-hidden-focus",e.AriaInputFieldName="aria-input-field-name",e.AriaMeterName="aria-meter-name",e.AriaProgressbarName="aria-progressbar-name",e.AriaRequiredAttr="aria-required-attr",e.AriaRequiredChildren="aria-required-children",e.AriaRequiredParent="aria-required-parent",e.AriaRoledescription="aria-roledescription",e.AriaRoles="aria-roles",e.AriaText="aria-text",e.AriaToggleFieldName="aria-toggle-field-name",e.AriaTooltipName="aria-tooltip-name",e.AriaTreeitemName="aria-treeitem-name",e.AriaValidAttr="aria-valid-attr",e.AriaValidAttrValue="aria-valid-attr-value",e.AudioCaption="audio-caption",e.AutocompleteValid="autocomplete-valid",e.AvoidInlineSpacing="avoid-inline-spacing",e.Blink="blink",e.Bold="bold",e.ButtonName="button-name",e.Bypass="bypass",e.ColorContrast="color-contrast",e.ColorContrastEnhanced="color-contrast-enhanced",e.CssOrientationLock="css-orientation-lock",e.CustomFocusableElements="custom-focusable-elements",e.DefinitionList="definition-list",e.Dlitem="dlitem",e.DocumentTitle="document-title",e.DuplicateId="duplicate-id",e.DuplicateIdActive="duplicate-id-active",e.DuplicateIdAria="duplicate-id-aria",e.EmptyHeading="empty-heading",e.EmptyTableHeader="empty-table-header",e.FieldsetLegend="fieldset-legend",e.FocusOrderSemantics="focus-order-semantics",e.FormFieldMultipleLabels="form-field-multiple-labels",e.FrameFocusableContent="frame-focusable-content",e.FrameTitle="frame-title",e.FrameTitleUnique="frame-title-unique",e.HeadingOrder="heading-order",e.HiddenContent="hidden-content",e.HtmlHasLang="html-has-lang",e.HtmlLangValid="html-lang-valid",e.HtmlXmlLangMismatch="html-xml-lang-mismatch",e.IdenticalLinksSamePurpose="identical-links-same-purpose",e.ImageAlt="image-alt",e.ImageAltLong="image-alt-long",e.ImageAltSuspicious="image-alt-suspicious",e.ImageLinkWithoutText="image-link-without-text",e.ImageRedundantAlt="image-redundant-alt",e.ImageSameAlt="image-same-alt",e.InputButtonName="input-button-name",e.InputImageAlt="input-image-alt",e.InvalidId="invalid-id",e.Italic="italic",e.Label="label",e.LabelContentNameMismatch="label-content-name-mismatch",e.LabelTitleOnly="label-title-only",e.LandmarkBannerIsTopLevel="landmark-banner-is-top-level",e.LandmarkComplementaryIsTopLevel="landmark-complementary-is-top-level",e.LandmarkContentinfoIsTopLevel="landmark-contentinfo-is-top-level",e.LandmarkMainIsTopLevel="landmark-main-is-top-level",e.LandmarkNoDuplicateBanner="landmark-no-duplicate-banner",e.LandmarkNoDuplicateContentinfo="landmark-no-duplicate-contentinfo",e.LandmarkNoDuplicateMain="landmark-no-duplicate-main",e.LandmarkOneMain="landmark-one-main",e.LandmarkUnique="landmark-unique",e.LinkAmbiguousText="link-ambiguous-text",e.LinkInTextBlock="link-in-text-block",e.LinkName="link-name",e.LinkNoMentionTargetBlank="link-no-mention-target-blank",e.LinkReferToImage="link-refer-to-image",e.List="list",e.Listitem="listitem",e.Marquee="marquee",e.MetaRefresh="meta-refresh",e.MetaRefreshNoExceptions="meta-refresh-no-exceptions",e.MetaViewport="meta-viewport",e.MetaViewportLarge="meta-viewport-large",e.NestedInteractive="nested-interactive",e.NoAutoplayAudio="no-autoplay-audio",e.NoAutoplayAudioNoExceptions="no-autoplay-audio-no-exceptions",e.ObjectAlt="object-alt",e.PAsHeading="p-as-heading",e.PageHasHeadingOne="page-has-heading-one",e.PresentationRoleConflict="presentation-role-conflict",e.Region="region",e.RoleImgAlt="role-img-alt",e.ScopeAttrValid="scope-attr-valid",e.ScrollableRegionFocusable="scrollable-region-focusable",e.SelectName="select-name",e.ServerSideImageMap="server-side-image-map",e.SkipLink="skip-link",e.SvgImgAlt="svg-img-alt",e.Tabindex="tabindex",e.TableDuplicateName="table-duplicate-name",e.TableFakeCaption="table-fake-caption",e.TargetSize="target-size",e.TdHasHeader="td-has-header",e.TdHeadersAttr="td-headers-attr",e.ThHasDataCells="th-has-data-cells",e.ValidLang="valid-lang",e.VideoCaption="video-caption",e))(Jn||{});const id={accesskeys:Xl,"area-alt":Yl,"aria-allowed-attr":Zl,"aria-allowed-role":n1,"aria-command-name":a1,"aria-dialog-name":i1,"aria-hidden-body":o1,"aria-hidden-focus":s1,"aria-input-field-name":l1,"aria-meter-name":u1,"aria-progressbar-name":c1,"aria-required-attr":d1,"aria-required-children":m1,"aria-required-parent":w1,"aria-roledescription":D1,"aria-roles":y1,"aria-text":v1,"aria-toggle-field-name":C1,"aria-tooltip-name":T1,"aria-treeitem-name":R1,"aria-valid-attr":E1,"aria-valid-attr-value":I1,"audio-caption":N1,"autocomplete-valid":S1,"avoid-inline-spacing":M1,blink:L1,bold:P1,"button-name":B1,bypass:H1,"color-contrast":O1,"color-contrast-enhanced":V1,"css-orientation-lock":_1,"custom-focusable-elements":K1,"definition-list":J1,dlitem:tu,"document-title":ru,"duplicate-id":nu,"duplicate-id-active":au,"duplicate-id-aria":iu,"empty-heading":ou,"empty-table-header":su,"fieldset-legend":lu,"focus-order-semantics":uu,"form-field-multiple-labels":mu,"frame-focusable-content":fu,"frame-title":gu,"frame-title-unique":wu,"heading-order":bu,"hidden-content":Du,"html-has-lang":yu,"html-lang-valid":vu,"html-xml-lang-mismatch":Cu,"identical-links-same-purpose":Tu,"image-alt":Ru,"image-alt-long":Fu,"image-alt-suspicious":ku,"image-link-without-text":xu,"image-redundant-alt":Nu,"image-same-alt":Su,"input-button-name":Mu,"input-image-alt":Lu,"invalid-id":Pu,italic:Bu,label:Hu,"label-content-name-mismatch":Vu,"label-title-only":zu,"landmark-banner-is-top-level":Uu,"landmark-complementary-is-top-level":_u,"landmark-contentinfo-is-top-level":ju,"landmark-main-is-top-level":$u,"landmark-no-duplicate-banner":Xu,"landmark-no-duplicate-contentinfo":Yu,"landmark-no-duplicate-main":Zu,"landmark-one-main":Ku,"landmark-unique":Ju,"link-ambiguous-text":tc,"link-in-text-block":rc,"link-name":nc,"link-no-mention-target-blank":ic,"link-refer-to-image":oc,list:lc,listitem:hc,marquee:mc,"meta-refresh":fc,"meta-refresh-no-exceptions":gc,"meta-viewport":wc,"meta-viewport-large":Ac,"nested-interactive":Dc,"no-autoplay-audio":yc,"no-autoplay-audio-no-exceptions":vc,"object-alt":Cc,"p-as-heading":Tc,"page-has-heading-one":Ic,"presentation-role-conflict":Wc,region:xc,"role-img-alt":Sc,"scope-attr-valid":Gc,"scrollable-region-focusable":Lc,"select-name":Pc,"server-side-image-map":Bc,"skip-link":Hc,"svg-img-alt":Oc,tabindex:zc,"table-duplicate-name":Uc,"table-fake-caption":_c,"target-size":jc,"td-has-header":Zc,"td-headers-attr":Jc,"th-has-data-cells":Qc,"valid-lang":td,"video-caption":ad};var Qn=(e=>(e.passed="passed",e.failed="failed",e.inapplicable="inapplicable",e.cantTell="cantTell",e))(Qn||{});const od=["[data-userway-app-ignore]"],sd=async({level:e,includeRules:t,excludeRules:r,includeBestPractices:n,includeExperimental:a,switchOff:i,ignoreSelectors:o,ruleSpecificOptions:s}={})=>{const l={};return On.set("ignoreSelectors",o||od),Ne.clear(),(i?[]:ld({level:e,includeRules:t,excludeRules:r,includeBestPractices:n,includeExperimental:a})).forEach(c=>{if(!c)return;const{issues:p,issuesGroup:A,count:D}=c.analyze(s);l[c.id]={count:D,description:c.description,display:c.display,errorMessage:c.errorMessage||"",issues:p,issuesGroup:A,level:c.level,outcome:ud(D),outputType:c.outputType,recommendation:c.recommendation||"",ruleId:c.id}}),l};function ld({level:e="AA",includeRules:t=[],excludeRules:r=[],includeBestPractices:n=!1,includeExperimental:a=!1}){const i={A:["A"],AA:["A","AA"],AAA:["A","AA","AAA"]};let o=Object.values(id).filter(s=>s.level===ze.BestPractice&&n||s.level===ze.Experimental&&a||e&&i[e].includes(s.level)||!e&&t.includes(s.id));return t.length>0&&e&&(o=o.filter(s=>t.includes(s.id))),r.length>0&&(o=o.filter(s=>!r.includes(s.id))),o}function ud(e){return e.reviewed===e.inapplicable?"inapplicable":e.reviewed===e.passed+e.inapplicable?"passed":e.reviewed===e.violation+e.inapplicable?"failed":"cantTell"}return O.Level=ze,O.Outcome=Qn,O.RuleLevel=f,O.RulesIds=Jn,O.analyze=sd,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}),O}({});
`, cd = (e, t) => {
  const n = {};
  try {
    return cy.wrap(e, { log: !1 }).each((r) => {
      const a = r.issues.map((i) => i.selector);
      return Object.values(r.issuesGroup).forEach((i) => {
        i.forEach((o) => {
          a.push(o.selector);
        });
      }), cy.wrap(a, { log: !1 }).each((i, o) => {
        if (!i.includes(">>>"))
          return cy.window({ log: !1 }).then((l) => {
            const s = l.document.querySelector(
              i
            ), u = window.getComputedStyle(s), { top: c, left: g } = s.getBoundingClientRect();
            if (n[r.ruleId] = n[r.ruleId] || {}, s.offsetWidth === 0 || s.offsetHeight === 0 || u.display === "none" || u.visibility === "hidden" || u.opacity === "0")
              return n[r.ruleId][i] = "", cy.wrap(null, { log: !1 });
            const w = l.document.createElement("div");
            w.id = "custom-screenshot-overlay", w.style.position = "absolute", w.style.top = Math.max(c - 32, 0) + "px", w.style.left = Math.max(g - 32, 0) + "px", w.style.width = Math.min(
              s.offsetWidth + 64,
              l.innerWidth - w.offsetLeft
            ) + "px", w.style.height = Math.min(
              s.offsetHeight + 64,
              l.innerHeight - w.offsetTop
            ) + "px", l.document.body.appendChild(w);
            const v = `${Cypress.currentTest.title}-${r.ruleId}-${o + 1}-${Date.now()}`;
            return cy.get("#custom-screenshot-overlay", { log: !1 }).screenshot(v, {
              overwrite: !0,
              onAfterScreenshot: (N, { path: D }) => {
                n[r.ruleId][i] = `${D}`;
              }
            }).then(() => cy.readFile(n[r.ruleId][i], "base64").then((N) => (n[r.ruleId][i] = `../screenshots/${v}.png`, cy.writeFile(
              `${t}/screenshots/${v}.png`,
              N,
              "base64"
            )))).then(() => {
              var N;
              return (N = l.document.querySelector("#custom-screenshot-overlay")) == null ? void 0 : N.remove();
            });
          });
      });
    }).then(() => n);
  } catch (r) {
    ht("makeScreenshots", r);
  }
  return cy.wrap(n, { log: !1 });
};
function dd(e) {
  return cy.then(() => {
    for (const t of e)
      md(t);
  }).then(() => {
    pd(e);
  });
}
function md(e) {
  const t = `Violation (${e.level})`, n = `Violation (${e.level})`, r = {
    Rule: e.ruleId,
    Level: e.level,
    Details: e,
    Issues: null
  }, a = Object.keys(e.issuesGroup);
  let i = e.issues.map((o) => o.selector);
  a.forEach((o) => {
    const l = e.issuesGroup[o].map(
      (s) => s.selector
    );
    i = i.concat(l), Cypress.log({
      $el: Cypress.$(l.join(", ")),
      name: t,
      displayName: n,
      message: `${e.ruleId} rule | group - "${o}" | on ${l.length} Node${l.length === 1 ? "" : "s"}`,
      consoleProps: () => ({
        ...r,
        Issues: l.length
      })
    });
  }), Cypress.log({
    $el: Cypress.$(i.join(", ")),
    name: t,
    displayName: n,
    message: `${e.ruleId} rule${a.length ? " | all | " : " "}on ${i.length} Node${i.length === 1 ? "" : "s"}`,
    consoleProps: () => ({
      ...r,
      Issues: i.length
    })
  });
}
function pd(e) {
  Cypress.log({
    name: "Summary",
    displayName: "Summary",
    message: `${e.length} accessibility violation${e.length === 1 ? "" : "s"} ${e.length === 1 ? "was" : "were"} detected`,
    consoleProps: () => ({ Violations: e }),
    type: "parent"
  });
}
const hd = (e) => {
  cy.wrap({ violations: e }, { log: !1 }).then(({ violations: t }) => {
    if (t.length > 0) {
      const n = new gd(
        `${t.length} accessibility violation${t.length === 1 ? "" : "s"} ${t.length === 1 ? "was" : "were"} detected`
      );
      throw n.stack = void 0, n;
    }
  });
};
class gd extends Error {
  constructor() {
    super(...arguments);
    Wn(this, "name", "AccessibilityViolationError");
  }
}
const ht = (e, t, n = {}) => {
  const r = Ku(), a = JSON.stringify(n);
  Cypress.log({
    type: "parent",
    name: "Error",
    message: "",
    displayName: `Exception during ${e} execution`,
    consoleProps: () => ({ Error: t, ...n })
  }), cy.writeFile(
    `cypress/reports/${Cypress.currentTest.title}/userway-debug-${r}.log`,
    `${r}:: ${e} failed with: "${t}" and arguments: ${a}`
  );
};
function fd(e = {}) {
  wd().then((t) => {
    t || bd();
  });
  try {
    return cy.url().then((t) => (Cypress.env("currentUrl", t), cy)).window({ log: !1 }).then((t) => {
      const n = t.StaticAnalysis.analyze;
      return n(e);
    }).then((t) => {
      const n = id(t, e), r = {
        htmlOrigin: "",
        date: (/* @__PURE__ */ new Date()).toISOString(),
        test: Cypress.currentTest.titlePath,
        url: Cypress.env("currentUrl"),
        relativePath: Cypress.spec.relative,
        framework: "Cypress"
      };
      return cy.wrap({ fullReport: t, violations: n, meta: r }, { log: !1 });
    });
  } catch (t) {
    ht("launchAnalysis", t);
    const n = {
      meta: {
        url: "",
        date: "",
        test: [""],
        relativePath: "",
        htmlOrigin: "",
        framework: "Cypress"
      },
      fullReport: {},
      violations: []
    };
    return cy.wrap(n, { log: !1 });
  }
}
function wd() {
  return cy.window({ log: !1 }).then((e) => {
    var n;
    return typeof ((n = e == null ? void 0 : e.StaticAnalysis) == null ? void 0 : n.analyze) == "function";
  });
}
function bd() {
  try {
    return cy.window({ log: !1 }).then((e) => e.eval(ud));
  } catch (e) {
    return ht("injectStaticAnalysis", e), cy.wrap(null, { log: !1 });
  }
}
const Ad = () => {
};
function Dd(e = {}) {
  const {
    onResult: t = Ad,
    strict: n = !0,
    screenshots: r = !1,
    saveReport: a,
    ignoreUrls: i,
    reportPath: o,
    ...l
  } = Z(sd(), { ...e, reportPath: void 0 });
  l.switchOff || (l.switchOff = Cypress.env("STATIC_ANALYSIS_SWITCH_OFF"));
  const s = o || "uw-a11y-reports";
  return cy.url().then((u) => (i && od(u, i) && (l.switchOff = !0), fd(l).then(
    (c) => r ? cd(c.violations, s).then(
      (g) => cy.wrap(
        {
          result: c,
          screenshotsMeta: g
        },
        { log: !1 }
      )
    ) : cy.wrap({ result: c, screenshotsMeta: {} }, { log: !1 })
  ).then(({ result: c, screenshotsMeta: g }) => (a && cy.userwaySaveReport({
    screenshotsMeta: g,
    format: a,
    body: Object.values(c.fullReport),
    meta: c.meta,
    reportPath: s
  }), c.violations.length > 0 && dd(c.violations), t(c), n && hd(c.violations), cy.wrap({ ...c, screenshotsMeta: g }, { log: !1 })))));
}
function yd({
  body: e,
  format: t = "json",
  reportPath: n,
  screenshotsMeta: r,
  meta: a
}) {
  return cy.request(Cypress.env("currentUrl"), { log: !1 }).then((i) => (a.htmlOrigin = `../pages/${Zu(
    Cypress.env("currentUrl")
  )}`, cy.writeFile(
    `${n}/pages/${a.htmlOrigin}`,
    i.body
  ))).then(() => {
    try {
      if (t === "json")
        return Cd(
          {
            meta: a,
            violations: e
          },
          n,
          r
        );
      if (t === "html")
        return vd(
          {
            meta: a,
            violations: e
          },
          n,
          r
        );
      if (t === "csv")
        return Td(e, n, r);
    } catch (i) {
      ht("saveReport", i, { format: t });
    }
    return cy.wrap(null, { log: !1 });
  });
}
function vd({ meta: e, violations: t }, n, r) {
  const a = `${n}/reports/${Tn("html")}`;
  return cy.writeFile(a, Ju(e, t, r));
}
function Cd({ meta: e, violations: t }, n, r) {
  const a = `${n}/reports/${Tn("json")}`;
  return cy.writeFile(a, ec(e, t, r));
}
function Td(e, t, n) {
  const r = `${t}/reports/${Tn("csv")}`;
  return cy.writeFile(r, ad(e, n));
}
Cypress.Commands.add("userwayAnalysis", Dd);
Cypress.Commands.add("userwaySaveReport", yd);
export {
  Qu as RulesIds,
  Id as setupUserway
};
