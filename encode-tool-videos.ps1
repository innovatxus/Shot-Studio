# encode-tool-videos.ps1
# Re-encode all 22 tool-card MP4s to VP9 WebM <= 300 KB and extract poster JPGs.
# Run from the repo root: .\encode-tool-videos.ps1
# Requires ffmpeg in PATH. Check with: ffmpeg -version

$dir  = "public\assets\video\tools-videos"
$nullDev = "NUL"   # Windows null device (use /dev/null on macOS/Linux)

$files = Get-ChildItem "$dir\*.mp4" | Sort-Object Name
Write-Host "Found $($files.Count) MP4 files to process.`n"

foreach ($f in $files) {
    $inFile = $f.FullName
    $base  = Join-Path (Split-Path $f.FullName) $f.BaseName

    Write-Host "[$($f.Name)]"

    # ── VP9 WebM — 2-pass, 640px wide, target 220 kbps / max 280 kbps ──────
    # Pass 1 (analysis only — output discarded)
    & ffmpeg -y -i $inFile -an -c:v libvpx-vp9 `
        -vf "scale=640:-2" `
        -b:v 220k -maxrate 280k -bufsize 560k `
        -deadline good -cpu-used 4 `
        -row-mt 1 -pass 1 -f webm $nullDev 2>&1 | Out-Null

    # Pass 2 (final encode — overwrites existing .webm)
    & ffmpeg -y -i $inFile -an -c:v libvpx-vp9 `
        -vf "scale=640:-2" `
        -b:v 220k -maxrate 280k -bufsize 560k `
        -deadline good -cpu-used 2 `
        -row-mt 1 -pass 2 `
        "$base.webm"

    # ── Poster JPG — 1 frame at 0.5 s, quality 4 (≈ 20-35 KB) ─────────────
    & ffmpeg -y -i $inFile -ss 0.5 -vframes 1 `
        -vf "scale=640:-2" `
        -q:v 4 `
        "$base.jpg"

    # ── Size report ──────────────────────────────────────────────────────────
    $webm = Get-Item "$base.webm" -ErrorAction SilentlyContinue
    $jpg  = Get-Item "$base.jpg"  -ErrorAction SilentlyContinue
    if ($webm) { Write-Host "  webm: $([math]::Round($webm.Length/1KB)) KB" }
    if ($jpg)  { Write-Host "  jpg:  $([math]::Round($jpg.Length/1KB)) KB" }
    Write-Host ""
}

# Clean up 2-pass log files ffmpeg leaves behind
Remove-Item "ffmpeg2pass-0.log*" -ErrorAction SilentlyContinue

Write-Host "Done. Review sizes above — if any webm is still > 300 KB, raise -crf to 38 or lower -b:v to 180k."
