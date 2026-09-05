# BEAT 07 GEOMETRY REPORT

## STATUS

**PASS**

## CANONICAL SOURCE

`PEOPLEGROVE_CANONICAL_V2_SOURCE.pdf` — page **7 / 18**
Sheet: **CONSTRUCTION SHEET — OPPORTUNITY DETAIL** (footer text confirmed).
Title block: *PEOPLEGROVE V2 — OPPORTUNITY HUB*.

## SOURCE-TYPE TEST

Page 7 was inspected programmatically with PyMuPDF (`get_drawings`, `get_text`). It contains **genuine vector geometry**, not raster:

- **0 raster images** on the page (`get_images` → empty).
- **30 rectangle (`re`) primitives** plus rounded-rectangle **paths** (line+Bézier) for the zone cards.
- The Opportunity Detail construction wireframe is the left frame; it is cleanly isolatable (all its objects fall within one 390×844 frame at PDF x∈[441,720]). A second frame at x∈[773,1051] is the rendered reference and is excluded.
- Vector stroke metadata is present: the frame/card borders carry stroke width **0.71625 PDF units**, which equals 1 source px × scale — an independent confirmation of the transform.

Conclusion: the construction is genuinely vector and recoverable. No rasterization or pixel measurement was used at any step.

## PDF → SOURCE TRANSFORM

Single uniform affine map, source frame = native 390 × 844:

```
scale_x = scale_y = 0.71625   (PDF units per source px)
translation = (441.0, 34.5)   # PDF coords of source (0,0)
source_frame_bbox_pdf = [441.0, 34.5, 720.338, 639.015]
src_x = (pdf_x - 441.0) / 0.71625
src_y = (pdf_y -  34.5) / 0.71625
```
Scale is fixed two independent ways that agree: (a) frame width 279.3375 / 390 = 0.71625 and height 604.515 / 844 = 0.71625; (b) the stamped 1px hairline stroke width = 0.71625. Residual on the frame corners after mapping is < 3×10⁻⁵ px.

## CANONICAL ANCHORS (printed in the source legend)

| anchor | value |
|---|---|
| hero_field_end_y | 318 |
| terms_rise | -32 |
| sticky_cta_y | 790 |
| sticky_cta_height | 54 |
| gutter | 20 |
| card_radius | 20 |
| terms_row_pad | 9 |
| hairline | 1 |

Additional printed construction constants present in the legend (recorded, not used to infer bounds): base_unit=4, sheet_radius=30, category_rule=3, tracker_keyline=4, edge_tab=22, scroll_clearance=104.

## BLINDLY RECOVERED SUBREGIONS

Outer `source_bbox` shown; stroked elements converted from 1px-hairline path-center (*.5) to integer outer bound (documented). Fills are already on integer edges.

| region | pdf_bbox | src x | src y | width | height | radius(src) | draw idx |
|---|---|---|---|---|---|---|---|
| detail_frame | [441.0, 34.5, 720.338, 639.015] | 0 | 0 | 390 | 844 | None | 3 |
| hero_field | [441.0, 34.5, 720.338, 262.268] | 0 | 0 | 390 | 318 | None | 5 |
| hero_chip_left | [455.683, 80.698, 486.482, 111.497] | 20 | 64 | 44 | 44 | None | 7 |
| hero_chip_right | [674.856, 80.698, 705.654, 111.497] | 326 | 64 | 44 | 44 | None | 8 |
| hero_avatar | [455.683, 140.863, 492.212, 177.392] | 20 | 148 | 52 | 52 | None | 9 |
| terms_card | [455.683, 239.706, 705.654, 413.754] | 20 | 286 | 350 | 244 | 17.5 | 10 |
| next_action_card | [455.683, 428.796, 705.654, 483.947] | 20 | 550 | 350 | 78 | 19.5 | 25 |
| role_narrative_card | [455.683, 500.421, 705.654, 545.544] | 20 | 650 | 350 | 64 | 11.5 | 26 |
| org_strip_card | [455.683, 556.288, 705.654, 594.249] | 20 | 728 | 350 | 54 | 11.5 | 29 |
| sticky_cta_primary | [455.683, 600.696, 648.354, 638.657] | 20 | 790 | 270 | 54 | None | 30 |
| action_control | [657.666, 600.696, 695.627, 638.657] | 302 | 790 | 54 | 54 | None | 31 |

Supporting recovered evidence inside the terms card: **5 rows** (label chips at x=36, right-aligned value chips ending x=354, each **9 px** tall = terms_row_pad) separated by **4 hairline dividers (1 px)** at y = 338, 386, 434, 482.

## SEMANTIC ZONES

| zone | class | x | y | width | height | derived_from |
|---|---|---|---|---|---|---|
| identity | DIRECTLY RECOVERED | 0 | 0 | 390 | 318 | hero_field |
| terms | DIRECTLY RECOVERED | 20 | 286 | 350 | 244 | terms_card |
| next_action | DIRECTLY RECOVERED | 20 | 550 | 350 | 78 | next_action_card |
| narrative | DERIVED UNION | 20 | 650 | 350 | 132 | role_narrative_card, org_strip_card |
| action | DERIVED UNION | 20 | 790 | 336 | 54 | sticky_cta_primary, action_control |

- **identity, terms, next_action** — one semantic zone = one recovered vector object (DIRECTLY RECOVERED).
- **narrative** — union of *role_narrative_card* (idx 26) + *org_strip_card* (idx 29); no single vector object defines the union (DERIVED FROM VERIFIED VECTOR SUBREGIONS).
- **action** — union of *sticky_cta_primary* pill (idx 30) + *action_control* secondary (idx 31) (DERIVED FROM VERIFIED VECTOR SUBREGIONS).

## VALIDATION

| check | result |
|---|---|
| frame == 390 × 844 | PASS ✓ |
| hero_field_bottom == 318 | PASS ✓ |
| hero_bottom − terms_top == 32  (rise −32) | PASS ✓ |
| sticky_cta y == 790 and height == 54 | PASS ✓ |
| gutter == 20 (both sides) | PASS ✓ |
| terms_row_pad == 9 | PASS ✓ |
| hairline == 1 | PASS ✓ |
| single reproducible transform | PASS ✓ |
| no raster measurement used | PASS ✓ |

**card_radius:** Printed token card_radius=20 is nominal. Recovered drawn corner radii vary per card (terms 17.5, next_action 19.5, role_narrative 11.5, org_strip 11.5, sticky_cta pill 26.5). Radius is a corner treatment, not a zone bound; recovered per-card values reported truthfully.

## SOURCE GAPS

None. Every zone bound was recovered from vector geometry.

## METHODS NOT USED

- NO SCREENSHOT TRACING
- NO OCR GEOMETRY
- NO RASTER EDGE MEASUREMENT
- NO DOWNSTREAM ANSWER TABLE
- NO CURRENT-FIGMA SUBSTITUTION (Figma node 33:136 not consulted for coordinates)

## TRUTH CLASSIFICATION

- **2D recovered vector geometry = VERIFIED**
- **semantic unions (narrative, action) = DERIVED FROM VERIFIED VECTOR SUBREGIONS**
- **physical depth = AUTHORED** (not included in this export)
- **camera 5° = FROZEN PRODUCTION DIRECTION** (not part of plan geometry)
- **material / lighting = AUTHORED PRODUCTION** (not part of plan geometry)

plan geometry verified · depth authored
