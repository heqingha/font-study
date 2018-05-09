import $ from 'jquery';
import EventEmitter from 'events';

const Selector = (classPrefix) => ({
    PREFIX: classPrefix,
    NAV: `${classPrefix}-nav`,
    CONTENT: `${classPrefix}-content`,
    TAB: `${classPrefix}-tab`,
    PANEL: `${classPrefix}-panel`,
    ACTIVE: `${classPrefix}-active`,
    DISABLE: `${classPrefix}-disable`,
});

class Tabs {
    // static defaultOptions = {
    //     classPrefix: "tabs",
    //     activeIndex: 0
    // };
    constructor(options) {
        this.options = $.extend({}, Tabs.defaultOptions, options);
        this.element = $(this.options.element);
        this.fromIndex = this.options.activeIndex;

        this.events = new EventEmitter();
        this.selector = Selector(this.options.classPrefix);

        this._initElement();
        this._initTabs();
        this._initPanels();
        this._bindTabs();

        if (this.options.activeIndex !== undefined) {
            //初始
            this.switchTo(this.options.activeIndex);
        }
    }

    _initElement() {
        this.element.addClass(this.selector.PREFIX);
        this.tabs = $(this.options.tabs);
        this.panels = $(this.options.panels);
        this.nav = $(this.options.nav);
        this.content = $(this.options.content);

        this.length = this.tabs.length;
    }

    _initTabs() {
        this.nav && this.nav.addClass(this.selector.NAV);
        this.tabs.addClass(this.selector.TAB).each((index, tab) => {
            $(tab).data('value', index);
        });
    }

    _initPanels() {
        this.content.addClass(this.selector.CONTENT);
        this.panels.addClass(this.selector.PANEL);
    }

    _bindTabs() {
        this.tabs.click((e) => {
            const $el = $(e.target);
            if (!$el.hasClass(this.selector.DISABLE)) {
                //点击
                this.switchTo($el.data('value'));
            }
        });
    }

    events(name) {
        return this.events;
    }

    switchTo(toIndex) {
        this._switchTo(toIndex);
    }

    _switchTo(toIndex) {
        const fromIndex = this.fromIndex;
        const panelInfo = this._getPanelInfo(toIndex);

        this._switchTabs(toIndex);
        this._switchPanel(panelInfo);
        this.events.emit('change', { toIndex, fromIndex });

        this.fromIndex = toIndex;
    }

    _switchTabs(toIndex) {
        const tabs = this.tabs;
        const fromIndex = this.fromIndex;

        if (tabs.length < 1) return;

        tabs
            .eq(fromIndex)
            .removeClass(this.selector.ACTIVE)
            .attr('aria-selected', false);
        tabs
            .eq(toIndex)
            .addClass(this.selector.ACTIVE)
            .attr('aria-selected', true);
    }

    _switchPanel(panelInfo) {
        panelInfo.fromPanels
            .attr('aria-hidden', true)
            .hide();
        panelInfo.toPanels
            .attr('aria-hidden', false)
            .show();
    }

    _getPanelInfo(toIndex) {
        const panels = this.panels;
        const fromIndex = this.fromIndex;

        let fromPanels, toPanels;

        if (fromIndex > -1) {
            fromPanels = this.panels.slice(fromIndex, (fromIndex + 1));
        }

        toPanels = this.panels.slice(toIndex, (toIndex + 1));

        return {
            toIndex: toIndex,
            fromIndex: fromIndex,
            toPanels: $(toPanels),
            fromPanels: $(fromPanels),
        };
    }

    destroy() {
        this.events.removeAllListeners();
    }
}

Tabs.defaultOptions = {
    classPrefix: "tabs",
    activeIndex: 0
};

export default Tabs;
