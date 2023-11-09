import { mount } from "@vue/test-utils";
import LastEdit from "../../views/LastEdit.vue";
import { describe, expect, it, test } from "vitest";


describe("LastEdit.vue", () => {
    it("renders the correct style for error", () => {
        const wrapper = mount(LastEdit);
        expect(wrapper.text()).toContain('Brands:All')
    });
});