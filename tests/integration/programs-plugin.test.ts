import { expect } from "chai";
import { ProgramsPlugin, WindowsProgramRepository } from "./../../src/ts/plugins/programs-plugin";
import { Config } from "./../../src/ts/config";

describe("programs-plugin", () => {
    describe("getAllItems", () => {
        it("should return some programs", () => {
            let programRepository = Config.getProgramRepository();
            let programsPlugin = new ProgramsPlugin(programRepository);

            let programs = programsPlugin.getAllItems();

            expect(programs.length).to.be.greaterThan(0);
        });

        it("all returned items should have set a name, execution argument and tags", () => {
            let programRepository = Config.getProgramRepository();
            let programsPlugin = new ProgramsPlugin(programRepository);

            let programs = programsPlugin.getAllItems();

            for (let program of programs) {
                expect(program).not.to.be.undefined;
                expect(program.name).not.to.be.undefined;
                expect(program.executionArgument).not.to.be.undefined;
                expect(program.tags).not.to.be.undefined;
            }
        });
    });
});