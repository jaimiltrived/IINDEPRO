Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem "c:\LINDPOR\public\accordion\*.jpg"
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq "image/jpeg"
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]65)

foreach ($img in $images) {
    if ($img.Name -match "^low_") { continue }
    $bmp = [System.Drawing.Image]::FromFile($img.FullName)
    $scale = 1920.0 / $bmp.Width
    if ($scale -gt 1) { $scale = 1 }
    $newW = [int]($bmp.Width * $scale)
    $newH = [int]($bmp.Height * $scale)
    $newBmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($newBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($bmp, 0, 0, $newW, $newH)
    $bmp.Dispose()
    
    $outPath = Join-Path $img.DirectoryName "low_$($img.Name)"
    $newBmp.Save($outPath, $jpegCodec, $encoderParams)
    $newBmp.Dispose()
    $g.Dispose()
    
    Move-Item -Path $outPath -Destination $img.FullName -Force
    Write-Host "Compressed $($img.Name)"
}




