import React from "react";

export default function ItemResourceCard({ data }) {
  return (
    <div class="ui card">
      <div class="image">
        <img
          className="shrink"
          src={data.sprites.default}
          alt={`The Pokemon ${data.name}`}
        />
      </div>
      <div class="content">
        <div class="header">{data.name}</div>
        <div class="meta">
          <span class="date">{data.category.name}</span>
        </div>
        <div class="description">{data.effect_entries[0].short_effect}</div>
      </div>
      <div class="extra content">
        <div>
          Cost: {data.cost}
          <i class="ruble icon"></i>
        </div>
      </div>
    </div>
  );
}
