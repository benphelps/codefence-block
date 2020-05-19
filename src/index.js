import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls } from "@wordpress/block-editor";
import {
    SelectControl,
    TextControl,
    Icon,
    PanelBody,
    PanelRow,
} from "@wordpress/components";

const blockStyle = {
    fontFamily: "Menlo,Consolas,monaco,monospace",
    color: "#23282d",
};

const CodefenceLogo = () => (
    <Icon
        icon={() => (
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                        <g
                            y="5.094482"
                            x="19.229298"
                            transform="matrix(0.08946709980747491,0.07134598859086957,-0.07134598859086957,0.08946709980747491,8.153187991957223,6.733092861234863) "
                        >
                            <svg
                                viewBox="35.93547439575195 2.708871364593506 457.85296630859375 407.2933349609375"
                                height="128"
                                width="128"
                                y="-45.842947"
                                x="-36.885849"
                                preserveAspectRatio="xMinYMin"
                            >
                                <path d="m143.89,291.4a24.6,24.6 0 0 1 -3.89,34.54l-64.18,51.06a24.59,24.59 0 0 1 -34.55,-4l0,0a24.6,24.6 0 0 1 3.94,-34.54l64.15,-51a24.56,24.56 0 0 1 34.53,3.94z" />
                                <path d="m195.66,251.16a24.58,24.58 0 1 1 -34.52,-3.92a24.58,24.58 0 0 1 34.52,3.92z" />
                                <path d="m182.69,360.51a24.58,24.58 0 0 1 3.93,-34.51l64.14,-51a24.57,24.57 0 0 1 34.55,4l0,0a24.59,24.59 0 0 1 -3.94,34.54l-64.14,51a24.57,24.57 0 0 1 -34.54,-3.91l0,-0.12z" />
                                <path d="m130.91,400.72a24.59,24.59 0 1 1 34.56,3.93a24.59,24.59 0 0 1 -34.56,-3.93z" />
                                <path d="m155.5,175.55a24.58,24.58 0 0 1 -3.92,34.54l-64.15,51a24.57,24.57 0 0 1 -34.53,-3.95l0,0a24.59,24.59 0 0 1 3.93,-34.54l64.15,-51a24.55,24.55 0 0 1 34.52,3.94l0,0.01z" />
                                <path d="m313.57,156.43a24.59,24.59 0 0 1 -4,34.56l-64.12,51a24.59,24.59 0 0 1 -34.55,-3.94l0,0a24.57,24.57 0 0 1 3.95,-34.53l64.12,-51a24.57,24.57 0 0 1 34.56,3.92l0.04,-0.01z" />
                                <path d="m207.28,135.32a24.58,24.58 0 1 1 -34.55,-3.94a24.57,24.57 0 0 1 34.55,3.94z" />
                                <path d="m164.33,26.63a12.58,12.58 0 0 0 -2.06,18.14l43.66,54.88q5.35,6.73 11.6,7.67a90.37,90.37 0 0 0 16.8,0.38l156.31,-14.53l26.83,-88.1l-243.15,18.31c-4.73,0.62 -8.07,1.72 -9.99,3.25z" />
                                <path d="m341.18,242a55.71,55.71 0 0 0 -3.56,15.8c-0.25,4.64 1.57,9.38 5.4,14.19l43.26,54.39c2.54,3.21 5.5,4.93 8.83,5.17a13.17,13.17 0 0 0 9.31,-3.1c1.92,-1.53 3.75,-4.52 5.42,-9l72.29,-232l-91.52,5.9l-49.43,148.65z" />
                                <path d="m390.47,93.55l91.66,-6.06l8.46,-27.19q3.5,-11.43 3.17,-18.25c-0.19,-4.57 -2.11,-9.09 -5.66,-13.57l-12.27,-15.39a25,25 0 0 0 -12.54,-8.89q-7.23,-2.15 -18.29,-1.2l-27.53,2.07l-27,88.48z" />
                            </svg>
                        </g>
                    </g>
                </g>
            </svg>
        )}
    />
);

