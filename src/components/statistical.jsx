export default function Statistical({stats}) {
    return (<section class="statistics">
  <h2 class="title">Upload stats</h2>
        <ul class="stat-list">
            {stats.map(obj => {
                return (<li class="item" key={obj.id}>
                <span class="label">{obj.label}</span>
                    <span class="percentage">{obj.percentage}</span>
                </li>)
            })}
  </ul>
</section>)
} 