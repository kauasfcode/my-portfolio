import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "../../components/magicui/terminal";

export default function DescriberTerminal(){
    return(
        <>
            <Terminal className="text-black">
                <TypingAnimation>&gt; yarn start my-brain</TypingAnimation>

                <AnimatedSpan delay={1500} className="text-green-500">
                    <span>✔ 🔍  Verifying environment</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2000} className="text-green-500">
                    <span>✔ Creative core detected</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2500} className="text-green-500">
                    <span>✔ Productivity module loaded</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-green-500">
                    <span>✔ Curiosity engine running</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3500} className="text-gray-900">
                    <span>{'>'} booting system...</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4000} className="text-green-500">
                    <span>✔ Thinking outside the box...</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4500} className="text-green-500">
                    <span>✔ Initializing focus and efficiency.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={5000} className="text-green-500">
                    <span>✔ Connecting to challenge solver daemon</span>
                </AnimatedSpan>

                <AnimatedSpan delay={5500} className="text-green-500">
                    <span>✔ Loading passion for learning and building</span>
                </AnimatedSpan>

                <AnimatedSpan delay={6000} className="text-green-500">
                    <span>✔ Resolving obstacles with smart, effective solutions</span>
                </AnimatedSpan>

                <TypingAnimation delay={6500} className="text-muted-foreground">
                    &gt;&gt; Connected to: [Kauã de sousa]
                </TypingAnimation>
            </Terminal>
        </>
    )
}