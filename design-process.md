# Week 4 — Run Together redesign

## Aim and evidence limits

Help a first-time runner choose a suitable run and understand what happens on arrival. The available evidence is the earlier website and the Week 2 heuristic evaluation recorded in the project context. The student confirmed that no Week 3–4 interview records or context map are available. This proposal therefore does not fully satisfy the research basis requested in the assignment. The map and ideas below are preliminary analysis, not participant findings.

## Recorded observations

- The original Join Run action worked, persisted after refresh, and could be cancelled by clicking again.
- The Week 2 evaluation identified unclear cancellation wording: Joined did not explain that clicking again cancels.
- The evaluation identified old August dates alongside weekly schedules, making the next event unclear.
- Consistent activity cards and clear joined feedback were strengths to retain.

## Preliminary context map — assumptions to validate

| Stage | User task | Possible uncertainty | Design response |
| --- | --- | --- | --- |
| Before choosing | Find an appropriate group | Can I keep up? | Distance, level, pace range and walking policy |
| Before leaving | Plan the visit | When and where should I arrive? | Next occurrence, time and landmark |
| Arriving | Recognise the group | Is coming alone welcome? | Sample host description and arrival sequence |
| After choosing | Check or change plans | Did I join? How do I cancel? | My runs, count, confirmation and Cancel booking |

Pace and solo-arrival concerns are hypotheses. They have not been reported by interview participants.

## Ideation and selected flow

Ideas considered: pace labels, detailed arrival guidance, a route map, a member chat and a booking summary. The prototype focuses on pace, arrival and booking clarity because these fit a small browser-only project. A route map and member chat would need additional data or services.

Flow: Find a run → compare level and pace → view details → join → check My runs → cancel if plans change.

The grayscale wireframe separates content and navigation from final styling. The implemented build retains this flow with a green running-track visual, responsive cards, level filters and a details dialog. Upcoming dates are calculated in the viewer's device timezone; a real multi-city service would need explicit event timezones. Activities and host details are clearly marked as sample content.

## Research still required

Interview two real people who have considered joining a running group. Ask for permission before taking notes. Do not collect unnecessary personal details.

1. Tell me about the last time you looked for a group activity.
2. What information did you need before deciding?
3. How did you decide whether the pace or difficulty suited you?
4. What happened when you arrived, or what stopped you attending?
5. How do you usually change or cancel a plan like this?

Record anonymous notes separately as P1 and P2. Summarise actual observations, identify recurring needs, and revise this map and prototype based on those observations. Do not fill in imagined answers.

## Prototype evaluation plan

Ask a participant to choose a beginner run with walking breaks, find the meeting landmark, join, find the booking, and cancel. Observe where they hesitate. Ask what they expect each button to do before explaining it. Record completion, confusion and suggested changes. No participant usability test has yet been performed.

## AI disclosure

ChatGPT/Codex assisted with implementation, wireframe and documentation. Research gaps are disclosed. AI-generated design suggestions are treated as hypotheses, not user research.