registerBlockType("codefence/codefence", {
    title: "codefence",
    description: "Embed runnable code blocks directly into your website.",
    icon: CodefenceLogo,
    category: "embed",
    example: {
        attributes: {
            content: 'console.log("Hello World!");',
            language: "js",
            heading: "Hello World",
            artifact: "",
        },
    },
    attributes: {
        content: {
            type: "string",
            source: "text",
            selector: "textarea",
        },
        language: {
            type: "string",
        },
        version: {
            type: "string",
        },
        heading: {
            type: "string",
        },
        artifact: {
            type: "string",
        },
    },
    edit: (props) => {
        const { attributes } = props;
        const { content, language, heading, artifact, version } = attributes;

        const onLanguageChange = (language) => {
            props.setAttributes({
                language,
            });
        };

        const onVersionChange = (version) => {
            props.setAttributes({
                version,
            });
            ``;
        };

        const onHeadingChange = (heading) => {
            props.setAttributes({
                heading,
            });
        };

        const onArtifactChange = (artifact) => {
            props.setAttributes({
                artifact,
            });
        };

        const onContentChange = (content) => {
            props.setAttributes({
                content,
            });
        };

        return (
            <div>
                {
                    <InspectorControls>
                        <PanelBody title="Embed Settings">
                            <PanelRow>
                                <SelectControl
                                    label="Language"
                                    help="The code block language."
                                    value={language}
                                    options={[
                                        { label: "C", value: "c" },
                                        { label: "C++", value: "cpp" },
                                        { label: "C#", value: "cs" },
                                        { label: "Clojure", value: "clojure" },
                                        { label: "Elixir", value: "elixir" },
                                        { label: "Erlang", value: "erlang" },
                                        { label: "GNU Assembly", value: "asm" },
                                        { label: "Go", value: "go" },
                                        { label: "Haskell", value: "haskell" },
                                        { label: "Java", value: "java" },
                                        {
                                            label: "JavaScript",
                                            value: "js",
                                        },
                                        { label: "Kotlin", value: "kotlin" },
                                        { label: "Lua", value: "lua" },
                                        { label: "PHP", value: "php" },
                                        { label: "Python", value: "py" },
                                        { label: "R", value: "r" },
                                        { label: "Ruby", value: "rb" },
                                        { label: "Rust", value: "rs" },
                                        { label: "Scala", value: "scala" },
                                        { label: "Swift", value: "swift" },
                                        { label: "TypeScript", value: "ts" },
                                    ]}
                                    onChange={onLanguageChange}
                                />
                            </PanelRow>
                            {language == "lua" && (
                                <PanelRow>
                                    <SelectControl
                                        label="Lua Version"
                                        help="The version to use."
                                        value={version || "5.3.5"}
                                        options={[
                                            {
                                                label: "5.3.5",
                                                value: "5.3.5",
                                            },
                                            {
                                                label: "5.2.4",
                                                value: "5.2.4",
                                            },
                                            {
                                                label: "5.1.5",
                                                value: "5.1.5",
                                            },
                                        ]}
                                        onChange={onVersionChange}
                                    />
                                </PanelRow>
                            )}
                            {language == "python" && (
                                <PanelRow>
                                    <SelectControl
                                        label="Python Version"
                                        help="The version to use."
                                        value={version || "3.8.2"}
                                        options={[
                                            {
                                                label: "3.8.2",
                                                value: "3.8.2",
                                            },
                                            {
                                                label: "2.7.18",
                                                value: "2.7.18",
                                            },
                                        ]}
                                        onChange={onVersionChange}
                                    />
                                </PanelRow>
                            )}
                            {language == "java" && (
                                <PanelRow>
                                    <SelectControl
                                        label="Java Version"
                                        help="The version to use."
                                        value={
                                            version || "adopt-openjdk-13.0.2+8"
                                        }
                                        options={[
                                            {
                                                label: "adopt-openjdk-13.0.2+8",
                                                value: "adopt-openjdk-13.0.2+8",
                                            },
                                            {
                                                label:
                                                    "adopt-openjdk-8u252-b09",
                                                value:
                                                    "adopt-openjdk-8u252-b09",
                                            },
                                        ]}
                                        onChange={onVersionChange}
                                    />
                                </PanelRow>
                            )}
                            {(language == "c" || language == "cpp") && (
                                <PanelRow>
                                    <SelectControl
                                        label="GCC Version"
                                        help="The version to use."
                                        value={version || "10.0.1"}
                                        options={[
                                            {
                                                label: "10.0.1",
                                                value: "10.0.1",
                                            },
                                            {
                                                label: "9.3.0",
                                                value: "9.3.0",
                                            },
                                            {
                                                label: "8.4.0",
                                                value: "8.4.0",
                                            },
                                            {
                                                label: "7.5.0",
                                                value: "7.5.0",
                                            },
                                        ]}
                                        onChange={onVersionChange}
                                    />
                                </PanelRow>
                            )}
                            <PanelRow>
                                <TextControl
                                    label="Heading"
                                    help="The code block title, leave empty for no title."
                                    value={heading}
                                    onChange={onHeadingChange}
                                />
                            </PanelRow>
                            <PanelRow>
                                <TextControl
                                    label="Artifact"
                                    help="Files to export, leave empty if none."
                                    value={artifact}
                                    onChange={onArtifactChange}
                                />
                            </PanelRow>
                        </PanelBody>
                    </InspectorControls>
                }
                <code-fence
                    lang={language}
                    heading={heading}
                    artifact={artifact}
                    version={version}
                >
                    <textarea vue-slot="code">{content}</textarea>
                </code-fence>
            </div>
        );
    },
    save: (props) => {
        return (
            <p>
                <code-fence
                    lang={props.attributes.language}
                    heading={props.attributes.heading}
                    artifact={props.attributes.artifact}
                    version={props.attributes.version}
                >
                    <textarea vue-slot="code">
                        {props.attributes.content}
                    </textarea>
                </code-fence>
            </p>
        );
    },
});
